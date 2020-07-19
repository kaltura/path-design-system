import * as React from 'react';
import {createUseStyles, Theme, theming} from "@kaltura-react-ui-kits/path-theming";
import {useLoadPlayer} from "./use-load-player";
import {PlayerBundleLoadingStatuses} from "./kaltura-player-context";

export interface KalturaPlayerProps {
  /**
   * Entry Id, playable media entry id.
   */
  entryId: string;
  /**
   * Autoplay. Indicating if the auto play selected media
   * @default true
   */
  autoplay: boolean;
  /**
   * OnPlayerLoaded event handler. Will be called after all player bundler scripts were loaded
   * @param {entryId: string, playerId: string}
   */
  onPlayerLoaded?: (data: {entryId: string, playerId: string}) => void;
  /**
   * OnMediaLoaded event handler. Will be called after media entry was successful loaded in player
   * @param entryId
   */
  onMediaLoaded?: (entryId: string) => void;
  /**
   * onPlayerLoadingError event handler. Will be called after a player loading related error
   * @param error
   */
  onPlayerLoadingError?: (entryId: string) => void;
  /**
   * onMediaLoadingError event handler. Will be called after a media loading related error
   * @param error
   */
  onMediaLoadingError?: (entryId: string) => void;

  /**
   * customize player config before player setup
   */
  customizeConfig?: (config: Record<string, any>) => Record<string, any>
}

const useStyles = createUseStyles((theme: Theme) => ({
  kalturaPlayer: {
    height: '100%',
    width: '100%'
  },
  scriptErrorContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.grayscale4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'relative',
    borderRadius: '4px'
  },
  scriptsErrorMsg: {
    width: '100%',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#434a4b'
  }
}),  { theming });

export const LadingBundlerErrorMsg = 'Oops, failed to load kaltura player bundler';

export const KalturaPlayer = (props: KalturaPlayerProps) => {

  const classes = useStyles();
  const {
    entryId, autoplay,
    onPlayerLoadingError, onPlayerLoaded,
    customizeConfig,
    onMediaLoadingError, onMediaLoaded} = props;

  const {playerId, playerStatus} = useLoadPlayer(
    {autoplay, entryId, onPlayerLoadingError,
      onPlayerLoaded, onMediaLoadingError, onMediaLoaded, customizeConfig
    });

  return (
    <>
      {playerStatus === PlayerBundleLoadingStatuses.Error
        ? (<div className={classes.scriptErrorContainer}>
          <div className={classes.scriptsErrorMsg}>{LadingBundlerErrorMsg}</div>
        </div>)

        : (<div id={playerId} className={classes.kalturaPlayer}></div>)
      }
    </>
  );
};

KalturaPlayer.defaultProps = {
  autoplay: true
};
