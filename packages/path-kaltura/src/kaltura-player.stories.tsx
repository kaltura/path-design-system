import * as React from 'react';
import {KalturaPlayer} from "./kaltura-player";
import {KalturaPlayerManager} from "./kaltura-player-manager";
import {createUseStyles} from "@kaltura-react-ui-kits/path-theming";

const useStyle = createUseStyles({
  playerContainer: {
    width: '360px',
    height: '213px'
  }
});

const ks = "djJ8MTgyNzU1MXwAJe7NTMERgw7OXAHmKd223WMron3KPt5pyRjmXSZXwYrTChjmVjqoIjAjFSMeu13WlHE_cxqYvF6Zzg-NfMck-6V61A_hK_tgxztQosznBYbsS5h-FKJY_g1XZU_WzJO1kGq_pu6OAf6eRm7ipltnupNe6frD7vnd5jVyxuGfuw==";
const partnerId = '1827551';
const uiConfId = '44400392';
const playkitUrl = 'https://cfvod.kaltura.com/p/1827551/embedPlaykitJs/uiconf_id/44400392';
const errorPlayerUrl = 'httpd://cfvod.kaltura.com/p/1827551/embedPlaykitJs/uiconf_id/44400392';
const playerId = '123456';
const entryId = '1_qm3jtb9a';

export const Default: Story = () => {
  const classes = useStyle();

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

Default.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player`,
    }
  }
};

export const DisplayKalturaPlayer: Story = () => {
  const classes = useStyle();

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

DisplayKalturaPlayer.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player`
    }
  }
};


export const kalturaPlayerErrorLoadingScripts: Story = () => {
  const classes = useStyle();

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
                       onError={(error => alert(error))}
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


export default {
  title: 'Kaltura/Player',
  component: KalturaPlayer,
  decorators: [
    // withKnobs,
    // withThemeProvider,
  ],
  parameters: {
    componentSubtitle: `Kaltura Player.`,
  },
};
