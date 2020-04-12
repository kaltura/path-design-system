import * as React from 'react';
import {useMemo, useRef} from "react";
import {KalturaPlayerContext, PlayerLoadingStatuses} from "./kaltura-player-context";
import {useLoadPlayerBundler} from "./use-load-player-bundler";
import { Observable, Subject, throwError } from 'rxjs';

export interface PlayerReducerActions {
  type: PlayerLoadingStatuses;
}

export interface PlayerProviderState {
  status: PlayerLoadingStatuses;
  config: PlayerProvidedConfig;
}

export interface PlayerProvidedConfig {
  ks?:string;
  bundlerUrl?: string;
  partnerId?: string;
  uiConfId?: string;
}

export interface KalturaPlayerProviderProps {
  autoLoad: boolean;
  config: PlayerProvidedConfig;
  children?: React.ReactChild;
}

export const KalturaPlayerProvider = (props: KalturaPlayerProviderProps) => {

  const {autoLoad, config, children} = props;
  const [state, loadPlayer] = useLoadPlayerBundler({config, autoLoad});

  const _players = useRef<Record<string, {currentTime$: Observable<number>, doSeek: Subject<number>}>>({});

  const playerContextValue = useMemo(() => {

    const registerPlayer = (playerId: string, currentTime$: Observable<number>) => {
      _players.current[playerId] = {currentTime$, doSeek: new Subject<number>()};
      return {
        seek$: _players.current[playerId].doSeek.asObservable(),
        onRemove: () => {
          if(!_players.current[playerId]) return;
          _players.current[playerId].doSeek.complete();
          delete _players.current[playerId];
        }
      }
    };

    const seek = (playerId: string, time: number) => {
      if(!_players.current[playerId]) return;

      _players.current[playerId].doSeek.next(time);
    };

    const getPlayerCurrentTime$ = (playerId: string) => {
      return _players.current[playerId]
        ? _players.current[playerId].currentTime$
        : throwError(new Error('No player with provided playerId'))
    };

    return {
      state,
      loadPlayer,
      registerPlayer,
      getPlayerCurrentTime$,
      seek
    }
  }, [state.status, loadPlayer]);

  return (
    <KalturaPlayerContext.Provider value={playerContextValue}>
      {children}
    </KalturaPlayerContext.Provider>
  )
};

KalturaPlayerProvider.defaultProps = {
  autoLoad: true
};
