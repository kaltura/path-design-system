import * as React from 'react';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { Slider } from './slider';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ZoomIn24Icon, ZoomOut24Icon } from '@kaltura-react-ui-kits/path-icons';

const useStyles = createUseStyles({
  container: {
    padding: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  slider: {
    width: '200px',
  },
  value: {
    marginLeft: '20px'
  }
});

export const Default: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(10);

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider className={classes.slider} value={value} onChange={handleChange}/>
    </div>
  );
};

export const Disabled: Story = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Slider className={classes.slider} disabled={true} value={40}/>
    </div>
  );
};

Disabled.story = {
  parameters: {
    docs: {
      storyDescription: `In order to disable the slider <code>disabled</code> property must be set to <code>true</code>.`,
    }
  }
};

export const Change: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(10);

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider className={classes.slider} value={value} onChange={handleChange}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

Change.story = {
  parameters: {
    docs: {
      storyDescription: `Slider is controlled component to make it work <code>value</code> and <code>onChange</code> properties might be provided.`,
    }
  }
};

export const AfterChange: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(10);

  const handleChange = (e: number) => {
    setValue(e);
    action('onAfterChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider className={classes.slider} defaultValue={value} onAfterChange={handleChange}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

AfterChange.story = {
  parameters: {
    docs: {
      storyDescription: `If triggering change on each user drag is not necessary <code>defaultValue</code> and <code>onAfterChange</code> properties can be provided. The change will happen only after user releases drag handle.`,
    }
  }
};

export const Step: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(10);

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider className={classes.slider} step={20} value={value} onChange={handleChange}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

Step.story = {
  parameters: {
    docs: {
      storyDescription: `To control stepping of the slider <code>step</code> property can be provided.`,
    }
  }
};

export const MixMax: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider min={1}
              max={5}
              value={value}
              className={classes.slider}
              onChange={handleChange}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

MixMax.story = {
  parameters: {
    docs: {
      storyDescription: `To control boundaries of the value <code>mix</code> and <code>max</code> properties can be used.`,
    }
  }
};

export const TooltipFormatter: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const tooltipFormatter = (sliderValue: number) => {
    return `${sliderValue}%`;
  };

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider tooltipFormatter={tooltipFormatter}
              className={classes.slider}
              value={value}
              onChange={handleChange}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

TooltipFormatter.story = {
  parameters: {
    docs: {
      storyDescription: `To control the handle's tooltip formatting <code>tooltipFormatter</code> property can be used.`,
    }
  }
};

export const NoTooltip: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider showTooltip={false} className={classes.slider} value={value} onChange={handleChange}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

NoTooltip.story = {
  parameters: {
    docs: {
      storyDescription: `In order to turn off tooltip display set <code>showTooltip</code> property to <code>false</code>.`,
    }
  }
};

export const AdditionalContent: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const tooltipFormatter = (sliderValue: number) => {
    return `${sliderValue * 25}%`;
  };

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider value={value}
              onChange={handleChange}
              min={0}
              max={4}
              className={classes.slider}
              affixContent={<ZoomOut24Icon style={{color: '#888888'}}/>}
              postfixContent={<ZoomIn24Icon style={{color: '#888888'}}/>}
              tooltipFormatter={tooltipFormatter}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

AdditionalContent.story = {
  parameters: {
    docs: {
      storyDescription: `To provide additional content (text, icons, etc) <code>affixContent</code> and <code>postfixContent</code> properties can be used.`,
    }
  }
};

export const Workshop: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider value={value}
              className={classes.slider}
              onChange={handleChange}
              disabled={boolean('Disabled', false)}
              showTooltip={boolean('Show Tooltip', true)}
              min={number('Min', 0)}
              max={number('Max', 100)}
              affixContent={<div>{text('Affix', 'Left')}</div>}
              postfixContent={<div>{text('Postfix', 'Right')}</div>}
              tooltipFormatter={(v => `${text('Tooltip formatter', 'Value:')} ${v}`)}/>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

Workshop.story = {
  parameters: {
    docs: {
      disable: true,
      storyDescription: `An example that includes all the features to be able to test them together. It is here for internal use only and will be removed from the documentation soon.`,
    }
  }
};

export default {
  title: 'Inputs/Slider',
  decorators: [
    withThemeProvider,
    withKnobs,
  ],
  component: Slider,
  parameters: {
    componentSubtitle: `To select a value from range with provided step`,
  },
};
