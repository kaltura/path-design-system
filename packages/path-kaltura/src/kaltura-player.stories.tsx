import * as React from 'react';
import {KalturaPlayer} from "./kaltura-player";
import {KalturaPlayerProvider} from "./kaltura-player-provider";
import {createUseStyles} from "@kaltura-react-ui-kits/path-theming";
import { withKnobs } from '@storybook/addon-knobs';
import {Button} from "@kaltura-react-ui-kits/path-inputs";
import {useContext, useEffect, useState} from "react";
import {KalturaPlayerContext} from "./kaltura-player-context";
import '../kaltura-player.css';


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
const bunderlUrl = 'https://cfvod.kaltura.com';
const errorBundlerUrl = 'httpd://cfvod.kaltura.com';
const entryId = '1_qm3jtb9a';

export const Default: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerProvider config={{
      ks:ks,
      partnerId: partnerId,
      uiConfId: uiConfId,
      bundlerUrl: bunderlUrl
    }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       autoplay={false}
                       onMediaLoaded={(entryId) => console.log(entryId)}/>
      </div>
    </KalturaPlayerProvider>
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
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            bundlerUrl: bunderlUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       onMediaLoaded={(entryId) => console.log(entryId)}/>
      </div>
    </KalturaPlayerProvider>
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
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            bundlerUrl: bunderlUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       autoplay={false}
                       onMediaLoaded={(entryId) => console.log(entryId)}/>
      </div>
    </KalturaPlayerProvider>
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
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            bundlerUrl: errorBundlerUrl
                          }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={entryId}
                       autoplay={false}
                       onMediaLoaded={(entryId) => console.log(entryId)}
                       onPlayerLoadingError={(error => console.log(error))}
                       onMediaLoadingError={(error => console.log(error))}
        />
      </div>
    </KalturaPlayerProvider>
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
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            bundlerUrl: bunderlUrl
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
    </KalturaPlayerProvider>
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
      <KalturaPlayerProvider autoLoad={false}
                             config={{
                              ks:ks,
                              partnerId: partnerId,
                              uiConfId: uiConfId,
                              bundlerUrl: bunderlUrl
                            }}>
        <>
          <LoadPlayerBundlerComponent label={'load player bundler'}/>
          <div className={classes.playerContainer}>
            <KalturaPlayer entryId={entryId}
                           autoplay={false}
                           onMediaLoaded={(entryId) => console.log(entryId)}/>
          </div>
        </>
      </KalturaPlayerProvider>
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


export const TwoIdenticalPlayerProviders: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            bundlerUrl: bunderlUrl
                          }}>
      <KalturaPlayerProvider autoLoad={true}
                             config={{
                              ks:ks,
                              partnerId: partnerId,
                              uiConfId: uiConfId,
                              bundlerUrl: bunderlUrl
                            }}>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
      </KalturaPlayerProvider>
    </KalturaPlayerProvider>
  )
};

TwoIdenticalPlayerProviders.story = {
  parameters: {
    docs: {
      storyDescription: `Having two identical Kaltura Player providers`
    }
  }
};


export const TowDifferentPlayerProviders: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                            ks:ks,
                            partnerId: partnerId,
                            uiConfId: uiConfId,
                            bundlerUrl: bunderlUrl
                          }}>
      <>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <KalturaPlayerProvider autoLoad={false}
                               config={{
                                ks:ks,
                                partnerId: partnerId,
                                uiConfId: uiConfId,
                                bundlerUrl: errorBundlerUrl
                              }}>
          <>
            <LoadPlayerBundlerComponent label={'try to load player with different bundler url'}/>
            <div className={classes.playerContainer}>
              <KalturaPlayer entryId={entryId}
                             autoplay={false}
                             onMediaLoaded={(entryId) => console.log(entryId)}/>
            </div>
          </>
        </KalturaPlayerProvider>
      </>
    </KalturaPlayerProvider>
  )
};

TowDifferentPlayerProviders.story = {
  parameters: {
    docs: {
      storyDescription: `Having two different Kaltura Player providers`
    }
  }
};

export const KalturaPlayerWithNoProvider: Story = () => {
  const classes = useStyle();

  return (
    <div className={classes.playerContainer}>
      <KalturaPlayer entryId={entryId}
                     onMediaLoaded={(entryId) => console.log(entryId)}/>
    </div>
  )
};

KalturaPlayerWithNoProvider.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player with no provider`
    }
  }
};

const PlayerSeekAndShow = (props: {playerId: string}) => {

  const {playerId} = props;

  const {getPlayerCurrentTime$, seek} = useContext(KalturaPlayerContext);
  const [currentTime, setcurrentTime] = useState(0);

  useEffect(() => {
    if(!playerId) return;

    getPlayerCurrentTime$(playerId).subscribe((currentTime) => {
      setcurrentTime(currentTime);
    })
  }, [playerId]);

  const seekTo = () => {
    if(!playerId) return;
    seek(playerId, {seekTo: Math.floor(currentTime + 10*1000), pause: false});
  };

  return (
    <div>
      <div>{`Player ${playerId} currentTime: ${currentTime}`}</div>
      <Button label={'Add 10 seconds'} onClick={seekTo}/>
    </div>
  );
};

export const MultiplePlayersWithTimeAndSeekInPage: Story = () => {
  const classes = useStyle();

  const [playerAId, setPlayerAId] = useState('');
  const [playerBId, setPlayerBId] = useState('');

  const onPlayerALoad = (data: {entryId: string, playerId: string}) => {
    setPlayerAId(data.playerId);
  };

  const onPlayerBLoad = (data: {entryId: string, playerId: string}) => {
    setPlayerBId(data.playerId);
  };


  return (
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                             ks:ks,
                             partnerId: partnerId,
                             uiConfId: uiConfId,
                             bundlerUrl: bunderlUrl
                           }}>
      <>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onPlayerLoaded={onPlayerALoad}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <PlayerSeekAndShow playerId={playerAId}/>
        <br/>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onPlayerLoaded={onPlayerBLoad}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <PlayerSeekAndShow playerId={playerBId}/>
      </>
    </KalturaPlayerProvider>
  )
};

MultiplePlayersWithTimeAndSeekInPage.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player multiple instances`
    }
  }
};

