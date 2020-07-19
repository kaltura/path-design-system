import * as React from 'react';
import {useMemo, useRef} from "react";
import {
  KalturaPlayerContext,
  PlayerAction,
  PlayerActionTypes, PlayerEvents,
  PlayerLoadingStatuses, PlayerProvidedConfig,
  SeekOptions,
} from './kaltura-player-context';
import {useLoadPlayerBundler} from "./use-load-player-bundler";
import { Observable, Subject, throwError } from 'rxjs';

export interface PlayerReducerActions {
  type: PlayerLoadingStatuses;
}


export interface KalturaPlayerProviderProps {
  autoLoad: boolean;
  config: PlayerProvidedConfig;
  children?: React.ReactChild;
}

export const KalturaPlayerProvider = (props: KalturaPlayerProviderProps) => {

  const {autoLoad, config, children} = props;
  const [state, loadPlayer] = useLoadPlayerBundler({config, autoLoad});

  const _playersRef = useRef<Record<string, {
    currentTime$: Observable<number>,
    playerState$: Observable<PlayerStateTypes>,
    playerEvents$: Observable<PlayerEvents>,
    getPlayerInstance: () => any,
    doAction: Subject<PlayerAction>}>>({});

  const playerContextValue = useMemo(() => {

    const registerPlayer = (
      playerId: string,
      currentTime$: Observable<number>,
      playerState$: Observable<PlayerStateTypes>,
      playerEvents$: Observable<PlayerEvents>) => {
      _playersRef.current[playerId] = {
        currentTime$,
        playerState$ ,
        playerEvents$,
        getPlayerInstance: () => {
          // @ts-ignore
          return (window.KalturaPlayer && window.KalturaPlayer.getPlayers && window.KalturaPlayer.getPlayers()[playerId]) || null;
        },
        doAction: new Subject<PlayerAction>()
      };
      return {
        action$: _playersRef.current[playerId].doAction.asObservable(),
        onRemove: () => {
          if(!_playersRef.current[playerId]) return;
          _playersRef.current[playerId].doAction.complete();
          delete _playersRef.current[playerId];
        }
      }
    };

    const seek = (playerId: string, options: SeekOptions) => {
      if(!_playersRef.current[playerId]) return;

      _playersRef.current[playerId].doAction.next({actionType: PlayerActionTypes.Seek, options});
    };

    const play = (playerId: string) => {
      if(!_playersRef.current[playerId]) return;

      _playersRef.current[playerId].doAction.next({actionType: PlayerActionTypes.Play});
    };

    const getPlayerInstance = (playerId: string) => {
      if(!_playersRef.current[playerId]) return;

      return _playersRef.current[playerId].getPlayerInstance();
    };


    const pause = (playerId: string) => {
      if(!_playersRef.current[playerId]) return;

      _playersRef.current[playerId].doAction.next({actionType: PlayerActionTypes.Pause});
    };

    const getPlayerCurrentTime$ = (playerId: string) => {
      return _playersRef.current[playerId]
        ? _playersRef.current[playerId].currentTime$
        : throwError(new Error('No player with provided playerId'))
    };

    const getPlayerState$ = (playerId: string) => {
      return _playersRef.current[playerId]
        ? _playersRef.current[playerId].playerState$
        : throwError(new Error('No player with provided playerId'))
    };

    const getPlayerEvents$ = (playerId: string) => {
      return _playersRef.current[playerId]
        ? _playersRef.current[playerId].playerEvents$
        : throwError(new Error('No player with provided playerId'))
    };

    return {
      state,
      loadPlayer,
      registerPlayer,
      getPlayerCurrentTime$,
      getPlayerState$,
      getPlayerEvents$,
      seek,
      play,
      pause,
      getPlayerInstance
    }
  }, [state, loadPlayer]);

  return (
    <KalturaPlayerContext.Provider value={playerContextValue}>
      {children}
    </KalturaPlayerContext.Provider>
  )
};

KalturaPlayerProvider.defaultProps = {
  autoLoad: true
};
