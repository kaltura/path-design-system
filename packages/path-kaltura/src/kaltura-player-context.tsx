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
      getPlayerCurrentTime$: (playerId: string) =>  throwError(new Error(`No player with provided playerId: ${playerId}`)),
      seek: (playerId: string, time: number) => { console.warn(`No player with provided playerId: ${playerId}, failed to update time ${time}`)},
      registerPlayer: (playerId: string, currentTime$: Observable<number>) =>
        ({ seek$: throwError(new Error(`No player with provided playerId ${playerId}`)), onRemove: () => {console.log(currentTime$)}})
    };

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(defaultPlayerContext);
