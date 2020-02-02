import {useContext, useEffect, useRef, useState} from "react";
import {KalturaPlayerContext, PlayerLoadingStatuses} from "./kaltura-player-context";
import * as shortid from "shortid";
import Player = KalturaPlayerTypes.Player;
import KalturaPlayerManager = KalturaPlayerTypes.KalturaPlayerManager;

export interface UseLoadMediaOptions {
  autoplay: boolean;
  entryId: string;
  onPlayerLoaded?: (entryId: string) => void;
  onMediaLoaded?: (entryId: string) => void;
  onPlayerLoadingError?: (entryId: string) => void;
  onMediaLoadingError?: (entryId: string) => void;
};

export interface LoadMediaState {
  playerId: string;
  playerStatus: PlayerLoadingStatuses;
  mediaStatus: PlayerLoadingStatuses;
}

export const useLoadMedia = (options: UseLoadMediaOptions): LoadMediaState => {

  const {entryId, autoplay, onMediaLoaded,
    onMediaLoadingError, onPlayerLoaded, onPlayerLoadingError} = options;

  const {state: playerManagerState} = useContext(KalturaPlayerContext);

  const unmounted = useRef(false);

  const [loadMediaState, setLoadMediaState] = useState<LoadMediaState>(
    {
      playerId: shortid.generate(),
      playerStatus: PlayerLoadingStatuses.Initial,
      mediaStatus: PlayerLoadingStatuses.Initial
    });

  const playerRef = useRef<Player | null>(null);

  //mount and unmount component (destroy current player instance)
  useEffect(() => {
    if(playerRef.current) {
      console.log('Kaltura player: Destroy');
      playerRef.current.destroy();
      playerRef.current = null;
      setLoadMediaState(prevState => (
        {
          ...prevState,
          playerStatus: PlayerLoadingStatuses.Destroyed,
          mediaStatus: PlayerLoadingStatuses.Destroyed
        })
      );
    }
    unmounted.current = true;
  }, []);

  //listen to player loading status in order to load media
  useEffect(() => {

    if(!playerRef.current ||
      loadMediaState.playerStatus !== PlayerLoadingStatuses.Loaded) {
      console.warn(`Kaltura player hasn't been setup yet.`);
      return;
    }
    setLoadMediaState(prevState => (
      {
        ...prevState,
        mediaStatus: PlayerLoadingStatuses.Loading
      })
    );

    if(!playerRef.current) return;

    playerRef.current.loadMedia( {entryId })
      .then(() => {
        if(unmounted.current) return;
        console.log('Kaltura Player: Successfully loaded media');
        if(onMediaLoaded) onMediaLoaded(entryId);
        setLoadMediaState(prevState => (
          {
            ...prevState,
            mediaStatus: PlayerLoadingStatuses.Loaded
          })
        );
      })
      .catch((err: any) => {
        if(unmounted.current) return;
        console.warn(`Kaltura Player: 'loadMedia' error:`,err);
        if(onMediaLoadingError) onMediaLoadingError(entryId);
        setLoadMediaState(prevState => (
          {
            ...prevState,
            mediaStatus: PlayerLoadingStatuses.Error
          })
        );
      });

  }, [loadMediaState.playerStatus]);

  //listen to player manager loading status in order to load player
  useEffect(() => {

    const loadPlayer = () => {

      if(playerRef.current) {
        console.log('Kaltura player was already loaded');
        return;
      }
      setLoadMediaState(
        prevState => (
          {...prevState,
            playerStatus: PlayerLoadingStatuses.Loading
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
              ks: playerManagerState.config.ks
            },
            playback: {
              autoplay,
            }
          });
        console.log('kaltura player was successfully loaded');
        if(onPlayerLoaded) onPlayerLoaded(entryId);
        playerRef.current = player;
        setLoadMediaState(
          prevState => (
            {...prevState,
              playerStatus: PlayerLoadingStatuses.Loaded
            })
        );
      } catch (e) {
        console.warn(`kaltura Player: setup failure:`, e);
        if(onPlayerLoadingError) onPlayerLoadingError(entryId);
        setLoadMediaState(prevState => (
          {
            ...prevState,
            playerStatus: PlayerLoadingStatuses.Error
          })
        );
      }
    };

    if(loadMediaState.mediaStatus === PlayerLoadingStatuses.Destroyed
      || loadMediaState.playerStatus === PlayerLoadingStatuses.Destroyed) {
      console.warn('Kaltura player was destroyed.');
      return;
    }
    switch (playerManagerState.status) {
      case PlayerLoadingStatuses.Loaded:
        loadPlayer();
        break;
      case PlayerLoadingStatuses.Error:
        console.warn('Kaltura Player manager loading error');
        if(onPlayerLoadingError) onPlayerLoadingError(entryId);
        setLoadMediaState(prevState => (
          {
            ...prevState,
            playerStatus: PlayerLoadingStatuses.Error
          })
        );
        break;
    }
  }, [playerManagerState.status]);

  return loadMediaState;
};
