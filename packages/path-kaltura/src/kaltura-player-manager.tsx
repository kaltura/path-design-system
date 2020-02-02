import * as React from 'react';
import {useMemo} from "react";
import {KalturaPlayerContext, PlayerLoadingStatuses} from "./kaltura-player-context";
import {useLoadPlayerBundler} from "./use-load-player-bundler";

export interface PlayerReducerActions {
  type: PlayerLoadingStatuses;
}

export interface PlayerManagerState {
  status: PlayerLoadingStatuses;
  config: PlayerManagerConfig;
}

export interface PlayerManagerConfig {
  ks?:string;
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
  const [state, loadPlayer] = useLoadPlayerBundler({config, autoLoad});

  const playerContextValue = useMemo(() => {

    return {
      state,
      loadPlayer
    }
  }, [state.status, loadPlayer]);

  return (
    <KalturaPlayerContext.Provider value={playerContextValue}>
      {children}
    </KalturaPlayerContext.Provider>
  )
};

KalturaPlayerManager.defaultProps = {
  autoLoad: true
};