const PlayerPlayAndPauseActions = (props: {playerId: string}) => {

  const {playerId} = props;

  const {getPlayerCurrentTime$, play, pause} = useContext(KalturaPlayerContext);
  const [currentTime, setcurrentTime] = useState(0);

  useEffect(() => {
    if(!playerId) return;

    getPlayerCurrentTime$(playerId).subscribe((currentTime) => {
      setcurrentTime(currentTime);
    })
  }, [playerId]);

  const playAction = () => {
    if(!playerId) return;
    play(playerId);
  };

  const pauseAction = () => {
    if(!playerId) return;
    pause(playerId);
  };

  return (
    <div>
      <div>{`Player ${playerId} currentTime: ${currentTime}`}</div>
      <Button label={'play'} onClick={playAction}/>
      <Button label={'pause'} onClick={pauseAction}/>
    </div>
  );
};


export const MultiplePlayersForPlayAndPauseActions: Story = () => {
  const classes = useStyle();

  const [playerAId, setPlayerAId] = useState('');
  const [playerBId, setPlayerBId] = useState('');

  const onPlayerALoad = (data: {entryId: string, playerId: string}) => {
    setPlayerAId(data.playerId);
  };

  const onPlayerBLoad = (data: {entryId: string, playerId: string}) => {
    setPlayerBId(data.playerId);
  };


  return (
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                             ks:ks,
                             partnerId: partnerId,
                             uiConfId: uiConfId,
                             bundlerUrl: bunderlUrl
                           }}>
      <>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onPlayerLoaded={onPlayerALoad}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <PlayerPlayAndPauseActions playerId={playerAId}/>
        <br/>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onPlayerLoaded={onPlayerBLoad}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <PlayerPlayAndPauseActions playerId={playerBId}/>
      </>
    </KalturaPlayerProvider>
  )
};

MultiplePlayersForPlayAndPauseActions.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player multiple instances for testing play and pause action streams`
    }
  }
};


const PlayerStateUpdateLabels = (props: {playerId: string}) => {

  const {playerId} = props;

  const {getPlayerState$} = useContext(KalturaPlayerContext);
  const [currentState, setCurrentState] = useState('idle');

  useEffect(() => {
    if(!playerId) return;

    getPlayerState$(playerId).subscribe((currentState) => {
      setCurrentState(currentState);
    })
  }, [playerId]);

  return (
    <div>
      <div>{`Player ${playerId} currentState: ${currentState}`}</div>
    </div>
  );
};


export const MultiplePlayersForPlayerStateUpdate: Story = () => {
  const classes = useStyle();

  const [playerAId, setPlayerAId] = useState('');
  const [playerBId, setPlayerBId] = useState('');

  const onPlayerALoad = (data: {entryId: string, playerId: string}) => {
    setPlayerAId(data.playerId);
  };

  const onPlayerBLoad = (data: {entryId: string, playerId: string}) => {
    setPlayerBId(data.playerId);
  };


  return (
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                             ks:ks,
                             partnerId: partnerId,
                             uiConfId: uiConfId,
                             bundlerUrl: bunderlUrl
                           }}>
      <>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onPlayerLoaded={onPlayerALoad}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <PlayerStateUpdateLabels playerId={playerAId}/>
        <br/>
        <div className={classes.playerContainer}>
          <KalturaPlayer entryId={entryId}
                         autoplay={false}
                         onPlayerLoaded={onPlayerBLoad}
                         onMediaLoaded={(entryId) => console.log(entryId)}/>
        </div>
        <PlayerStateUpdateLabels playerId={playerBId}/>
      </>
    </KalturaPlayerProvider>
  )
};

MultiplePlayersForPlayerStateUpdate.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player multiple instances for testing players state update`
    }
  }
};


const workshopEntry = '1_qk8sqm6v';
const workshopKs = 'Yzk0NzE1MjZmZDMyZmI0NzFiZThjODQ1YjM3NmY0YjhiOGU4OGZmMHwxODI3NTUxOzE4Mjc1NTE7MTYxNzAyMTk4NTswOzE1ODcwMjE5ODUuOTkyMjtzaGFpLmFpbnZvbmVyQGthbHR1cmEuY29tO3N2aWV3OjFfcWs4c3FtNnYsdmlldzoxX3FrOHNxbTZ2LGxpc3Q6Kjs7';

export const KalturaPlayerWorkshopForTesting: Story = () => {
  const classes = useStyle();

  return (
    <KalturaPlayerProvider autoLoad={true}
                           config={{
                             ks:workshopKs,
                             partnerId: partnerId,
                             uiConfId: uiConfId,
                             bundlerUrl: bunderlUrl
                           }}>
      <div className={classes.playerContainer}>
        <KalturaPlayer entryId={workshopEntry}
                       autoplay={false}
                       onMediaLoaded={(entryId) => console.log(entryId)}/>
      </div>
    </KalturaPlayerProvider>
  )
};

KalturaPlayerWorkshopForTesting.story = {
  parameters: {
    docs: {
      storyDescription: `Kaltura Player workshop for testing`
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
