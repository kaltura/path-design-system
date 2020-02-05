import * as React from "react";
import {PlayerManagerState} from "./kaltura-player-manager";

export const enum PlayerLoadingStatuses {
  Loaded = 'Loaded',
  Loading = 'Loading',
  Error = 'Error',
  Initial = 'Initial',
  Destroyed = 'Destroyed'
}

export interface PlayerContextValue {
  state: PlayerManagerState;
  loadPlayer: () => void;
}

export const defaultPlayerContext: PlayerContextValue =
  {
    state: {
      status: PlayerLoadingStatuses.Initial,
      config: {}
    },
    loadPlayer: () => {}
  };

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(defaultPlayerContext);