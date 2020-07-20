import { useCallback, useEffect, useReducer, useRef } from "react";
import { PlayerBundleConfig } from "./kaltura-player-context";
import { PlayerBundleStatuses } from "./kaltura-player-context";

let currentPlayerBundlerUrl: string | null = null;

const playerStatusReducer = (
  playerBundleStatus: PlayerBundleStatuses,
  action: {
    type: PlayerBundleStatuses;
  }
): PlayerBundleStatuses => {
  if (action.type === PlayerBundleStatuses.Loading) {
    if (playerBundleStatus === PlayerBundleStatuses.Initial) {
      return PlayerBundleStatuses.Loading;
    } else {
      console.warn(`Changing player loading state to 'loading' is
       permitted only from an 'initial' state. Ignoring state changes request`);
      return playerBundleStatus;
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
  playerBundleConfig: PlayerBundleConfig;
}) => {
  const { autoLoad, playerBundleConfig } = options;
  const unmounted = useRef(false);
  const [playerBundleStatus, updateStatus] = useReducer(
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
      !playerBundleConfig ||
      !playerBundleConfig.partnerId ||
      !playerBundleConfig.uiConfId ||
      !playerBundleConfig.bundlerUrl
    ) {
      console.warn(`cannot load kaltura player bundler into session,
        missing parameters (did you remember to provide partnerId,
        uiConfId and playerBundleUrl?`);
      updateStatus({ type: PlayerBundleStatuses.Error });
      return;
    }

    // if there is no need to load player bundler scripts
    if (
      playerBundleStatus === PlayerBundleStatuses.Error ||
      playerBundleStatus === PlayerBundleStatuses.Loaded
    ) {
      return;
    }

    // hot loading player bundler scripts
    if (playerBundleStatus === PlayerBundleStatuses.Initial && autoLoad) {
      updateStatus({ type: PlayerBundleStatuses.Loading });
      return;
    }

    const playerBundlerUrl = `${playerBundleConfig.bundlerUrl}/p/${
      playerBundleConfig.partnerId
    }/embedPlaykitJs/uiconf_id/${playerBundleConfig.uiConfId}`;

    if (playerBundleStatus === PlayerBundleStatuses.Loading) {
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
        (playerBundleStatus: PlayerBundleStatuses) => {
          if (!unmounted.current) updateStatus({ type: playerBundleStatus });
        }
      );
    }
  }, [autoLoad, playerBundleConfig, playerBundleStatus, updateStatus]);

  const loadPlayerBundler = useCallback(() => {
    updateStatus({ type: PlayerBundleStatuses.Loading });
  }, []);

  return {playerBundleStatus, loadPlayerBundler};
};
