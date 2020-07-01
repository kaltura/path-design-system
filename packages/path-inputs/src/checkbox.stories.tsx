import * as React from 'react';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {withThemeProvider} from '../storybook/with-theme-provider';
import '../../../.storybook/obslete-styles.css';
import {Checkbox} from './checkbox';
import { Button } from './button';

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
          label="Partial"
          partial={partial}
          checked={value}
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <Checkbox label="Disabled and Partial" partial={true} disabled={true} />
      </div>
      <div className="col">
        <Checkbox label="Disabled" disabled={true} />
      </div>
    </div>
  );
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

export const PartialChecked: Story = () => {
  const [value, setValue] = useState(false);
  const [partial, setPartial] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.checked);
    setPartial(false);
    action('onChange')(event.target.checked);
  };

  const handlePartial = (): void => {
    setPartial(true);
    action('set partial state');
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
      <div className="col">
        <Button label="Set Partial" onClick={handlePartial} />
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
  const [value, setValue] = useState(false);
  const [partialCheckboxValue, setPartialCheckboxValue] = useState(false);
  const [partial, setPartial] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.checked);
    action('onChange')(event.target.checked);
  };

  const handlePartialCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPartialCheckboxValue(event.target.checked);
    setPartial(false);
    action('onChange')(event.target.checked);
  };

  const handlePartial = (): void => {
    setPartial(true);
    action('set partial state');
  };

  return (
    <div>
      <div className="col">
        <Checkbox
          label="Checkbox"
          checked={value}
          onChange={handleChange}
          disabled={boolean('Disabled', false)}
        />
      </div>
      <div className="col">
        <Checkbox
          label="Checkbox with partial"
          partial={partial}
          checked={partialCheckboxValue}
          disabled={boolean('Disabled', false)}
          onChange={handlePartialCheckboxChange}
        />
      </div>
      <div className="col">
        <Button label="Set Partial" onClick={handlePartial} />
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
    In most cases, they are use to select/deselect multiple items or enable/disable an option. Also it's possible to use master-checkbox with partial state to show intermediate value.`,
  },
};
