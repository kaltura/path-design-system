import * as React from 'react';
import {useEffect, useMemo, useReducer} from "react";
import {
  PlayerLoadingStatus,
  KalturaPlayerManagerProps,
  PlayerFactoryCtxValue,
  initalCtxState,
} from "./definitions";
import {loadPlaykitScript, reducer} from "./utils";


export const KalturaPlayerCtx = React.createContext<PlayerFactoryCtxValue>(initalCtxState);

export const KalturaPlayerManager = (props: KalturaPlayerManagerProps) => {

  const {autoLoad, config, children} = props;
  const [state, dispatch] =
    useReducer(reducer, { status: PlayerLoadingStatus.Initial, config});

  useEffect(() => {

    if(!config || !config.partnerId || ! config.uiConfId || !config.playkitUrl) {
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
      loadPlaykitScript(config.playkitUrl, dispatch);
    };

    if(state.status === PlayerLoadingStatus.Loading) {
      loadPlayer();
    }

  }, [state.status]);


  const playerCtxValue = useMemo(() => {

    return {
      state,
      dispatch
    }
  }, [state.status]);

  return (
    <KalturaPlayerCtx.Provider value={playerCtxValue}>
      {children}
    </KalturaPlayerCtx.Provider>
  )
};

KalturaPlayerManager.defaultProps = {
  autoLoad: true
};
