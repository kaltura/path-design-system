import * as React from 'react';
import {createUseStyles, Theme, theming} from "@kaltura-react-ui-kits/path-theming";
import {PlayerLoadingStatus} from "./player-definitions";
import {useLoadMedia} from "./use-load-media";

export interface KalturaPlayerProps {
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
   * onPlayerLoadingError event handler. Will be called after a player loading related error
   * @param error
   */
  onPlayerLoadingError?: (entryId: string) => void;
  /**
   * onMediaLoadingError event handler. Will be called after a media loading related error
   * @param error
   */
  onMediaLoadingError?: (entryId: string) => void;

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
    position: 'relative'
  },
  scriptsErrorMsg: {
    position: 'absolute',
    top: 'calc(50% - 1em)',
    width: '100%',
    height: '1em',
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

export const LadingScriptsErrorMsg = 'Oops, failed to load kaltura player scripts';

export const KalturaPlayer = (props: KalturaPlayerProps) => {

  const classes = useStyles();
  const {
    entryId, ks, autoplay,
    onPlayerLoadingError, onPlayerLoaded,
    onMediaLoadingError, onMediaLoaded} = props;

  const {playerId, playerStatus, mediaStatus} = useLoadMedia(
    {autoplay, entryId, ks, onPlayerLoadingError,
      onPlayerLoaded, onMediaLoadingError, onMediaLoaded
    });

  return (
    <>
      {(playerStatus === PlayerLoadingStatus.Error
        || mediaStatus === PlayerLoadingStatus.Error)

        ? (<div className={classes.scriptErrorContainer}>
          <div className={classes.scriptsErrorMsg}>{LadingScriptsErrorMsg}</div>
        </div>)

        : (<div id={playerId} className={classes.kalturaPlayer}></div>)
      }
    </>
  )
};

KalturaPlayer.defaultProps = {
  autoplay: true
};
