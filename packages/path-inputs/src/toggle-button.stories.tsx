import * as React from 'react';
import {useState} from 'react';
import {withThemeProvider} from '../storybook/with-theme-provider';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import {ToggleButton} from './toggle-button';
import {Plus24Icon, Target24Icon} from '@kaltura-react-ui-kits/path-icons';

const typeLabel = 'Type';
const typeOptions = {
  default: 'default',
  borderLess: 'borderless',
};
const typeDefaultValue = 'default';

const layoutLabel = 'Layout';
const layoutOptions = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

export const Default: Story = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div className="row">
      <div className="col">
        <ToggleButton
          label={text('Label', 'Label')}
          type={
            select(typeLabel, typeOptions, typeDefaultValue) as
              | 'default'
              | 'borderless'
          }
          isActive={active1}
          onChange={setActive1}
        />
      </div>
      <div className="col">
        <ToggleButton
          icon={<Plus24Icon />}
          type={
            select(typeLabel, typeOptions, typeDefaultValue) as
              | 'default'
              | 'borderless'
          }
          isActive={active2}
          onChange={setActive2}
        />
      </div>
    </div>
  );
};

export const ToggleButtonWithIcon: Story = () => {
  return (
    <div className="row">
      <div className="col">
        <ToggleButton icon={<Target24Icon />} />
      </div>
      <div className="col">
        <ToggleButton icon={<Target24Icon />} type="borderless" />
      </div>
    </div>
  );
};

ToggleButtonWithIcon.story = {
  parameters: {
    docs: {
      storyDescription:
        'ToggleButton component can contain an Icon. This is done by setting the <code>icon</code> property. The icon has to be a React element type.',
    },
  },
};

export const ToggleButtonTypes: Story = () => {
  return (
    <div className="row">
      <div className="col">
        <ToggleButton label="Default" />
      </div>
      <div className="col">
        <ToggleButton label="Borderless" type="borderless" />
      </div>
    </div>
  );
};

ToggleButtonTypes.story = {
  parameters: {
    docs: {
      storyDescription: `There're 2 types of toggle buttons: default and borderless. They all have the same behavior, the only difference is how they look on the screen. To change Button type to Borderless you need to set <code>borderless</code> prop to <code>true</code>. To set the default Button style do not set or set <code>borderless</code> props to false.`,
    },
  },
};

export const VerticalLayoutToggleButtonWithIcon: Story = () => {
  return (
    <div className="row">
      <div className="col">
        <ToggleButton
          label="Default"
          icon={<Target24Icon />}
          layout="vertical"
        />
      </div>
      <div className="col">
        <ToggleButton
          label="Borderless"
          icon={<Target24Icon />}
          layout="vertical"
          type="borderless"
        />
      </div>
    </div>
  );
};

VerticalLayoutToggleButtonWithIcon.story = {
  parameters: {
    docs: {
      storyDescription:
        'Toggle Button component has a layout. The button layout can be set using the <code>layout</code> property. There are two types of layouts: horizontal and vertical.',
    },
  },
};

export const ToggleButtonDisabled: Story = () => {
  return (
    <div className="row">
      <div className="col">
        <ToggleButton label="Label" disabled={true} />
      </div>
      <div className="col">
        <ToggleButton label="Label" type="borderless" disabled={true} />
      </div>
    </div>
  );
};

ToggleButtonDisabled.story = {
  parameters: {
    docs: {
      storyDescription:
        'To disable toggle button set <code>disabled</code> prop to <code>true</code>. It will prevent firing of <code>onChange</code> event and change Button style.',
    },
  },
};

export const Workshop: Story = () => {
  return (
    <div className="row">
      <div className="col">
        <ToggleButton
          label={text('Label', 'Label')}
          layout={
            select(layoutLabel, layoutOptions, 'horizontal') as
              | 'horizontal'
              | 'vertical'
          }
          type={
            select(typeLabel, typeOptions, typeDefaultValue) as
              | 'default'
              | 'borderless'
          }
          isActive={boolean('Active', false)}
          disabled={boolean('Disabled', false)}
        />
      </div>
      <div className="col">
        <ToggleButton
          layout={
            select(layoutLabel, layoutOptions, 'horizontal') as
              | 'horizontal'
              | 'vertical'
          }
          icon={<Plus24Icon />}
          type={
            select(typeLabel, typeOptions, typeDefaultValue) as
              | 'default'
              | 'borderless'
          }
          isActive={boolean('Active', false)}
          disabled={boolean('Disabled', false)}
        />
      </div>
      <div className="col">
        <ToggleButton
          label={text('Label', 'Label')}
          layout={
            select(layoutLabel, layoutOptions, 'horizontal') as
              | 'horizontal'
              | 'vertical'
          }
          icon={<Plus24Icon />}
          type={
            select(typeLabel, typeOptions, typeDefaultValue) as
              | 'default'
              | 'borderless'
          }
          isActive={boolean('Active', false)}
          disabled={boolean('Disabled', false)}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
  decorators: [withKnobs, withThemeProvider],
};
