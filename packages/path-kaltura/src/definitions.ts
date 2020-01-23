export const enum KalturaPlayerLoadingStatuses {
  Loaded = 'Loaded',
  Loading = 'Loading',
  Error = 'Error',
  Initial = 'Initial'
}

export interface KalturaPlayerState {
  status: KalturaPlayerLoadingStatuses;
  config: PlayerConfig;
}

export interface KalturaPlayerActions {
  type: KalturaPlayerLoadingStatuses;
}

export interface PlayerConfig {
  playkitUrl?: string;
  partnerId?: string;
  uiConfId?: string;
}

export interface KalturaPlayerCtxValue {
  state: KalturaPlayerState;
  dispatch: any | null;
}

export interface KalturaPlayerManagerProps {
  autoLoad: boolean;
  config: PlayerConfig;
  children?: React.ReactChild;
}

export interface KalturaPlayerProps {
  playerId: string;
  entryId: string;
  ks: string;
}
