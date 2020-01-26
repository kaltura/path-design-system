import * as React from 'react';
import {KalturaPlayer} from "./kaltura-player";
import {KalturaPlayerCtx, KalturaPlayerManager} from "./kaltura-player-manager";
import {createUseStyles} from "@kaltura-react-ui-kits/path-theming";
import { withKnobs } from '@storybook/addon-knobs';
import {Button} from "@kaltura-react-ui-kits/path-inputs";
import {PlayerLoadingStatus} from "./definitions";
import {useContext} from "react";


const useStyle = createUseStyles({
  playerContainer: {
    width: '360px',
    height: '213px'
  },
  loadScriptsButton: {
    position: 'absolute',
    left: '400px',
    top: '100px'
  }
});

const ks = "djJ8MTgyNzU1MXzHVGeQMl3wWuCzo7GnvBlbgLVcwwigMmrOR_IQcAmcKnTOizskYB2pyCVKlMptdZ7Xd7qIf3yJoHnoSueCWPELexV2yYImarZOyTbZopc_t6z8JaNCVghVkQ2YB6Qf1XQPM1kp9jKlxDSOFpjUUorOvlvOAE9FTJxewwfx4shVuw==";
const partnerId = '1827551';
const uiConfId = '44400392';
const playkitUrl = 'https://cfvod.kaltura.com/p/1827551/embedPlaykitJs/uiconf_id/44400392';
const errorPlayerUrl = 'httpd://cfvod.kaltura.com/p/1827551/embedPlaykitJs/uiconf_id/44400392';
const entryId = '1_qm3jtb9a';

export const Default: Story = () => {
  const classes = useStyle();
  const playerId = '123456';

  return (
    <KalturaPlayerManager config={{
      partnerId: partnerId,
      uiConfId: uiConfId,
      playkitUrl: playkitUrl
    }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       playerId={playerId}
                       ks={ks}
                       onMediaLoaded={(entryId) => console.log(entryId)}
                       onError={(error => console.log(error))}
        />
      </div>
    </KalturaPlayerManager>
  )
};

Default.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player`,
    }
  }
};

export const KalturaPlayerAutoPlay: Story = () => {
  const classes = useStyle();
  const playerId = '1123456';

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            playkitUrl: playkitUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       playerId={playerId}
                       ks={ks}
                       onMediaLoaded={(entryId) => console.log(entryId)}
                       onError={(error => console.log(error))}
        />
      </div>
    </KalturaPlayerManager>
  )
};

KalturaPlayerAutoPlay.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player auto play media`
    }
  }
};

export const KalturaPlayerWithoutAutoPlay: Story = () => {
  const classes = useStyle();
  const playerId = '223456';

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            playkitUrl: playkitUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       playerId={playerId}
                       autoplay={false}
                       ks={ks}
                       onMediaLoaded={(entryId) => console.log(entryId)}
                       onError={(error => console.log(error))}
        />
      </div>
    </KalturaPlayerManager>
  )
};

KalturaPlayerWithoutAutoPlay.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player with no auto play media`
    }
  }
};



export const kalturaPlayerErrorLoadingScripts: Story = () => {
  const classes = useStyle();
  const playerId = '323456';

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            playkitUrl: errorPlayerUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       playerId={playerId}
                       ks={ks}
                       onMediaLoaded={(entryId) => console.log(entryId)}
                       onError={(error => console.log(error))}
        />
      </div>
    </KalturaPlayerManager>
  )
};

kalturaPlayerErrorLoadingScripts.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player error while loading kaltura player factory scripts`
    }
  }
};


export const MultiplePlayersInPage: Story = () => {
  const classes = useStyle();
  const playerId = '423456';

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            playkitUrl: playkitUrl
                          }}>
      <>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         playerId={playerId}
                         ks={ks}
                         onMediaLoaded={(entryId) => console.log(entryId)}
                         onError={(error => console.log(error))}
          />
        </div>
        <br/>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         playerId={`${playerId}111`}
                         ks={ks}
                         onMediaLoaded={(entryId) => console.log(entryId)}
                         onError={(error => console.log(error))}
          />
        </div>
      </>
    </KalturaPlayerManager>
  )
};

MultiplePlayersInPage.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player multiple instances`
    }
  }
};

const LoadPlayerScriptsComponent = () => {

  const classes = useStyle();

  const kalturaPlayer = useContext(KalturaPlayerCtx);

  const startLoadingScripts = () => {
    if(kalturaPlayer.dispatch)
      kalturaPlayer.dispatch({type: PlayerLoadingStatus.Loading});
  };

  return (
    <Button className={classes.loadScriptsButton}
            label={'load player scripts'}
            onClick={startLoadingScripts}></Button>
  );
};

export const ManuallyLoadPlayerFactory: Story = () => {
  const classes = useStyle();
  const playerId = '523456';

  return (
    <>
      <KalturaPlayerManager autoLoad={false}
                            config={{
                              partnerId: partnerId,
                              uiConfId: uiConfId,
                              playkitUrl: playkitUrl
                            }}>
        <>
          <LoadPlayerScriptsComponent/>
          <div className={classes.playerContainer}>
            <KalturaPlayer entryId={entryId}
                           playerId={playerId}
                           ks={ks}
                           onMediaLoaded={(entryId) => console.log(entryId)}
                           onError={(error => console.log(error))}
            />
          </div>
        </>
      </KalturaPlayerManager>
    </>
  )
};

ManuallyLoadPlayerFactory.story = {
  parameters: {
    docs: {
      storyDescription: `Manually load Kaltura Player scripts (kaltura player manager property)`
    }
  }
};


export default {
  title: 'Kaltura/Player',
  component: KalturaPlayer,
  decorators: [
    withKnobs
  ],
  parameters: {
    componentSubtitle: `Kaltura Player.`,
  },
};
