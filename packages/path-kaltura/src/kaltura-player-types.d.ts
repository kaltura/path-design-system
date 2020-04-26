interface FakeEvent {}

type CoreEventListener = (event: FakeEvent) => boolean | void;

type PlayerEventTypes = 'timeupdate';

declare namespace KalturaPlayerTypes {

  export interface KalturaPlayerManager {
    setup: (KalturaPlayerConfig) => Player;
  }

  export interface KalturaPlayerConfig {
    targetId: string,
    playback: PlaybackConfig,
    provider: ProviderOptionsObject,
  }

  export interface PlaybackConfig {
    autoplay: boolean
  }

  export interface ProviderOptionsObject {
    partnerId: string,
    ks: string,
    uiConfId: string
  }

  export interface MediaInfoObject {
    entryId: string,
    ks?: string
  }

  export interface Player {
    addEventListener(type: PlayerEventTypes, listener: CoreEventListener): void;
    removeEventListener: (type: PlayerEventTypes, listener: CoreEventListener) => void;
    currentTime: number;
    Event: Record<string, string>;
    loadMedia(mediaInfo: MediaInfoObject): Promise;
    pause(): void;
    destroy(): void;
  }
}
