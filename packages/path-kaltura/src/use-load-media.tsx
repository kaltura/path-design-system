import { useContext, useEffect, useRef, useState } from "react";
import {
  KalturaPlayerContext,
  PlayerAction,
  PlayerActionTypes,
  PlayerEvents,
  PlayerEventsTypes,
  PlayerBundleLoadingStatuses,
  PlayerStates
} from "./kaltura-player-context";

import { BehaviorSubject, Subscription, Subject } from "rxjs";
import {useCallbackRef} from './use-callback-ref';

type PlayerStateChangeEvent = {
  payload: {
    newState: {
      type: PlayerStates;
    };
    oldState: {
      type: PlayerStates;
    };
  };
};
export interface UseLoadMediaOptions {
  autoplay: boolean;
  entryId: string;
  onPlayerLoaded?: (data: { entryId: string; playerId: string }) => void;
  onMediaLoaded?: (entryId: string) => void;
  onPlayerLoadingError?: (entryId: string) => void;
  onMediaLoadingError?: (entryId: string) => void;
  enableKavaAnalytics?: boolean;
  customizeConfig?: (config: Record<string, any>) => Record<string, any>;
}

export interface LoadMediaState {
  playerId: string;
  playerStatus: PlayerBundleLoadingStatuses;
  mediaStatus: PlayerBundleLoadingStatuses;
}

/*
Developer notice
In this sample we used a simple way to create unique id. You can keep it
or replace it with an existing library like shortId
*/
let uniqueIdIndex = 0;
function getUniquePlayerId() {
  uniqueIdIndex++;
  return `kaltura-player${uniqueIdIndex}`;
}

