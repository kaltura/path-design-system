import {useEffect, useReducer} from "react";
import {
  PlayerManagerConfig,
  PlayerManagerState,
  PlayerReducerActions
} from "./kaltura-player-manager";
import {PlayerLoadingStatuses} from "./kaltura-player-context";

export interface UseLoadPlayerBundlerOptions {
  autoLoad: boolean;
  config: PlayerManagerConfig;
}

const loadPlayerReducer = (state: PlayerManagerState, action: PlayerReducerActions) => {
  console.log(`a request for: ${action.type} was made`);
  if(action.type === PlayerLoadingStatuses.Loading) {
    if (state.status === PlayerLoadingStatuses.Initial) {
      console.log('**** changed to loading state');
      return { ...state, status: PlayerLoadingStatuses.Loading}
    } else{
      console.warn(`Changing player loading state to 'loading' is
       permitted only from an 'initial' state. Ignoring state changes request`);
      return state;
    }
  }
  return {...state, status: action.type}
};

export const loadPlayerIntoSession = (playerBundlerUrl: string | undefined, dispatch: any) => {

  if(!playerBundlerUrl) {
    console.warn('Failed to load player into session,' +
      ' did you forget to provide a player bundler url?');
    dispatch({type: PlayerLoadingStatuses.Error});
    return;
  }

  if(!!window['loadedBundlers'][playerBundlerUrl]) {
    console.log('**** player bundler was already loaded into session');
    dispatch({type: PlayerLoadingStatuses.Loaded});
    return;
  }

  console.log(`******* loading player into session....`);

  try {
    const head = document.head || document.getElementsByTagName('head')[0];
    const scriptElement = document.createElement('script');
    scriptElement.type = "text/javascript";
    scriptElement.src = playerBundlerUrl;
    scriptElement.onload = () => {
      window['loadedBundlers'][playerBundlerUrl] = true;
      dispatch({type: PlayerLoadingStatuses.Loaded});
    };
    scriptElement.onerror = () => {
      dispatch({type: PlayerLoadingStatuses.Error});
    };
    head.appendChild(scriptElement);
  } catch (e) {
    console.warn(`Failed to add player bundler to page.`, e);
    dispatch({type: PlayerLoadingStatuses.Error});
  }
};

export const useLoadPlayerBundler = (options: UseLoadPlayerBundlerOptions): [PlayerManagerState, any] => {

  const {autoLoad, config} = options;
  const [state, dispatch] = useReducer(
    loadPlayerReducer, { status: PlayerLoadingStatuses.Initial, config});

  useEffect(() => {

    if(!config || !config.partnerId || ! config.uiConfId || !config.playerBundleUrl) {
      console.warn(`cannot load kaltura player bundler into session,
        missing parameters (did you remember to provide partnerId,
        uiConfId and playerBundleUrl?`);
      dispatch({type: PlayerLoadingStatuses.Error});
      return;
    }

    // if there is no need to load player bundler scripts
    if (state.status === PlayerLoadingStatuses.Error
      || state.status === PlayerLoadingStatuses.Loaded) {
      return;
    }

    // hot loading player bundler scripts
    if (state.status === PlayerLoadingStatuses.Initial && autoLoad) {
      dispatch({type: PlayerLoadingStatuses.Loading});
      return;
    }

    if(state.status === PlayerLoadingStatuses.Loading) {
      loadPlayerIntoSession(config.playerBundleUrl, dispatch);
    }

  }, [state.status, dispatch]);


  return [state, dispatch];
};
