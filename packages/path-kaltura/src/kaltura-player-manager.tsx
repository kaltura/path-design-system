import * as React from 'react';
import {useMemo} from "react";
import {KalturaPlayerContext} from "./kaltura-player-provider";
import {useLoadPlayerBundler} from "./use-load-player-bundler";

// map of loaded bundler urls
if(!window['loadedBundlers']) {
  window['loadedBundlers'] = {};
}

export const enum PlayerLoadingStatus {
  Loaded = 'Loaded',
  Loading = 'Loading',
  Error = 'Error',
  Initial = 'Initial',
  Destroyed = 'Destroyed'
}

export interface PlayerReducerActions {
  type: PlayerLoadingStatus;
}

export interface PlayerManagerState {
  status: PlayerLoadingStatus;
  config: PlayerManagerConfig;
}

export interface PlayerManagerConfig {
  playerBundleUrl?: string;
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
  const [state, dispatch] = useLoadPlayerBundler({config, autoLoad});

  const playerContextValue = useMemo(() => {

    return {
      state,
      dispatch
    }
  }, [state.status, dispatch]);

  return (
    <KalturaPlayerContext.Provider value={playerContextValue}>
      {children}
    </KalturaPlayerContext.Provider>
  )
};

KalturaPlayerManager.defaultProps = {
  autoLoad: true
};
