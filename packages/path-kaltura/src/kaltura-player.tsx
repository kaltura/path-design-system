import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {KalturaPlayerCtx} from "./kaltura-player-manager";
import {createUseStyles, Theme, theming} from "@kaltura-react-ui-kits/path-theming";
import {KalturaPlayerProps, ladingScriptsErrorMsg, PlayerLoadingStatuses} from "./definitions";

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

export const KalturaPlayer = (props: KalturaPlayerProps) => {

  const classes = useStyles();
  const {playerId, entryId, ks, autoplay, onMediaLoaded, onPlayerLoaded, onError} = props;
  const {state} = useContext(KalturaPlayerCtx);
  const [kPlayer, setKPlayer] = useState({});

  const loadPlayer = () => {
    const playerFactory = window['KalturaPlayer'];
    const player = playerFactory['setup'](
      { targetId: playerId,
        provider: {
          partnerId: state.config.partnerId,
          uiConfId: state.config.uiConfId,
          ks: ks
        },
        playback: {
          autoplay,
        }
      });
    if(onPlayerLoaded)
      onPlayerLoaded(entryId);

    player['loadMedia']( {entryId });
    player.addEventListener('changesourceended', () => {
      if(onMediaLoaded)
        onMediaLoaded(entryId);
    });
    // todo look for media loading error in playkit repo
    setKPlayer(player);
  };

  const destroyPlayer = () => {
    if(kPlayer) {
      kPlayer['destroy'];
    }
  };

  useEffect(() => {
    switch (state.status) {
      case PlayerLoadingStatuses.Loaded:
        loadPlayer();
        break;
      case PlayerLoadingStatuses.Error:
        if(onError)
          onError('Script loading error');
        break;
    }
    return () => {
      destroyPlayer();
    }
  }, [state.status]);

  return (
    <>
      {state.status === PlayerLoadingStatuses.Loaded
        && <div id={playerId} className={classes.kalturaPlayer}></div>}
      {state.status === PlayerLoadingStatuses.Error
      && <div className={classes.scriptErrorContainer}>
        <div className={classes.scriptsErrorMsg}>{ladingScriptsErrorMsg}</div>
      </div> }
    </>
)

};

KalturaPlayer.defaultProps = {
  autoplay: true
};
