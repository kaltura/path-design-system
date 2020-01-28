import * as React from "react";
import {PlayerLoadingStatus, PlayerManagerState} from "./kaltura-player-manager";

export interface PlayerContextValue {
  state: PlayerManagerState;
  dispatch: any | null;
}

export const initialPlayerContext: PlayerContextValue =
  {
    state: {
      status: PlayerLoadingStatus.Initial,
      config: {}
    },
    dispatch: null
  };

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(initialPlayerContext);
