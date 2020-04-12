import {useCallback, useEffect, useReducer, useRef} from "react";
import {PlayerManagerConfig, PlayerManagerState, PlayerReducerActions} from "./kaltura-player-provider";
import {PlayerLoadingStatuses} from "./kaltura-player-context";

let currentPlayerBundler: string | null = null;

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

export const loadPlayerIntoSession = (
  playerBundlerUrl: string | undefined,
  callback: (newState: PlayerLoadingStatuses) => void
) => {

  if(!playerBundlerUrl) {
    console.warn('Failed to load player into session,' +
      ' did you forget to provide a player bundler url?');
    callback(PlayerLoadingStatuses.Error);
    return;
  }

  if(!!window['KalturaPlayer'] && window['KalturaPlayer'].setup) {
    console.log('**** player bundler was already loaded into session');
    callback(PlayerLoadingStatuses.Loaded);
    return;
  }

  console.log(`******* loading player into session....`);

  try {
    const head = document.head || document.getElementsByTagName('head')[0];
    const scriptElement = document.createElement('script');
    scriptElement.type = "text/javascript";
    scriptElement.src = playerBundlerUrl;
    scriptElement.onload = () => {
      callback(PlayerLoadingStatuses.Loaded);
    };
    scriptElement.onerror = () => {
      callback(PlayerLoadingStatuses.Error);
    };
    head.appendChild(scriptElement);
  } catch (e) {
    console.warn(`Failed to add player bundler to page.`, e);
    callback(PlayerLoadingStatuses.Error);
  }
};

export const useLoadPlayerBundler = (options: UseLoadPlayerBundlerOptions): [PlayerManagerState, any] => {

  const {autoLoad, config} = options;
  const unmounted = useRef(false);
  const [state, dispatch] = useReducer(
    loadPlayerReducer, { status: PlayerLoadingStatuses.Initial, config});

  useEffect(() => {
    return () => {
      unmounted.current = true;
    }
  }, []);

  useEffect(() => {

    if(!config || !config.partnerId || ! config.uiConfId || !config.bundlerUrl) {
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

    const playerBundlerUrl = `${config.bundlerUrl}/p/${config.partnerId}/embedPlaykitJs/uiconf_id/${config.uiConfId}`;

    if(state.status === PlayerLoadingStatuses.Loading) {
      if(currentPlayerBundler && currentPlayerBundler !== playerBundlerUrl) {
        dispatch({type: PlayerLoadingStatuses.Error});
        console.warn(`It is not allowed to create multiple players'
         bundlers with different bundler urls. Did you create more than one
         provider ?`);
        return;
      }

      currentPlayerBundler = playerBundlerUrl;

      loadPlayerIntoSession(
        currentPlayerBundler,
        (status: PlayerLoadingStatuses) => {
          if(!unmounted.current)
            dispatch({type: status})
        });
    }

  }, [state.status, dispatch]);


  const loadPlayer = useCallback(() => {
    dispatch({type: PlayerLoadingStatuses.Loading});
  }, []);

  return [state, loadPlayer];
};
