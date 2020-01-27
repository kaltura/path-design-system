import * as React from 'react';
import {useEffect, useMemo, useReducer} from "react";
import {
  PlayerLoadingStatus,
  PlayerManagerConfig,
} from "./player-definitions";
import {loadPlayerIntoSession, loadPlayerReducer} from "./utils";
import {KalturaPlayerContext} from "./kaltura-player-provider";

export interface KalturaPlayerManagerProps {
  autoLoad: boolean;
  config: PlayerManagerConfig;
  children?: React.ReactChild;
}

export const KalturaPlayerManager = (props: KalturaPlayerManagerProps) => {

  const {autoLoad, config, children} = props;
  const [state, dispatch] = useReducer(
    loadPlayerReducer, { status: PlayerLoadingStatus.Initial, config});

  useEffect(() => {

    if(!config || !config.partnerId || ! config.uiConfId || !config.playerBundleUrl) {
      console.log(`cannot load kaltura player scripts into session,
        missing parameters (did you remember to provide partnerId,
        uiConfId and playerBundleUrl?`);
      dispatch({type: PlayerLoadingStatus.Error});
      return;
    }

    // if there is no need to load player scripts
    if (state.status === PlayerLoadingStatus.Error
      || state.status === PlayerLoadingStatus.Loaded) {
      return;
    }

    // hot loading player scripts
    if (state.status === PlayerLoadingStatus.Initial && autoLoad) {
      dispatch({type: PlayerLoadingStatus.Loading});
      return;
    }

    const loadPlayer =  (): void => {
      if (state.status !== PlayerLoadingStatus.Loading) {
        return;
      }
      loadPlayerIntoSession(config.playerBundleUrl, dispatch);
    };

    if(state.status === PlayerLoadingStatus.Loading) {
      loadPlayer();
    }

  }, [state.status, dispatch, config]);


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
