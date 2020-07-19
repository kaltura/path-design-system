import { useCallback, useEffect, useReducer, useRef } from "react";
import { KalturaPlayerBundleConfig } from "./kaltura-player-context";
import { PlayerBundleLoadingStatuses } from "./kaltura-player-context";

let currentPlayerBundlerUrl: string | null = null;

const playerStatusReducer = (
  bundleLoadingStatus: PlayerBundleLoadingStatuses,
  action: {
    type: PlayerBundleLoadingStatuses;
  }
): PlayerBundleLoadingStatuses => {
  console.log(`a request for: ${action.type} was made`);
  if (action.type === PlayerBundleLoadingStatuses.Loading) {
    if (bundleLoadingStatus === PlayerBundleLoadingStatuses.Initial) {
      console.log("**** changed to loading state");
      return PlayerBundleLoadingStatuses.Loading;
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
  callback: (newState: PlayerBundleLoadingStatuses) => void
) => {
  if (!playerBundlerUrl) {
    console.warn(
      "Failed to load player into session," +
      " did you forget to provide a player bundler url?"
    );
    callback(PlayerBundleLoadingStatuses.Error);
    return;
  }

  // @ts-ignore
  if (!!window["KalturaPlayer"] && window["KalturaPlayer"].setup) {
    console.log("**** player bundler was already loaded into session");
    callback(PlayerBundleLoadingStatuses.Loaded);
    return;
  }

  console.log(`******* loading player into session....`);

  try {
    const head = document.head || document.getElementsByTagName("head")[0];
    const scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = playerBundlerUrl;
    scriptElement.onload = () => {
      callback(PlayerBundleLoadingStatuses.Loaded);
    };
    scriptElement.onerror = () => {
      callback(PlayerBundleLoadingStatuses.Error);
    };
    head.appendChild(scriptElement);
  } catch (e) {
    console.warn(`Failed to add player bundler to page.`, e);
    callback(PlayerBundleLoadingStatuses.Error);
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
    PlayerBundleLoadingStatuses.Initial
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
      updateStatus({ type: PlayerBundleLoadingStatuses.Error });
      return;
    }

    // if there is no need to load player bundler scripts
    if (
      bundleLoadingStatus === PlayerBundleLoadingStatuses.Error ||
      bundleLoadingStatus === PlayerBundleLoadingStatuses.Loaded
    ) {
      return;
    }

    // hot loading player bundler scripts
    if (bundleLoadingStatus === PlayerBundleLoadingStatuses.Initial && autoLoad) {
      updateStatus({ type: PlayerBundleLoadingStatuses.Loading });
      return;
    }

    const playerBundlerUrl = `${bundleConfig.bundlerUrl}/p/${
      bundleConfig.partnerId
    }/embedPlaykitJs/uiconf_id/${bundleConfig.uiConfId}`;

    if (bundleLoadingStatus === PlayerBundleLoadingStatuses.Loading) {
      if (currentPlayerBundlerUrl && currentPlayerBundlerUrl !== playerBundlerUrl) {
        updateStatus({ type: PlayerBundleLoadingStatuses.Error });
        console.warn(`It is not allowed to create multiple players'
         bundlers with different bundler urls. Did you create more than one
         provider ?`);
        return;
      }

      currentPlayerBundlerUrl = playerBundlerUrl;

      loadPlayerIntoSession(
        currentPlayerBundlerUrl,
        (bundleLoadingStatus: PlayerBundleLoadingStatuses) => {
          if (!unmounted.current) updateStatus({ type: bundleLoadingStatus });
        }
      );
    }
  }, [autoLoad, bundleConfig, bundleLoadingStatus, updateStatus]);

  const loadPlayerBundler = useCallback(() => {
    updateStatus({ type: PlayerBundleLoadingStatuses.Loading });
  }, []);

  return {bundleLoadingStatus, loadPlayerBundler};
};
