import * as React from 'react';
import {useContext, useEffect, useRef, useState} from 'react';
import {createUseStyles, Theme, theming} from "@kaltura-react-ui-kits/path-theming";
import {PlayerLoadingStatus} from "./player-definitions";
import * as shortid from 'shortid';
import {KalturaPlayerContext} from "./kaltura-player-provider";

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
   * OnError event handler. Will be called after a player related error
   * @param error
   */
  onError?: (error: string) => void; //todo use KalturaPlayer Error codes / enums
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
  const {entryId, ks, autoplay, onMediaLoaded, onPlayerLoaded, onError} = props;
  const {state: playerManagerState} = useContext(KalturaPlayerContext);
  const [kPlayerState, setKPlayerState] = useState(PlayerLoadingStatus.Initial);
  const playerIdRef = useRef(shortid.generate());
  const kPlayerRef = useRef<KalturaPlayerTypes.Player | null>();

  const loadPlayer = () => {
    if(kPlayerRef.current) {
      console.log('Kaltura player was already loaded');
      return;
    }

    setKPlayerState(PlayerLoadingStatus.Loading);

    const playerFactory = window['KalturaPlayer'] as KalturaPlayerTypes.KalturaPlayerManager;
    try {
      const player: KalturaPlayerTypes.Player = playerFactory.setup(
        {
          targetId: playerIdRef.current,
          provider: {
            partnerId: playerManagerState.config.partnerId,
            uiConfId: playerManagerState.config.uiConfId,
            ks: ks
          },
          playback: {
            autoplay,
          }
        });

      if(onPlayerLoaded) onPlayerLoaded(entryId);

      kPlayerRef.current = player;

      loadMedia();

    } catch (e) {
      console.log(`kaltura Player: setup failure: ${e}`);
      setKPlayerState(PlayerLoadingStatus.Error);
      if(onError) onError(e);
    }
  };

  const loadMedia = () => {
    if(!kPlayerRef.current) {
      console.log('Kaltura player failed to load media. No player was setup');
      return;
    }

    kPlayerRef.current.loadMedia( {entryId })
      .then(() => {
        console.log('Kaltura Player: Successfully loaded media');
        setKPlayerState(PlayerLoadingStatus.Loaded);
        if(onMediaLoaded) onMediaLoaded(entryId);
      })
      .catch((err: any) => {
        console.log(`Kaltura Player: 'loadMedia' error: ${err}`);
        setKPlayerState(PlayerLoadingStatus.Error);
        if(onError) onError(err);
      });

  };

  const destroyPlayer = () => {
    if(kPlayerRef.current) {
        kPlayerRef.current.destroy();
        kPlayerRef.current = null;
    }
  };

  useEffect(() => {
    switch (playerManagerState.status) {
      case PlayerLoadingStatus.Loaded:
        loadPlayer();
        break;
      case PlayerLoadingStatus.Error:
        console.log('Kaltura Player factory loading error');
        if(onError) onError('Kaltura Player Factory loading error');
        break;
    }
    return () => {
      destroyPlayer();
    }
  }, [playerManagerState.status]);

  return (
    <>
      {(playerManagerState.status === PlayerLoadingStatus.Error
        || kPlayerState === PlayerLoadingStatus.Error)

        ? (<div className={classes.scriptErrorContainer}>
            <div className={classes.scriptsErrorMsg}>{LadingScriptsErrorMsg}</div>
          </div>)

        : (<div id={playerIdRef.current} className={classes.kalturaPlayer}></div>)
      }
    </>
  )
};

KalturaPlayer.defaultProps = {
  autoplay: true
};
