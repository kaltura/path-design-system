import {KalturaPlayerActions, PlayerLoadingStatuses, KalturaPlayerState} from "./definitions";

export const reducer = (state: KalturaPlayerState, action: KalturaPlayerActions) => {
  if(action.type === PlayerLoadingStatuses.Loading) {
    if (state.status === PlayerLoadingStatuses.Initial) {
      return { ...state, status: PlayerLoadingStatuses.Loading}
    }
  }
  return {...state, status: action.type}
};

export const loadPlaykitScript = (script: string | undefined, dispatch: any) => {
  if(!script) {
    dispatch({type: PlayerLoadingStatuses.Error});
    return;
  }
  const head = document.head || document.getElementsByTagName('head')[0];
  const scriptElement = document.createElement('script');
  scriptElement.type = "text/javascript";
  scriptElement.src = script;
  scriptElement.onload = () => {
    dispatch({type: PlayerLoadingStatuses.Loaded})
  };
  head.appendChild(scriptElement);
};
