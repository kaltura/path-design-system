import * as React from 'react';
import {KalturaPlayer} from "./kaltura-player";
import {KalturaPlayerManager} from "./kaltura-player-manager";
import {createUseStyles} from "@kaltura-react-ui-kits/path-theming";
import { withKnobs } from '@storybook/addon-knobs';
import {Button} from "@kaltura-react-ui-kits/path-inputs";
import {useContext} from "react";
import {KalturaPlayerContext} from "./kaltura-player-context";
import './kaltura-player.css';


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

// a 1 year KS for view only this specific entry
const ks = "NzkyMTY0MDg4MTU1NTM3YjcyOTIwNDJiZmU5YWI1M2FiNDZlZDRhY3wxODI3NTUxOzE4Mjc1NTE7MTYxMDI4OTc4OTswOzE1ODAyODk3ODkuOTkwNjtzaGFpLmFpbnZvbmVyQGthbHR1cmEuY29tO3N2aWV3OjFfcW0zanRiOWEsdmlldzoxX3FtM2p0YjlhLGxpc3Q6Kjs7";
const partnerId = '1827551';
const uiConfId = '44400392';
const serviceUrl = 'https://cfvod.kaltura.com';
const errorServiceUrl = 'httpd://cfvod.kaltura.com';
const entryId = '1_qm3jtb9a';

export const Default: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerManager config={{
      ks:ks,
      partnerId: partnerId,
      uiConfId: uiConfId,
      serviceUrl: serviceUrl
    }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       autoplay={false}
                       onMediaLoaded={(entryId) => console.log(entryId)}/>
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

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            serviceUrl: serviceUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       onMediaLoaded={(entryId) => console.log(entryId)}/>
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

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            serviceUrl: serviceUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       autoplay={false}
                       onMediaLoaded={(entryId) => console.log(entryId)}/>
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



export const kalturaPlayerErrorLoadingBundler: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            serviceUrl: errorServiceUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       autoplay={false}
                       onMediaLoaded={(entryId) => console.log(entryId)}
                       onPlayerLoadingError={(error => console.log(error))}
                       onMediaLoadingError={(error => console.log(error))}
        />
      </div>
    </KalturaPlayerManager>
  )
};

kalturaPlayerErrorLoadingBundler.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player error while loading kaltura player bundler scripts`
    }
  }
};


export const MultiplePlayersInPage: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            serviceUrl: serviceUrl
                          }}>
      <>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <br/>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
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

const LoadPlayerBundlerComponent = (props: {label: string}) => {

  const classes = useStyle();

  const kalturaPlayer = useContext(KalturaPlayerContext);

  const startLoadingBundler = () => {
    if(kalturaPlayer.loadPlayer)
      kalturaPlayer.loadPlayer();
  };

  return (
    <Button className={classes.loadScriptsButton}
            label={props.label}
            onClick={startLoadingBundler}></Button>
  );
};

export const ManuallyLoadPlayerBundlerScripts: Story = () => {
  const classes = useStyle();

  return (
    <>
      <KalturaPlayerManager autoLoad={false}
                            config={{
                              ks:ks,
                              partnerId: partnerId,
                              uiConfId: uiConfId,
                              serviceUrl: serviceUrl
                            }}>
        <>
          <LoadPlayerBundlerComponent label={'load player bundler'}/>
          <div className={classes.playerContainer}>
            <KalturaPlayer entryId={entryId}
                           autoplay={false}
                           onMediaLoaded={(entryId) => console.log(entryId)}/>
          </div>
        </>
      </KalturaPlayerManager>
    </>
  )
};

ManuallyLoadPlayerBundlerScripts.story = {
  parameters: {
    docs: {
      storyDescription: `Manually load Kaltura Player bundler scripts (kaltura player manager property)`
    }
  }
};


export const TowIdenticalPlayerProviders: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            serviceUrl: serviceUrl
                          }}>
      <KalturaPlayerManager autoLoad={true}
                            config={{
                              ks:ks,
                              partnerId: partnerId,
                              uiConfId: uiConfId,
                              serviceUrl: serviceUrl
                            }}>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
      </KalturaPlayerManager>
    </KalturaPlayerManager>
  )
};

TowIdenticalPlayerProviders.story = {
  parameters: {
    docs: {
      storyDescription: `Having two identical Kaltura Player providers`
    }
  }
};


export const TowDifferentPlayerProviders: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerManager autoLoad={true}
                          config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            serviceUrl: serviceUrl
                          }}>
      <>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <KalturaPlayerManager autoLoad={false}
                              config={{
                                ks:ks,
                                partnerId: partnerId,
                                uiConfId: uiConfId,
                                serviceUrl: errorServiceUrl
                              }}>
          <>
            <LoadPlayerBundlerComponent label={'try to load player with different bundler url'}/>
            <div className={classes.playerContainer}>
              <KalturaPlayer entryId={entryId}
                             autoplay={false}
                             onMediaLoaded={(entryId) => console.log(entryId)}/>
            </div>
          </>
        </KalturaPlayerManager>
      </>
    </KalturaPlayerManager>
  )
};

TowDifferentPlayerProviders.story = {
  parameters: {
    docs: {
      storyDescription: `Having two different Kaltura Player providers`
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