export const useLoadMedia = (options: UseLoadMediaOptions): LoadMediaState => {
  const {
    entryId,
    autoplay,
    onMediaLoaded,
    enableKavaAnalytics,
    onMediaLoadingError,
    onPlayerLoaded,
    onPlayerLoadingError
  } = options;

  const { bundleLoadingStatus, bundleConfig, registerPlayer } = useContext(
    KalturaPlayerContext
  );

  const unmountedRef = useRef(false);

  const [loadMediaState, setLoadMediaState] = useState<LoadMediaState>(() => ({
    playerId: getUniquePlayerId(),
    playerStatus: PlayerBundleLoadingStatuses.Initial,
    mediaStatus: PlayerBundleLoadingStatuses.Initial
  }));

  const playerRef = useCallbackRef<any>(null, () => {
    console.log('sakal update', {current: playerRef.current});
    if (!playerRef.current) {
      return;
    }

    const updatePlayerCurrentTime = () => {
      playerTimeSubjectRef.current.next(
        Math.floor(playerRef.current.currentTime * 1000)
      );
    };

    const updatePlayerState = (e: PlayerStateChangeEvent) => {
      playerStateSubjectRef.current.next(e.payload.newState.type);
    };

    const emitVideoResized = (e: any) => {
      const { x, y, width, height } = e.payload.videoSize;

      playerEventsSubjectRef.current.next({
        type: PlayerEventsTypes.VideoResized,
        x,
        y,
        width,
        height
      });
    };

    const emitFirstPlaying = () => {
      playerEventsSubjectRef.current.next({
        type: PlayerEventsTypes.FirstPlaying
      });
    };

    const emitPlayerResized = (e: any) => {
      const { width, height } = e.payload.playerSize;

      playerEventsSubjectRef.current.next({
        type: PlayerEventsTypes.PlayerResized,
        width,
        height
      });
    };

    const getPlayerVideoResizeEvent = () =>
      // @ts-ignore
      window["KalturaPlayer"].ui.EventType.VIDEO_RESIZE;

    const getPlayerResizeEvent = () =>
      // @ts-ignore
      window["KalturaPlayer"].ui.EventType.PLAYER_RESIZE;

    playerRef.current.addEventListener("timeupdate", updatePlayerCurrentTime);
    playerRef.current.addEventListener("playerstatechanged", updatePlayerState);
    playerRef.current.addEventListener("firstplaying", emitFirstPlaying);
    playerRef.current.addEventListener(
      getPlayerVideoResizeEvent(),
      emitVideoResized
    );
    playerRef.current.addEventListener(
      getPlayerResizeEvent(),
      emitPlayerResized
    );

    return () => {
      console.log('sakal destory', {current: playerRef.current});
      if (!playerRef.current) return;
      playerRef.current.removeEventListener(
        "timeupdate",
        updatePlayerCurrentTime
      );
      playerRef.current.removeEventListener(
        "playerstatechanged",
        updatePlayerState
      );
      playerRef.current.removeEventListener("firstplaying", emitFirstPlaying);
      playerRef.current.removeEventListener(
        getPlayerVideoResizeEvent(),
        emitVideoResized
      );
      playerRef.current.removeEventListener(
        getPlayerResizeEvent(),
        emitPlayerResized
      );
      console.log("Kaltura player: Destroy");
      playerRegistrationRef.current.seekSubscription.unsubscribe();
      playerRegistrationRef.current.onRemove();
      playerTimeSubjectRef.current.complete();
      playerRef.current.destroy();
      setLoadMediaState(prevState => ({
        ...prevState,
        playerStatus: PlayerBundleLoadingStatuses.Destroyed,
        mediaStatus: PlayerBundleLoadingStatuses.Destroyed
      }));
    };
  });


  const playerTimeSubjectRef = useRef(new BehaviorSubject<number>(0));
  const playerStateSubjectRef = useRef(
    new BehaviorSubject<PlayerStates>(PlayerStates.idle)
  );
  const playerEventsSubjectRef = useRef(new Subject<PlayerEvents>());
  const playerRegistrationRef = useRef({
    seekSubscription: Subscription.EMPTY,
    onRemove: () => {}
  });

  const loadPlayerMedia = () => {
    if (playerRef.current === null) {
      return;
    }

    setLoadMediaState(prevState => ({
      ...prevState,
      mediaStatus: PlayerBundleLoadingStatuses.Loading
    }));

    playerRef.current
      .loadMedia({ entryId })
      .then(() => {
        if (unmountedRef.current) return;
        console.log("Kaltura Player: Successfully loaded media");
        if (onMediaLoaded) onMediaLoaded(entryId);
        setLoadMediaState(prevState => ({
          ...prevState,
          mediaStatus: PlayerBundleLoadingStatuses.Loaded
        }));
      })
      .catch((err: any) => {
        if (unmountedRef.current) return;
        console.warn(`Kaltura Player: 'loadMedia' error:`, err);
        if (onMediaLoadingError) onMediaLoadingError(entryId);
        setLoadMediaState(prevState => ({
          ...prevState,
          mediaStatus: PlayerBundleLoadingStatuses.Error
        }));
      });
  };

  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    }
  }, []);

  //listen to media change
  useEffect(() => {
    if (loadMediaState.playerStatus !== PlayerBundleLoadingStatuses.Loaded) {
      return;
    }
    if (!playerRef.current) {
      console.warn(`Can't change media. There is no player`);
      return;
    }

    loadPlayerMedia();
  }, [entryId]);

  //listen to player loading status in order to load media
  useEffect(() => {
    if (
      !playerRef.current ||
      loadMediaState.playerStatus !== PlayerBundleLoadingStatuses.Loaded
    ) {
      console.warn(`Kaltura player hasn't been setup yet.`);
      return;
    }

    loadPlayerMedia();
  }, [loadMediaState.playerStatus]);

  //listen to player manager loading status in order to load player
  useEffect(() => {
    const onSeek = (time: number, pause: boolean) => {
      if (
        !playerRef.current ||
        typeof playerRef.current.currentTime !== "number"
      )
        return;
      if (pause) playerRef.current.pause();
      playerRef.current.currentTime = time / 1000;
    };

    const loadPlayer = () => {
      if (playerRef.current) {
        console.log("Kaltura player was already loaded");
        return;
      }

      // @ts-ignore
      const playerManager = window["KalturaPlayer"];
      try {
        let config: Record<string, any> = {
          playback: {
            autoplay
          }
        };

        if (options.customizeConfig) {
          config = options.customizeConfig(config) || config;
        }

        config = {
          ...config,
          targetId: loadMediaState.playerId,
          provider: {
            ...config.provider,
            uiConfId: bundleConfig.uiConfId,
            partnerId: bundleConfig.partnerId,
            ks: bundleConfig.ks
          },
          plugins: {
            ...config.plugins,
            kava: {
              disable: !enableKavaAnalytics
            }
          }
        };

        const player = playerManager.setup(config);

        console.log("kaltura player was successfully loaded");
        playerRef.current = player;
        const { action$, onRemove } = registerPlayer(
          loadMediaState.playerId,
          playerTimeSubjectRef.current.asObservable(),
          playerStateSubjectRef.current.asObservable(),
          playerEventsSubjectRef.current.asObservable()
        );
        const playerActionsSubscription = action$.subscribe(
          ({ actionType, options }: PlayerAction) => {
            switch (actionType) {
              case PlayerActionTypes.Seek:
                if (!options) return;
                onSeek(options.seekTo, options.pause);
                break;
              case PlayerActionTypes.Pause:
                if (!playerRef.current) return;
                playerRef.current.pause();
                break;
              case PlayerActionTypes.Play:
                if (!playerRef.current) return;
                playerRef.current.play();
                break;
            }
          }
        );
        playerRegistrationRef.current = {
          seekSubscription: playerActionsSubscription,
          onRemove
        };

        if (onPlayerLoaded)
          onPlayerLoaded({ entryId, playerId: loadMediaState.playerId });

        setLoadMediaState(prevState => ({
          ...prevState,
          playerStatus: PlayerBundleLoadingStatuses.Loaded
        }));
      } catch (e) {
        console.warn(`kaltura Player: setup failure:`, e);
        if (onPlayerLoadingError) onPlayerLoadingError(entryId);
        setLoadMediaState(prevState => ({
          ...prevState,
          playerStatus: PlayerBundleLoadingStatuses.Error
        }));
      }
    };

    if (
      loadMediaState.mediaStatus === PlayerBundleLoadingStatuses.Destroyed ||
      loadMediaState.playerStatus === PlayerBundleLoadingStatuses.Destroyed
    ) {
      console.warn("Kaltura player was destroyed.");
      return;
    }
    switch (bundleLoadingStatus) {
      case PlayerBundleLoadingStatuses.Loaded:
        loadPlayer();
        break;
      case PlayerBundleLoadingStatuses.Error:
        console.warn("Kaltura Player manager loading error");
        if (onPlayerLoadingError) onPlayerLoadingError(entryId);
        setLoadMediaState(prevState => ({
          ...prevState,
          playerStatus: PlayerBundleLoadingStatuses.Error
        }));
        break;
    }
  }, [bundleLoadingStatus]);

  return loadMediaState;
};
