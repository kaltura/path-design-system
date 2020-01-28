import {useContext, useEffect, useState} from "react";
import {KalturaPlayerContext} from "./kaltura-player-provider";
import {PlayerLoadingStatus} from "./player-definitions";
import * as shortid from "shortid";
import Player = KalturaPlayerTypes.Player;
import KalturaPlayerManager = KalturaPlayerTypes.KalturaPlayerManager;

export interface UseLoadMediaOptions {
  autoplay: boolean;
  entryId: string;
  ks: string;
  onPlayerLoaded?: (entryId: string) => void;
  onMediaLoaded?: (entryId: string) => void;
  onPlayerLoadingError?: (entryId: string) => void;
  onMediaLoadingError?: (entryId: string) => void;
};

export interface LoadMediaState {
  playerId: string;
  player: Player | null;
  playerStatus: PlayerLoadingStatus;
  mediaStatus: PlayerLoadingStatus;
}

export const useLoadMedia = (options: UseLoadMediaOptions): LoadMediaState => {

  const {entryId, autoplay, ks, onMediaLoaded,
    onMediaLoadingError, onPlayerLoaded, onPlayerLoadingError} = options;

  const {state: playerManagerState} = useContext(KalturaPlayerContext);

  const [loadMediaState, setLoadMediaState] = useState<LoadMediaState>(
      {
        playerId: shortid.generate(),
        player: null,
        playerStatus: PlayerLoadingStatus.Initial,
        mediaStatus: PlayerLoadingStatus.Initial
      });


  const loadPlayer = () => {

    if(loadMediaState.player) {
      console.log('Kaltura player was already loaded');
      return;
    }

    setLoadMediaState(
      prevState => (
        {...prevState,
          playerStatus: PlayerLoadingStatus.Loading
        })
    );

    const playerManager = window['KalturaPlayer'] as KalturaPlayerManager;

    try {
      const player: KalturaPlayerTypes.Player = playerManager.setup(
        {
          targetId: loadMediaState.playerId,
          provider: {
            uiConfId: playerManagerState.config.uiConfId,
            partnerId: playerManagerState.config.partnerId,
            ks: ks
          },
          playback: {
            autoplay,
          }
        });

      if(onPlayerLoaded) onPlayerLoaded(entryId);
      setLoadMediaState(
        prevState => (
          {...prevState,
            player: player,
            playerStatus: PlayerLoadingStatus.Loaded
          })
      );
    } catch (e) {
      console.warn(`kaltura Player: setup failure: ${e}`);
      if(onPlayerLoadingError) onPlayerLoadingError(entryId);
      setLoadMediaState(prevState => (
        {
          ...prevState,
          playerStatus: PlayerLoadingStatus.Error
        })
      );
    }
  };

  const loadMedia = () => {

    if(!loadMediaState.player ||
      loadMediaState.playerStatus !== PlayerLoadingStatus.Loaded) {
      console.warn(`Kaltura player hasn't been setup yet.`);
      return;
    }

    // for typescript to allow calling methods on player instance //todo [sa]
    if(!loadMediaState.player) return;

    setLoadMediaState(prevState => (
      {
        ...prevState,
        mediaStatus: PlayerLoadingStatus.Loading
      })
    );

    loadMediaState.player.loadMedia( {entryId })
      .then(() => {
        console.log('Kaltura Player: Successfully loaded media');
        if(onMediaLoaded) onMediaLoaded(entryId);
        setLoadMediaState(prevState => (
          {
            ...prevState,
            mediaStatus: PlayerLoadingStatus.Loaded
          })
        );
      })
      .catch((err: any) => {
        console.warn(`Kaltura Player: 'loadMedia' error: ${err}`);
        if(onMediaLoadingError) onMediaLoadingError(entryId);
        setLoadMediaState(prevState => (
          {
            ...prevState,
            mediaStatus: PlayerLoadingStatus.Error
          })
        );
      });
  };

  const destroyPlayer = () => {
    if(loadMediaState.player) {
      loadMediaState.player.destroy();
      setLoadMediaState(prevState => (
        {
          ...prevState,
          player: null,
          playerStatus: PlayerLoadingStatus.Destroyed,
          mediaStatus: PlayerLoadingStatus.Destroyed
        })
      );
    }
  };

  //listen to player loading status in order to load media
  useEffect(() => {

    if(loadMediaState.playerStatus !== PlayerLoadingStatus.Loaded)
      return;

    loadMedia();

  }, [loadMediaState.playerStatus]);

  //listen to player manager loading status in order to load player
  useEffect(() => {
    if(loadMediaState.mediaStatus === PlayerLoadingStatus.Destroyed
      || loadMediaState.playerStatus === PlayerLoadingStatus.Destroyed) {
      console.warn('Kaltura player was destroyed.');
      return;
    }

    switch (playerManagerState.status) {
      case PlayerLoadingStatus.Loaded:
        loadPlayer();
        break;
      case PlayerLoadingStatus.Error:
        console.warn('Kaltura Player manager loading error');
        if(onPlayerLoadingError) onPlayerLoadingError(entryId);
        setLoadMediaState(prevState => (
          {
            ...prevState,
            playerStatus: PlayerLoadingStatus.Error
          })
        );
        break;
    }
    return () => {
      destroyPlayer();
    }
  }, [playerManagerState.status]);

  return loadMediaState;
};
