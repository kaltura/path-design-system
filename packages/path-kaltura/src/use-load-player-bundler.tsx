import {PlayerLoadingStatus, PlayerManagerConfig, PlayerManagerState, PlayerReducerActions} from "./player-definitions";
import {useEffect, useReducer} from "react";

export interface UseLoadPlayerBundlerOptions {
  autoLoad: boolean;
  config: PlayerManagerConfig;
}

const loadPlayerReducer = (state: PlayerManagerState, action: PlayerReducerActions) => {
  console.log(`a request for: ${action.type} was made`);
  if(action.type === PlayerLoadingStatus.Loading) {
    if (state.status === PlayerLoadingStatus.Initial) {
      console.log('**** changed to loading state');
      return { ...state, status: PlayerLoadingStatus.Loading}
    } else{
      console.warn(`Changing player loading state to 'loading' is
       permitted only from an 'initial' state. Ignoring state changes request`);
      return state;
    }
  }
  return {...state, status: action.type}
};

// const getExistingScript = (scriptUrl: string): HTMLScriptElement | null => {
//   return document.querySelectorAll(`script[src="${scriptUrl}"]`)[0] as HTMLScriptElement;
// };

const isBundlerLoaded = (bundlerUrl: string): boolean => {
  return !!window['loadedBundlers'][bundlerUrl];
};

export const loadPlayerIntoSession = (playerBundlerUrl: string | undefined, dispatch: any) => {

  if(!playerBundlerUrl) {
    console.warn('Failed to load player into session,' +
      ' did you forget to provide a player bundler url?');
    dispatch({type: PlayerLoadingStatus.Error});
    return;
  }

  if(isBundlerLoaded(playerBundlerUrl)) {
    console.log('**** player bundler was already loaded into session');
    dispatch({type: PlayerLoadingStatus.Loaded});
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
      dispatch({type: PlayerLoadingStatus.Loaded});
    };
    scriptElement.onerror = () => {
      dispatch({type: PlayerLoadingStatus.Error});
    };
    head.appendChild(scriptElement);
  } catch (e) {
    console.warn(`Failed to add player bundler script to page. ${e}`);
    dispatch({type: PlayerLoadingStatus.Error});
  }
};

export const useLoadPlayerBundler = (options: UseLoadPlayerBundlerOptions): [PlayerManagerState, any] => {

  const {autoLoad, config} = options;
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


  return [state, dispatch];
};