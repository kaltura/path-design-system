import * as React from "react";
import { Observable, throwError } from "rxjs";

export enum PlayerBundleLoadingStatuses {
  Loaded = "Loaded",
  Loading = "Loading",
  Error = "Error",
  Initial = "Initial",
  Destroyed = "Destroyed"
}

export enum PlayerActionTypes {
  Play = "Play",
  Pause = "Pause",
  Seek = "Seek"
}

export enum PlayerStates {
  paused = "paused",
  playing = "playing",
  loading = "loading",
  idle = "idle",
  buffering = "buffering",
  error = "error"
}

export enum PlayerEventsTypes {
  FirstPlaying = "FirstPlaying",
  VideoResized = "VideoResized",
  PlayerResized = "PlayerResized"
}

export type PlayerEvents =
  | {
  type: PlayerEventsTypes.FirstPlaying;
}
  | {
  type: PlayerEventsTypes.PlayerResized;
  width: number;
  height: number;
}
  | {
  type: PlayerEventsTypes.VideoResized;
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface PlayerAction {
  actionType: PlayerActionTypes;
  options?: SeekOptions;
}

export interface SeekOptions {
  seekTo: number;
  pause: boolean;
}

export interface KalturaPlayerBundleConfig {
  ks?: string;
  bundlerUrl?: string;
  partnerId?: string;
  uiConfId?: string;
}


export interface PlayerContextValue {
  bundleLoadingStatus: PlayerBundleLoadingStatuses;
  bundleConfig: KalturaPlayerBundleConfig,
  loadPlayerBundler: () => void;
  getPlayerCurrentTime$: (playerId: string) => Observable<number>;
  getPlayerState$: (playerId: string) => Observable<PlayerStates>;
  getPlayerEvents$: (playerId: string) => Observable<PlayerEvents>;
  seek: (playerId: string, options: SeekOptions) => void;
  play: (playerId: string) => void;
  getPlayerInstance: (playerId: string) => null | Record<string, any>;
  pause: (playerId: string) => void;
  registerPlayer: (
    playerId: string,
    currentTime$: Observable<number>,
    playerState$: Observable<PlayerStates>,
    playerEvents$: Observable<PlayerEvents>
  ) => { action$: Observable<PlayerAction>; onRemove: () => void };
}

export const defaultPlayerContext: PlayerContextValue = {
  bundleLoadingStatus: PlayerBundleLoadingStatuses.Error,
  bundleConfig: {},
  loadPlayerBundler: () => {},
  getPlayerState$: () =>
    throwError(
      new Error(`can't use context, KalturaPlayerProvider is missing`)
    ),
  getPlayerEvents$: () =>
    throwError(
      new Error(`can't use context, KalturaPlayerProvider is missing`)
    ),
  getPlayerCurrentTime$: () =>
    throwError(
      new Error(`can't use context, KalturaPlayerProvider is missing`)
    ),
  seek: () => {
    console.warn(`can't seek, KalturaPlayerProvider is missing`);
  },
  play: () => {
    console.warn(`can't play, KalturaPlayerProvider is missing`);
  },
  getPlayerInstance: () => {
    console.warn(
      `can't get player instance , KalturaPlayerProvider is missing`
    );
    return null;
  },
  pause: () => {
    console.warn(`can't pause, KalturaPlayerProvider is missing`);
  },
  registerPlayer: () => ({
    action$: throwError(
      new Error(`can't use context, KalturaPlayerProvider is missing`)
    ),
    onRemove: () => {}
  })
};

export const KalturaPlayerContext = React.createContext<PlayerContextValue>(
  defaultPlayerContext
);
