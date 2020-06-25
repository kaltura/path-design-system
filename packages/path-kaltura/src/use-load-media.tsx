import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  KalturaPlayerContext,
  PlayerAction,
  PlayerActionTypes,
  PlayerEvents, PlayerEventsTypes,
  PlayerLoadingStatuses
} from "./kaltura-player-context";
import * as shortid from "shortid";
import {BehaviorSubject, Subscription, Subject} from 'rxjs';
import Player = KalturaPlayerTypes.Player;
import KalturaPlayerManager = KalturaPlayerTypes.KalturaPlayerManager;

export interface UseLoadMediaOptions {
  autoplay: boolean;
  entryId: string;
  onPlayerLoaded?: (data: {entryId: string, playerId: string}) => void;
  onMediaLoaded?: (entryId: string) => void;
  onPlayerLoadingError?: (entryId: string) => void;
  onMediaLoadingError?: (entryId: string) => void;
  enableKavaAnalytics?: boolean;
  customizeConfig?: (config: Record<string, any>) => Record<string, any>
};

export interface LoadMediaState {
  playerId: string;
  playerStatus: PlayerLoadingStatuses;
  mediaStatus: PlayerLoadingStatuses;
}

// @ts-ignore
const getPlayerVideoResizeEvent = () => window['KalturaPlayer'].ui.EventType.VIDEO_RESIZE;

export const useLoadMedia = (options: UseLoadMediaOptions): LoadMediaState => {

  const {entryId, autoplay, onMediaLoaded, enableKavaAnalytics,
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
  const playerStateSubject = useRef(new BehaviorSubject<PlayerStateTypes>('idle'));
  const playerEventsSubject = useRef(new Subject<PlayerEvents>());
  const playerTime$ = useRef(playerTimeSubject.current.asObservable());
  const playerState$ = useRef(playerStateSubject.current.asObservable());
  const playerEvents$ = useRef(playerEventsSubject.current.asObservable());
  const playerRegistrationRef = useRef({seekSubscription: Subscription.EMPTY, onRemove: () => {}});

  const updatePlayerCurrentTime = () => {
    if(playerRef.current){
      playerTimeSubject.current.next(Math.floor(playerRef.current.currentTime * 1000));
    }
  };

  const updatePlayerState = (e: PlayerStateChangeEvent) => {
    if(playerRef.current){
      playerStateSubject.current.next(e.payload.newState.type);
    }
  };

  const emitFirstPlaying = useCallback(() => {
    if(!playerRef.current){
     return;
    }

    playerEventsSubject.current.next({
      type: PlayerEventsTypes.FirstPlaying
    });
  }, []);

  const emitVideoResized = useCallback((e) => {
    if(!playerRef.current){
      return;
    }

    const {x, y, width, height } = e.payload.videoSize;

    playerEventsSubject.current.next({
      type: PlayerEventsTypes.VideoResized,
      x,
      y,
      width,
      height
    });
  }, []);

  const loadPlayerMedia = () => {
    if(playerRef.current === null) {
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

  };

  //unmount component (destroy current player instance)
  useEffect(() => {
    return () => {
      unmounted.current = true;
      if(!playerRef.current) return;
      playerRef.current.removeEventListener('timeupdate', updatePlayerCurrentTime);
      playerRef.current.removeEventListener('playerstatechanged', updatePlayerState);
      playerRef.current.removeEventListener('firstplaying', emitFirstPlaying);
      playerRef.current.removeEventListener(getPlayerVideoResizeEvent(), emitVideoResized);
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

  //listen to media change
  useEffect(() => {
    if(loadMediaState.playerStatus !== PlayerLoadingStatuses.Loaded) {
      return;
    }
    if(!playerRef.current) {
      console.warn(`Can't change media. There is no player`);
      return;
    }

    loadPlayerMedia();

  }, [entryId]);

  //listen to player loading status in order to load media
  useEffect(() => {

    if(!playerRef.current ||
      loadMediaState.playerStatus !== PlayerLoadingStatuses.Loaded) {
      console.warn(`Kaltura player hasn't been setup yet.`);
      return;
    }

    loadPlayerMedia();

  }, [loadMediaState.playerStatus]);

  //listen to player manager loading status in order to load player
  useEffect(() => {

    const onSeek = (time: number, pause: boolean) => {
      if(!playerRef.current
        || typeof playerRef.current.currentTime !== 'number') return;
      if (pause) playerRef.current.pause();
      playerRef.current.currentTime = time / 1000;
    };

    const loadPlayer = () => {

      if(playerRef.current) {
        console.log('Kaltura player was already loaded');
        return;
      }
      const playerManager = window['KalturaPlayer'] as KalturaPlayerManager;
      try {
        let config: Record<string, any> = {
          playback: {
            autoplay,
          },
        };

        if (options.customizeConfig) {
          config = options.customizeConfig(config) || config;
        }

        config = {
          ...config,
          targetId: loadMediaState.playerId,
          provider: {
            ...config.provider,
            uiConfId: playerProviderState.config.uiConfId,
            partnerId: playerProviderState.config.partnerId,
            ks: playerProviderState.config.ks
          },
          plugins: {
            ...config.plugins,
            kava: {
              disable: !enableKavaAnalytics
            }
          }
        }

        const player: KalturaPlayerTypes.Player = playerManager.setup(config);

        console.log('kaltura player was successfully loaded');
        playerRef.current = player;
        const {action$, onRemove} = registerPlayer(loadMediaState.playerId, playerTime$.current, playerState$.current, playerEvents$.current);
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
        playerRef.current.addEventListener('firstplaying', emitFirstPlaying);
        playerRef.current.addEventListener(getPlayerVideoResizeEvent(), emitVideoResized);

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
