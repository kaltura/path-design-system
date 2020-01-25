import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {KalturaPlayerCtx} from "./kaltura-player-manager";
import {createUseStyles} from "@kaltura-react-ui-kits/path-theming";
import {KalturaPlayerProps, PlayerLoadingStatuses} from "./definitions";

const useStyles = createUseStyles({
  kalturaPlayer: {
    height: '100%',
    width: '100%'
  }
});

export const KalturaPlayer = (props: KalturaPlayerProps) => {

  const classes = useStyles();
  const {playerId, entryId, ks, onMediaLoaded, onError} = props;
  const kalturaPlayer = useContext(KalturaPlayerCtx);
  const [kPlayer, setKPlayer] = useState({});

  const loadPlayer = () => {
    const playerFactory = window['KalturaPlayer'];
    const player = playerFactory['setup'](
      { targetId: playerId,
        provider: {
          partnerId: kalturaPlayer.state.config.partnerId,
          uiConfId: kalturaPlayer.state.config.uiConfId,
          ks: ks
        }});
    player['loadMedia']( {entryId});
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
    switch (kalturaPlayer.state.status) {
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
  }, [kalturaPlayer.state.status]);

  return (
    <div id={playerId} className={classes.kalturaPlayer}></div>
  )

};
