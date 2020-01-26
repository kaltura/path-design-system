export const initalCtxState: KalturaPlayerCtxValue =
  {
    state: {
      status: PlayerLoadingStatuses.Initial,
      config: {}
    },
    dispatch: null
  };

export const ladingScriptsErrorMsg = 'Oops, failed to load kaltura player scripts';

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
  /**
   * Player Id, will be the containing player element id. should be unique
   */
  playerId: string;
  /**
   * Entry Id, playable media entry id.
   */
  entryId: string;
  /**
   * KS
   */
  ks: string;
  /**
   * Autoplay. Indicating if the auto play selected media
   * @default true
   */
  autoplay: boolean;
  /**
   * OnPlayerLoaded event handler. Will be called after all player scripts were loaded
   * @param entryId
   */
  onPlayerLoaded?: (entryId: string) => void;
  /**
   * OnMediaLoaded event handler. Will be called after media entry was successful loaded in player
   * @param entryId
   */
  onMediaLoaded?: (entryId: string) => void;
  /**
   * OnError event handler. Will be called after a player related error
   * @param error
   */
  onError?: (error: string) => void; //todo use KalturaPlayer Error codes / enums
}
