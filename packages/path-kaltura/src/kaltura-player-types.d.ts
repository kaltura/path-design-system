interface FakeEvent {}

type CoreEventListener = (event: FakeEvent) => boolean | void;

type PlayerEventTypes = "timeupdate" | "playerstatechanged" | "firstplaying";

type PlayerStateTypes =
  | "paused"
  | "playing"
  | "loading"
  | "idle"
  | "buffering"
  | "error";

type PlayerStateChangeEvent = {
  payload: {
    newState: {
      type: PlayerStateTypes;
    };
    oldState: {
      type: PlayerStateTypes;
    };
  };
};

type KalturaPlayerManager = {
  setup: (KalturaPlayerConfig) => Player;
};

export interface KalturaPlayerConfig {
  targetId: string;
  playback: PlaybackConfig;
  provider: ProviderOptionsObject;
}

export interface PlaybackConfig {
  autoplay: boolean;
}

export interface ProviderOptionsObject {
  partnerId: string;
  ks: string;
  uiConfId: string;
}

export interface MediaInfoObject {
  entryId: string;
  ks?: string;
}

export interface Player {
  addEventListener(type: PlayerEventTypes, listener: CoreEventListener): void;
  removeEventListener: (
    type: PlayerEventTypes,
    listener: CoreEventListener
  ) => void;
  currentTime: number;
  Event: Record<string, string>;
  loadMedia(mediaInfo: MediaInfoObject): Promise<any>;
  pause(): void;
  play(): void;
  destroy(): void;
}
