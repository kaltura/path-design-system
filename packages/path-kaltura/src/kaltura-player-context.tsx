import * as React from "react";
import {PlayerProviderState} from "./kaltura-player-provider";
import { Observable, throwError } from 'rxjs';

export const enum PlayerLoadingStatuses {
  Loaded = 'Loaded',
  Loading = 'Loading',
  Error = 'Error',
  Initial = 'Initial',
  Destroyed = 'Destroyed'
}

export interface PlayerContextValue {
  state: PlayerProviderState;
  loadPlayer: () => void;
  getPlayerCurrentTime$: (playerId: string) => Observable<number>;
  seek: (playerId: string, time: number) => void;
  registerPlayer: (playerId: string, currentTime$: Observable<number>) => { seek$: Observable<number>, onRemove: () => void }
}

export const defaultPlayerContext: PlayerContextValue =
    {
      state: {
        status: PlayerLoadingStatuses.Error,
        config: {}
      },
      loadPlayer: () => {},
      getPlayerCurrentTime$: () =>  throwError(new Error(`can't use context, KalturaPlayerProvider is missing`)),
      seek: () => { console.warn(`can't seek, KalturaPlayerProvider is missing`)},
      registerPlayer: () => ({ seek$: throwError(new Error(`can't use context, KalturaPlayerProvider is missing`)), onRemove: () => {}})
    };

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(defaultPlayerContext);
