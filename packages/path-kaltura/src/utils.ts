import {KalturaPlayerActions, KalturaPlayerLoadingStatuses, KalturaPlayerState} from "./definitions";

export const reducer = (state: KalturaPlayerState, action: KalturaPlayerActions) => {
  if(action.type === KalturaPlayerLoadingStatuses.Loading) {
    if (state.status === KalturaPlayerLoadingStatuses.Initial) {
      return { ...state, status: KalturaPlayerLoadingStatuses.Loading}
    }
  }
  return {...state, status: action.type}
};

export const loadPlaykitScript = (script: string | undefined, dispatch: any) => {
  if(!script) {
    dispatch({type: KalturaPlayerLoadingStatuses.Error});
    return;
  }
  const head = document.head || document.getElementsByTagName('head')[0];
  const scriptElement = document.createElement('script');
  scriptElement.type = "text/javascript";
  scriptElement.src = script;
  scriptElement.onload = () => {
    dispatch({type: KalturaPlayerLoadingStatuses.Loaded})
  };
  head.appendChild(scriptElement);
};
