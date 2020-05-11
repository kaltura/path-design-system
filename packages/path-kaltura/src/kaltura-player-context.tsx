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

export enum PlayerActionTypes {
  Play = 'Play',
  Pause = 'Pause',
  Seek = 'Seek'
}

export interface PlayerAction {
  actionType: PlayerActionTypes;
  options?: SeekOptions;
}

export interface SeekOptions {
  seekTo: number;
  pause: boolean;
}

export interface PlayerContextValue {
  state: PlayerProviderState;
  loadPlayer: () => void;
  getPlayerCurrentTime$: (playerId: string) => Observable<number>;
  seek: (playerId: string, options: SeekOptions) => void;
  play: (playerId: string) => void;
  pause: (playerId: string) => void;
  registerPlayer: (playerId: string, currentTime$: Observable<number>) => { action$: Observable<PlayerAction>, onRemove: () => void }
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
      play: () => { console.warn(`can't play, KalturaPlayerProvider is missing`)},
      pause: () => { console.warn(`can't pause, KalturaPlayerProvider is missing`)},
      registerPlayer: () => ({ action$: throwError(new Error(`can't use context, KalturaPlayerProvider is missing`)), onRemove: () => {}})
    };

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(defaultPlayerContext);
