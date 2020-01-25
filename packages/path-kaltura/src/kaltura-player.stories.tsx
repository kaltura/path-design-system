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

export const Default: Story = () => {

  const classes = useStyle();
  const ks = "djJ8MTgyNzU1MXwAJe7NTMERgw7OXAHmKd223WMron3KPt5pyRjmXSZXwYrTChjmVjqoIjAjFSMeu13WlHE_cxqYvF6Zzg-NfMck-6V61A_hK_tgxztQosznBYbsS5h-FKJY_g1XZU_WzJO1kGq_pu6OAf6eRm7ipltnupNe6frD7vnd5jVyxuGfuw==";
  const partnerId = '1827551';
  const uiConfId = '44400392';
  const playkitUrl = 'https://cfvod.kaltura.com/p/1827551/embedPlaykitJs/uiconf_id/44400392';
  const playerId = '123456';
  const entryId = '1_qm3jtb9a';
  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            playkitUrl: playkitUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId} playerId={playerId} ks={ks} onMediaLoaded={(entryId) => console.log(entryId)}/>

        <KalturaPlayer entryId={entryId} playerId={'22222'} ks={ks} onMediaLoaded={(entryId) => console.log(entryId)}/>

      </div>
    </KalturaPlayerManager>

  )
};

Default.story = {
  parameters: {
    docs: {
      storyDescription: ``,
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
