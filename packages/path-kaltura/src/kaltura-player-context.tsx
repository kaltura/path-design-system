import * as React from "react";
import {PlayerManagerState} from "./kaltura-player-manager";

export const enum PlayerLoadingStatus {
  Loaded = 'Loaded',
  Loading = 'Loading',
  Error = 'Error',
  Initial = 'Initial',
  Destroyed = 'Destroyed'
}

export interface PlayerContextValue {
  state: PlayerManagerState;
  dispatch: any | null;
}

export const defaultPlayerContext: PlayerContextValue =
  {
    state: {
      status: PlayerLoadingStatus.Initial,
      config: {}
    },
    dispatch: null
  };

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(defaultPlayerContext);
