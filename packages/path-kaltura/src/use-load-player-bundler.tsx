import { useCallback, useEffect, useReducer, useRef } from "react";
import { KalturaPlayerBundleConfig } from "./kaltura-player-context";
import { PlayerBundleStatuses } from "./kaltura-player-context";

let currentPlayerBundlerUrl: string | null = null;

const playerStatusReducer = (
  bundleLoadingStatus: PlayerBundleStatuses,
  action: {
    type: PlayerBundleStatuses;
  }
): PlayerBundleStatuses => {
  if (action.type === PlayerBundleStatuses.Loading) {
    if (bundleLoadingStatus === PlayerBundleStatuses.Initial) {
      return PlayerBundleStatuses.Loading;
    } else {
      console.warn(`Changing player loading state to 'loading' is
       permitted only from an 'initial' state. Ignoring state changes request`);
      return bundleLoadingStatus;
    }
  }
  return action.type;
};

export const loadPlayerIntoSession = (
  playerBundlerUrl: string | undefined,
  callback: (newState: PlayerBundleStatuses) => void
) => {
  if (!playerBundlerUrl) {
    console.warn(
      "Failed to load player into session," +
      " did you forget to provide a player bundler url?"
    );
    callback(PlayerBundleStatuses.Error);
    return;
  }

  // @ts-ignore
  if (!!window["KalturaPlayer"] && window["KalturaPlayer"].setup) {
    callback(PlayerBundleStatuses.Loaded);
    return;
  }

  try {
    const head = document.head || document.getElementsByTagName("head")[0];
    const scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = playerBundlerUrl;
    scriptElement.onload = () => {
      callback(PlayerBundleStatuses.Loaded);
    };
    scriptElement.onerror = (e) => {
      console.warn(`Failed to load kaltura player bundler script.`, e);
      callback(PlayerBundleStatuses.Error);
    };
    head.appendChild(scriptElement);
  } catch (e) {
    console.warn(`Failed to load kaltura player bundler script.`, e);
    callback(PlayerBundleStatuses.Error);
  }
};

export const useLoadPlayerBundler = (options: {
  autoLoad: boolean;
  bundleConfig: KalturaPlayerBundleConfig;
}) => {
  const { autoLoad, bundleConfig } = options;
  const unmounted = useRef(false);
  const [bundleLoadingStatus, updateStatus] = useReducer(
    playerStatusReducer,
    PlayerBundleStatuses.Initial
  );

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (
      !bundleConfig ||
      !bundleConfig.partnerId ||
      !bundleConfig.uiConfId ||
      !bundleConfig.bundlerUrl
    ) {
      console.warn(`cannot load kaltura player bundler into session,
        missing parameters (did you remember to provide partnerId,
        uiConfId and playerBundleUrl?`);
      updateStatus({ type: PlayerBundleStatuses.Error });
      return;
    }

    // if there is no need to load player bundler scripts
    if (
      bundleLoadingStatus === PlayerBundleStatuses.Error ||
      bundleLoadingStatus === PlayerBundleStatuses.Loaded
    ) {
      return;
    }

    // hot loading player bundler scripts
    if (bundleLoadingStatus === PlayerBundleStatuses.Initial && autoLoad) {
      updateStatus({ type: PlayerBundleStatuses.Loading });
      return;
    }

    const playerBundlerUrl = `${bundleConfig.bundlerUrl}/p/${
      bundleConfig.partnerId
    }/embedPlaykitJs/uiconf_id/${bundleConfig.uiConfId}`;

    if (bundleLoadingStatus === PlayerBundleStatuses.Loading) {
      if (currentPlayerBundlerUrl && currentPlayerBundlerUrl !== playerBundlerUrl) {
        updateStatus({ type: PlayerBundleStatuses.Error });
        console.warn(`It is not allowed to create multiple players'
         bundlers with different bundler urls. Did you create more than one
         provider ?`);
        return;
      }

      currentPlayerBundlerUrl = playerBundlerUrl;

      loadPlayerIntoSession(
        currentPlayerBundlerUrl,
        (bundleLoadingStatus: PlayerBundleStatuses) => {
          if (!unmounted.current) updateStatus({ type: bundleLoadingStatus });
        }
      );
    }
  }, [autoLoad, bundleConfig, bundleLoadingStatus, updateStatus]);

  const loadPlayerBundler = useCallback(() => {
    updateStatus({ type: PlayerBundleStatuses.Loading });
  }, []);

  return {bundleLoadingStatus, loadPlayerBundler};
};
