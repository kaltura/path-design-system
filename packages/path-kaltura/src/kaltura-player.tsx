import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {KalturaPlayerCtx} from "./kaltura-player-manager";
import {createUseStyles, Theme, theming} from "@kaltura-react-ui-kits/path-theming";
import {KalturaPlayerProps, LadingScriptsErrorMsg, PlayerLoadingStatus} from "./definitions";

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

export interface kPlayerState {
  player: null | KalturaPlayerTypes.Player;
  status: PlayerLoadingStatus;
}

export const KalturaPlayer = (props: KalturaPlayerProps) => {

  const classes = useStyles();
  const {playerId, entryId, ks, autoplay, onMediaLoaded, onPlayerLoaded, onError} = props;
  const {state: playerFactoryState} = useContext(KalturaPlayerCtx);
  const [kPlayer, setKPlayer] =
    useState<kPlayerState>({player: null, status: PlayerLoadingStatus.Initial});

  const loadPlayer = () => {
    const playerFactory = window['KalturaPlayer'] as KalturaPlayerTypes.KalturaPlayerManager;
    try {
      const player: KalturaPlayerTypes.Player = playerFactory.setup(
        { targetId: playerId,
          provider: {
            partnerId: playerFactoryState.config.partnerId,
            uiConfId: playerFactoryState.config.uiConfId,
            ks: ks
          },
          playback: {
            autoplay,
          }
        });

      if(onPlayerLoaded) onPlayerLoaded(entryId);

      loadMedia(player);

    } catch (e) {
      console.log(`kaltura Player setup failed: ${e}`);
      if(onError) onError(e);
      setKPlayer({player: null, status: PlayerLoadingStatus.Error})
    }
  };

  const loadMedia = (player: KalturaPlayerTypes.Player) => {
    player.loadMedia( {entryId })
      .then(() => {
        if(onMediaLoaded) onMediaLoaded(entryId);
        setKPlayer({player, status: PlayerLoadingStatus.Loaded});
      })
      .catch((err: any) => {
        console.log(`Kaltura Player 'loadMedia' error: ${err}`);
        if(onError) onError(err);
        setKPlayer({player: null, status: PlayerLoadingStatus.Error})
      });
  };

  const destroyPlayer = () => {
    if(kPlayer.player) {
      kPlayer.player.destroy();
    }
  };

  useEffect(() => {
    switch (playerFactoryState.status) {
      case PlayerLoadingStatus.Loaded:
        loadPlayer();
        break;
      case PlayerLoadingStatus.Error:
        if(onError) onError('Script loading error');
        break;
    }
    return () => {
      destroyPlayer();
    }
  }, [playerFactoryState.status]);

  return (
    <>
      {(playerFactoryState.status === PlayerLoadingStatus.Error
        || kPlayer.status === PlayerLoadingStatus.Error)

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
