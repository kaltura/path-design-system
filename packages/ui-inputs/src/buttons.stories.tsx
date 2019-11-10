import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

export default {
  title: 'Button',
};

export const DefaultButton = () => <Button label={'Hi Amir!'} onClick={action('clicked')}></Button>;
  DefaultButton.story = {
    title: 'Default Button'
  }
