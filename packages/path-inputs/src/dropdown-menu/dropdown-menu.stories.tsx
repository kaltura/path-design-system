import * as React from 'react';
import { ReactText, useState } from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { withThemeProvider } from '../../storybook/with-theme-provider';
import { DropdownMenu } from './dropdown-menu';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';
import { action } from '@storybook/addon-actions';
import {
  Gear24Icon,
  Plus24Icon,
  Redo24Icon,
  Upload24Icon
} from '@kaltura-react-ui-kits/path-icons';
import { DropdownMenuType } from './dropdown-menu-types';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  container: {
    width: '250px',
    padding: '10px'
  },
  smallContainer: {
    width: '50px',
    padding: '10px'
  },
  customOption: {
    backgroundColor: 'aqua'
  },
  customOptionIcon: {
    color: 'red'
  },
  customOptionLabel: {
    textDecoration: 'line-through'
  }
});

export const Default: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    }
  ];

  return (
    <div className={classes.container}>
      <DropdownMenu value={'1'} options={options}/>
    </div>
  );
};


export const Dimensions: Story = () => {
  const classes = useStyles();
  const options = Array.from({ length: 50 }, (_, i) => ({
    value: i,
    label: `Option ${i}`,
  }));

  return (
    <div className={classes.wrapper}>
      <div className={classes.column}>
        <p>Max length of the dropdown container is <code>320px</code></p>
        <div className={classes.container}>
          <DropdownMenu value={0} options={options}/>
        </div>
      </div>

      <div className={classes.column}>
        <p>Min width of the dropdown is <code>80px</code></p>
        <div className={classes.smallContainer}>
          <DropdownMenu value={0} options={options}/>
        </div>
      </div>
    </div>
  );
};

Dimensions.story = {
  parameters: {
    docs: {
      storyDescription: `In order to style each option separately <code>optionClass</code>, <code>optionLabelClass</code> and <code>optionIconClass</code> properties can be provided for option object in the options array.`,
    }
  }
};

export const Placeholder: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    }
  ];

  return (
    <div className={classes.container}>
      <DropdownMenu placeholder='Menu placeholder goes here' options={options}/>
    </div>
  );
};

Placeholder.story = {
  parameters: {
    docs: {
      storyDescription: `If the current value is not defined the placeholder will be displayed instead of selected option. The default placeholder is 'Select item...'. The value can be modified by <code>placeholder</code> property.`,
    }
  }
};

export const Disabled: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    }
  ];

  return (
    <div className={classes.container}>
      <DropdownMenu disabled={true} options={options}/>
    </div>
  );
};

Disabled.story = {
  parameters: {
    docs: {
      storyDescription: `To prevent user from interacting with the dropdown <code>disabled</code> property can be set to <code>true</code>.`,
    }
  }
};

export const DisabledOption: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
      disabled: true,
    },
    {
      value: '4',
      label: 'Option 4',
    },
  ];

  return (
    <div className={classes.container}>
      <DropdownMenu value='1' options={options}/>
    </div>
  );
};

DisabledOption.story = {
  parameters: {
    docs: {
      storyDescription: `To prevent user from selecting specific option set its <code>disabled</code> property in options array.`,
    }
  }
};

export const Controlled: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState<ReactText>('1');
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    }
  ];

  const handleChange = (val: ReactText) => {
    setValue(val);
    action('onChange')(val);
  };

  return (
    <div className={classes.container}>
      <DropdownMenu value={value} options={options} onChange={handleChange}/>
    </div>
  );
};

Controlled.story = {
  parameters: {
    docs: {
      storyDescription: `The component can be controlled. Use <code>value</code> and <code>onChange</code> properties to provide ability control dropdown's value change.`,
    }
  }
};

export const Actions: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    }
  ];

  const handleSelect = (val: ReactText) => {
    action('onSelect')(val);
  };

  return (
    <div className={classes.container}>
      <DropdownMenu type={DropdownMenuType.Action} options={options}
                    onSelect={handleSelect}/>
    </div>
  );
};

