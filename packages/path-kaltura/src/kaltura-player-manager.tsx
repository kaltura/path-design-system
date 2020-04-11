import * as React from 'react';
import {useMemo, useRef} from "react";
import {KalturaPlayerContext, PlayerLoadingStatuses} from "./kaltura-player-context";
import {useLoadPlayerBundler} from "./use-load-player-bundler";
import { Observable } from 'rxjs';

export interface PlayerReducerActions {
  type: PlayerLoadingStatuses;
}

export interface PlayerManagerState {
  status: PlayerLoadingStatuses;
  config: PlayerManagerConfig;
}

export interface PlayerManagerConfig {
  ks?:string;
  bundlerUrl?: string;
  partnerId?: string;
  uiConfId?: string;
}

export interface KalturaPlayerManagerProps {
  autoLoad: boolean;
  config: PlayerManagerConfig;
  children?: React.ReactChild;
}

export const KalturaPlayerManager = (props: KalturaPlayerManagerProps) => {

  const {autoLoad, config, children} = props;
  const [state, loadPlayer] = useLoadPlayerBundler({config, autoLoad});

  const playersCurrentTime = useRef<Record<string, Observable<number>>>({});

  const playerContextValue = useMemo(() => {

    const addPlayerCurrentTimeObservable = (playerId: string, currentTimeObservable: Observable<number>) : void => {
      playersCurrentTime.current[playerId] = currentTimeObservable;
    };

    const getPlayerCurrentTimeObservable = (playerId: string) : Observable<number> => {
      return playersCurrentTime.current[playerId];
    };

    const removePlayerCurrentTimeObservable = (playerId: string): void => {
      delete playersCurrentTime.current[playerId];
    };

    return {
      state,
      loadPlayer,
      addPlayerCurrentTimeObservable,
      getPlayerCurrentTimeObservable,
      removePlayerCurrentTimeObservable
    }
  }, [state.status, loadPlayer, playersCurrentTime]);

  return (
    <KalturaPlayerContext.Provider value={playerContextValue}>
      {children}
    </KalturaPlayerContext.Provider>
  )
};

KalturaPlayerManager.defaultProps = {
  autoLoad: true
};
