import * as React from "react";
import {PlayerManagerState} from "./kaltura-player-manager";
import { Observable } from 'rxjs';

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
  addPlayerCurrentTimeObservable: (playerId: string, currentTimeObservable: Observable<number>) => void;
  getPlayerCurrentTimeObservable: (playerId: string) => Observable<number> | null;
  removePlayerCurrentTimeObservable: (playerId: string) => void;
}

export const defaultPlayerContext: PlayerContextValue =
    {
      state: {
        status: PlayerLoadingStatuses.Error,
        config: {}
      },
      loadPlayer: () => {},
      addPlayerCurrentTimeObservable: () => {},
      getPlayerCurrentTimeObservable: () => null,
      removePlayerCurrentTimeObservable: () => {}
    }
  ;

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(defaultPlayerContext);