Actions.story = {
  parameters: {
    docs: {
      storyDescription: `Dropdown component can be used to invoke actions. Use <code>onSelect</code> event to listen to the selected option. Additionally, <code>type</code> property can be set to <code>DropdownMenuType.Action</code> that will change dropdown appearance to resemble actions menu`,
    }
  }
};

export const OptionsIcons: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'Option 1',
      icon: <Redo24Icon/>
    },
    {
      value: '2',
      label: 'Option 2',
      icon: <Gear24Icon/>
    },
    {
      value: '3',
      label: 'Option 3',
      disabled: true,
      icon: <Upload24Icon/>
    },
    {
      value: '4',
      label: 'Option 4',
      icon: <Plus24Icon/>
    },
  ];

  return (
    <div className={classes.container}>
      <DropdownMenu value='1' options={options}/>
    </div>
  );
};

OptionsIcons.story = {
  parameters: {
    docs: {
      storyDescription: `Each option can have icon component displayed next to its label. Provide <code>icon</code> as the property of an option in the options array.`,
    }
  }
};

export const Divider: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      divider: true,
    },
    {
      value: '3',
      label: 'Option 3',
      disabled: true,
    },
    {
      divider: true,
    },
    {
      value: '4',
      label: 'Option 4',
    },
  ];

  return (
    <div className={classes.container}>
      <DropdownMenu value='1' options={options}/>
    </div>
  );
};

Divider.story = {
  parameters: {
    docs: {
      storyDescription: `In order to divide options divider option can be provided. In the options array provide <code>{ divider: true }</code> option in the needed place. The divider will appear as the line separating options in the dropdown.`,
    }
  }
};

export const OptionsCustomStyles: Story = () => {
  const classes = useStyles();
  const options = [
    {
      value: '1',
      label: 'optionClass',
      icon: <Redo24Icon/>,
      optionClass: classes.customOption
    },
    {
      value: '2',
      label: 'optionLabelClass',
      icon: <Gear24Icon/>,
      optionLabelClass: classes.customOptionLabel
    },
    {
      value: '3',
      label: 'optionIconClass',
      icon: <Plus24Icon/>,
      optionIconClass: classes.customOptionIcon
    },
  ];

  return (
    <div className={classes.container}>
      <DropdownMenu type={DropdownMenuType.Action} options={options}/>
    </div>
  );
};

OptionsCustomStyles.story = {
  parameters: {
    docs: {
      storyDescription: `In order to style each option separately <code>optionClass</code>, <code>optionLabelClass</code> and <code>optionIconClass</code> properties can be provided for option object in the options array.`,
    }
  }
};

export const Workshop: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState<ReactText>('');
  const options = [
    {
      value: '1',
      label: 'Option 1',
      icon: <Redo24Icon/>
    },
    {
      value: '2',
      label: 'Option 2',
      icon: <Gear24Icon/>
    },
    {
      value: '3',
      label: 'Option 3',
      disabled: true,
      icon: <Upload24Icon/>
    },
    {
      divider: true,
    },
    {
      value: '4',
      label: 'Option 4',
      icon: <Plus24Icon/>
    },
  ];

  const types = [DropdownMenuType.Labeled, DropdownMenuType.Action];

  const handleChange = (e: ReactText) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <DropdownMenu value={value}
                    type={select('Type', types, DropdownMenuType.Labeled)}
                    disabled={boolean('Disabled', false)}
                    placeholder={text('Placeholder', 'Enter placeholder')}
                    options={options}
                    onChange={handleChange}
                    onSelect={action('onSelect')}/>
    </div>
  );
};

Workshop.story = {
  parameters: {
    docs: {
      disable: true,
      storyDescription: `An example that includes all the features to be able to test them together.
            It is here for internal use only and will be removed from the documentation soon.`,
    }
  }
};
export default {
  title: 'Inputs/Dropdown Menu',
  component: DropdownMenu,
  decorators: [
    withKnobs,
    withThemeProvider,
  ],
  parameters: {
    componentSubtitle: 'To chose item from a list',
  },
};
