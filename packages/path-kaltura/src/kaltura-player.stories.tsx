import * as React from 'react';
import {KalturaPlayer} from "./kaltura-player";
import {KalturaPlayerManager} from "./kaltura-player-manager";
import {createUseStyles} from "@kaltura-react-ui-kits/path-theming";

const useStyle = createUseStyles({
  playerContainer: {
    width: '500px',
    height: '300px'
  }
});

export const Default: Story = () => {

  const classes = useStyle();
  const ks = "djJ8MTgyNzU1MXwIZrIZ55zBGlJiyntQLSy1Nd9aizmFHNxWId9u4G2wz2aOtTiNdQ-tecmziY8bnIRV7scs10xf301uh6SHQ1obgSUx2AjmGrzH500SbZcC1q4f8m0g41wPH9XFMwmqsfTfaB2MA1NuDu7uN65_FXaOrNYqKNxY6Ga8GpgRwLuxpQ==";
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
        <KalturaPlayer entryId={entryId} playerId={playerId} ks={ks}/>
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
