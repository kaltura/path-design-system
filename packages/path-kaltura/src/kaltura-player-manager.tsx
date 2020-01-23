import * as React from 'react';
import {useEffect, useMemo, useReducer} from "react";
import {
  KalturaPlayerCtxValue,
  PlayerLoadingStatuses, KalturaPlayerManagerProps,
} from "./definitions";
import {loadPlaykitScript, reducer} from "./utils";


const initalCtxState: KalturaPlayerCtxValue =
  {
    state: {
      status: PlayerLoadingStatuses.Initial,
      config: {}
    },
    dispatch: null
  };

export const KalturaPlayerCtx = React.createContext<KalturaPlayerCtxValue>(initalCtxState);

export const KalturaPlayerManager = (props: KalturaPlayerManagerProps) => {

  const {autoLoad, config, children} = props;
  const [state, dispatch] =
    useReducer(reducer, { status: PlayerLoadingStatuses.Initial, config});

  useEffect(() => {

    if(!config || !config.partnerId || ! config.uiConfId || !config.playkitUrl) {
      dispatch({type: PlayerLoadingStatuses.Error});
      return;
    }

    // if there is no need to load player scripts
    if (state.status === PlayerLoadingStatuses.Error
      || state.status === PlayerLoadingStatuses.Loaded) {
      return;
    }

    // hot loading player scripts
    if (state.status === PlayerLoadingStatuses.Initial && autoLoad) {
      dispatch({type: PlayerLoadingStatuses.Loading});
      return;
    }

    const loadPlayer =  (): void => {
      if (state.status !== PlayerLoadingStatuses.Loading) {
        return;
      }
      loadPlaykitScript(config.playkitUrl, dispatch);
    };

    if(state.status === PlayerLoadingStatuses.Loading) {
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
