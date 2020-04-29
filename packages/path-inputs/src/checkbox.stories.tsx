import * as React from 'react';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {withThemeProvider} from '../storybook/with-theme-provider';
import '../../../.storybook/obslete-styles.css';
import {Checkbox} from './checkbox';

export const Default: Story = () => {
  const [value, setValue] = useState(false);
  const [partial, setPartial] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.checked);
    setPartial(false);
    action('onChange')(event.target.checked);
  };

  return (
    <div className="row">
      <div className="col">
        <Checkbox label="Checkbox" />
      </div>
      <div className="col">
        <Checkbox
          label="Checkbox"
          partial={partial}
          checked={value}
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <Checkbox label="Checkbox" partial={true} disabled={true} />
      </div>
      <div className="col">
        <Checkbox label="Checkbox" disabled={true} />
      </div>
      <div className="col">
        <Checkbox label="Checkbox" defaultChecked={true} disabled={true} />
      </div>
    </div>
  );
};

export const Change: Story = () => {
  const [value, setValue] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.checked);
    action('onChange')(event.target.checked);
  };

  return <Checkbox label="Checkbox" checked={value} onChange={handleChange} />;
};

Change.story = {
  parameters: {
    docs: {
      storyDescription: `Checkbox could be controlled component. To make it work <code>checked</code> and <code>onChange</code> properties must be provided.`,
    },
  },
};

export const Disabled: Story = () => {
  return (
    <div className="row">
      <div className="col">
        <Checkbox label="Checkbox" checked={true} disabled={true} />
      </div>
      <div className="col">
        <Checkbox label="Checkbox" partial={true} disabled={true} />
      </div>
      <div className="col">
        <Checkbox label="Checkbox" defaultChecked={true} disabled={true} />
      </div>
    </div>
  );
};

Disabled.story = {
  parameters: {
    docs: {
      storyDescription: `Checkbox could be disabled with provided <code>disabled</code> prop.`,
    },
  },
};

export const DefaultChecked: Story = () => {
  return (
    <div className="row">
      <div className="col">
        <Checkbox label="Checkbox" defaultChecked={true} />
      </div>
      <div className="col">
        <Checkbox label="Checkbox" defaultChecked={true} disabled={true} />
      </div>
    </div>
  );
};

DefaultChecked.story = {
  parameters: {
    docs: {
      storyDescription: `Checkbox could have <code>defaultChecked</code> value.`,
    },
  },
};

export const PartialChecked: Story = () => {
  const [value, setValue] = useState(false);
  const [partial, setPartial] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.checked);
    setPartial(false);
    action('onChange')(event.target.checked);
  };

  return (
    <div className="row">
      <div className="col">
        <Checkbox
          label="Checkbox"
          partial={partial}
          checked={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

PartialChecked.story = {
  parameters: {
    docs: {
      storyDescription: `Checkbox has <code>partial</code> prop to display relevant state.
However controlled component has to be used with <code>checked</code> and <code>onChange</code> properties`,
    },
  },
};

export const Workshop: Story = () => {
  return (
    <div>
      <div className="col">
        <Checkbox
          label="Checkbox"
          checked={boolean('Checked', false)}
          onChange={action('clicked')}
          disabled={boolean('Disabled', false)}
        />
      </div>
      <div className="col">
        <Checkbox
          label="Checkbox with partial"
          partial={boolean('Partial', false)}
          disabled={boolean('Disabled', false)}
          checked={boolean('Checked', false)}
          onChange={action('clicked')}
        />
      </div>
      <div className="col">
        <Checkbox
          label="Checkbox with default checked"
          disabled={boolean('Disabled', false)}
          checked={boolean('Checked', false)}
          defaultChecked={boolean('Default Checked', false)}
          onChange={action('clicked')}
        />
      </div>
    </div>
  );
};

Workshop.story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  decorators: [withKnobs, withThemeProvider],
  parameters: {
    componentSubtitle: `Checkboxes are allowing users to toggle between two states.
    In most cases, they are use to select/deselect multiple items or enable/disable an option.`,
  },
};
