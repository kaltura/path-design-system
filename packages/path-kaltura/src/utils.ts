import {PlayerReducerActions, PlayerLoadingStatus, PlayerManagerState} from "./player-definitions";

export const loadPlayerReducer = (state: PlayerManagerState, action: PlayerReducerActions) => {
  if(action.type === PlayerLoadingStatus.Loading) {
    if (state.status === PlayerLoadingStatus.Initial) {
      return { ...state, status: PlayerLoadingStatus.Loading}
    }
  }
  return {...state, status: action.type}
};

export const loadPlayerIntoSession = (script: string | undefined, dispatch: any) => {
  if(!script) {
    dispatch({type: PlayerLoadingStatus.Error});
    return;
  }
  const head = document.head || document.getElementsByTagName('head')[0];
  const scriptElement = document.createElement('script');
  scriptElement.type = "text/javascript";
  scriptElement.src = script;
  scriptElement.onload = () => {
    dispatch({type: PlayerLoadingStatus.Loaded})
  };
  scriptElement.onerror = () => {
    dispatch({type: PlayerLoadingStatus.Error});
  };
  head.appendChild(scriptElement);
};
