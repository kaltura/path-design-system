import * as React from 'react';
import {useEffect, useMemo, useReducer} from "react";
import {
  KalturaPlayerCtxValue,
  KalturaPlayerLoadingStatuses, KalturaPlayerManagerProps,
} from "./definitions";
import {loadPlaykitScript, reducer} from "./utils";


const initalCtxState: KalturaPlayerCtxValue =
  {
    state: {
      status: KalturaPlayerLoadingStatuses.Initial,
      config: {}
    },
    dispatch: null
  };

export const KalturaPlayerCtx = React.createContext<KalturaPlayerCtxValue>(initalCtxState);

export const KalturaPlayerManager = (props: KalturaPlayerManagerProps) => {

  const {autoLoad, config, children} = props;
  const [state, dispatch] =
    useReducer(reducer, { status: KalturaPlayerLoadingStatuses.Initial, config});

  useEffect(() => {

    if(!config || !config.partnerId || ! config.uiConfId || !config.playkitUrl) {
      dispatch({type: KalturaPlayerLoadingStatuses.Error});
      return;
    }

    // if there is no need to load player scripts
    if (state.status === KalturaPlayerLoadingStatuses.Error
      || state.status === KalturaPlayerLoadingStatuses.Loaded) {
      return;
    }

    // hot loading player scripts
    if (state.status === KalturaPlayerLoadingStatuses.Initial && autoLoad) {
      dispatch({type: KalturaPlayerLoadingStatuses.Loading});
      return;
    }

    const loadPlayer =  (): void => {
      if (state.status !== KalturaPlayerLoadingStatuses.Loading) {
        return;
      }
      loadPlaykitScript(config.playkitUrl, dispatch);
    };

    if(state.status === KalturaPlayerLoadingStatuses.Loading) {
      loadPlayer();
    }

  }, [state.status]);


  const playerValue = useMemo(() => {

    return {
      state,
      dispatch
    }
  }, [state.status]);

  return (
    <KalturaPlayerCtx.Provider value={playerValue}>
      {children}
    </KalturaPlayerCtx.Provider>
  )
};
