import {useContext, useEffect, useRef, useState} from "react";
import {KalturaPlayerContext, PlayerAction, PlayerActionTypes, PlayerLoadingStatuses} from "./kaltura-player-context";
import * as shortid from "shortid";
import {BehaviorSubject, Subscription} from 'rxjs';
import Player = KalturaPlayerTypes.Player;
import KalturaPlayerManager = KalturaPlayerTypes.KalturaPlayerManager;

export interface UseLoadMediaOptions {
  autoplay: boolean;
  entryId: string;
  onPlayerLoaded?: (data: {entryId: string, playerId: string}) => void;
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

  const {state: playerProviderState, registerPlayer} = useContext(KalturaPlayerContext);

  const unmounted = useRef(false);

  const [loadMediaState, setLoadMediaState] = useState<LoadMediaState>(
    () => ({
      playerId: shortid.generate(),
      playerStatus: PlayerLoadingStatuses.Initial,
      mediaStatus: PlayerLoadingStatuses.Initial
    }));

  const playerRef = useRef<Player | null>(null);

  const playerTimeSubject = useRef(new BehaviorSubject<number>(0));
  const playerStateSubject = useRef(new BehaviorSubject<string>('idle'));
  const playerTime$ = useRef(playerTimeSubject.current.asObservable());
  const playerState$ = useRef(playerStateSubject.current.asObservable());
  const playerRegistrationRef = useRef({seekSubscription: Subscription.EMPTY, onRemove: () => {}});

  const updatePlayerCurrentTime = () => {
    if(playerRef.current){
      playerTimeSubject.current.next(playerRef.current.currentTime);
    }
  };

  const updatePlayerState = (e: PlayerStateChangeEvent) => {
    if(playerRef.current){
      playerStateSubject.current.next(e.payload.newState.type);
    }
  };

  //unmount component (destroy current player instance)
  useEffect(() => {
    return () => {
      unmounted.current = true;
      if(!playerRef.current) return;
      playerRef.current.removeEventListener('timeupdate', updatePlayerCurrentTime);
      playerRef.current.removeEventListener('playerstatechanged', updatePlayerState);
      console.log('Kaltura player: Destroy');
      playerRegistrationRef.current.seekSubscription.unsubscribe();
      playerRegistrationRef.current.onRemove();
      playerTimeSubject.current.complete();
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
  }, []);

  //listen to player loading status in order to load media
  useEffect(() => {

    if(loadMediaState.playerStatus === PlayerLoadingStatuses.Initial
      || loadMediaState.playerStatus === PlayerLoadingStatuses.Error)
      return;

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

    const onSeek = (time: number, pause: boolean) => {
      if(!playerRef.current
        || typeof playerRef.current.currentTime !== 'number') return;
      if (pause) playerRef.current.pause();
      playerRef.current.currentTime = time;
    };

    const loadPlayer = () => {

      if(playerRef.current) {
        console.log('Kaltura player was already loaded');
        return;
      }
      const playerManager = window['KalturaPlayer'] as KalturaPlayerManager;
      try {
        const player: KalturaPlayerTypes.Player = playerManager.setup(
          {
            targetId: loadMediaState.playerId,
            provider: {
              uiConfId: playerProviderState.config.uiConfId,
              partnerId: playerProviderState.config.partnerId,
              ks: playerProviderState.config.ks
            },
            playback: {
              autoplay,
            }
          });

        console.log('kaltura player was successfully loaded');
        playerRef.current = player;
        const {action$, onRemove} = registerPlayer(loadMediaState.playerId, playerTime$.current, playerState$.current);
        const playerActionsSubscription = action$
          .subscribe(({actionType, options} : PlayerAction) => {
            switch (actionType) {
              case PlayerActionTypes.Seek:
                if(!options) return;
                onSeek(options.seekTo, options.pause);
                break;
              case PlayerActionTypes.Pause:
                if(!playerRef.current) return;
                playerRef.current.pause();
                break;
              case PlayerActionTypes.Play:
                if(!playerRef.current) return;
                playerRef.current.play();
                break;
            }
          });
        playerRegistrationRef.current = {seekSubscription: playerActionsSubscription, onRemove};
        playerRef.current.addEventListener('timeupdate', updatePlayerCurrentTime);
        playerRef.current.addEventListener('playerstatechanged', updatePlayerState);

        if(onPlayerLoaded) onPlayerLoaded({entryId, playerId: loadMediaState.playerId});

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
    switch (playerProviderState.status) {
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
  }, [playerProviderState.status]);

  return loadMediaState;
};
