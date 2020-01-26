export const initalCtxState: KalturaPlayerCtxValue =
  {
    state: {
      status: PlayerLoadingStatuses.Initial,
      config: {}
    },
    dispatch: null
  };

export const enum PlayerLoadingStatuses {
  Loaded = 'Loaded',
  Loading = 'Loading',
  Error = 'Error',
  Initial = 'Initial'
}

export interface KalturaPlayerState {
  status: PlayerLoadingStatuses;
  config: PlayerConfig;
}

export interface KalturaPlayerActions {
  type: PlayerLoadingStatuses;
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
  autoplay?: boolean;
  onPlayerLoaded?: (entryId: string) => void;
  onMediaLoaded?: (entryId: string) => void;
  onError?: (error: string) => void; //todo use KalturaPlayer Error codes / enums
}
