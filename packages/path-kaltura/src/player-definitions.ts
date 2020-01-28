export const enum PlayerLoadingStatus {
  Loaded = 'Loaded',
  Loading = 'Loading',
  Error = 'Error',
  Initial = 'Initial',
  Destroyed = 'Destroyed'
}

export interface PlayerReducerActions {
  type: PlayerLoadingStatus;
}

export interface PlayerManagerState {
  status: PlayerLoadingStatus;
  config: PlayerManagerConfig;
}

export interface PlayerManagerConfig {
  playerBundleUrl?: string;
  partnerId?: string;
  uiConfId?: string;
}

