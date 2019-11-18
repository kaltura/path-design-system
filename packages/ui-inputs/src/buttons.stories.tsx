import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';
import { Plus24Icon, SpinnerBright24Icon } from '@kaltura-path/ui-icons';

export default {
  title: 'Button',
};

export const DefaultButton = () => <Button label={'Hi Amir!'} onClick={action('clicked')}></Button>;
  DefaultButton.story = {
    title: 'Default Button'
  }

export const IconA = () => <Plus24Icon />;
IconA.story = {
  title: 'Icon A'
}


export const IconB = () => <SpinnerBright24Icon spin />;
IconA.story = {
  title: 'Icon A'
}
