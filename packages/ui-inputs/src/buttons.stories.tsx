import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';
import { ThemeProvider } from 'react-jss';
import { theme } from '../../theme/theme';
import './styles.css';

export default {
  title: 'Button',
};

export const DefaultButton = () =>
    <ThemeProvider theme={theme}>
        <div className="stories">
            <div className="row">
              <span className="label">Default:</span>
              <Button label={'Label'} onClick={action('clicked')}></Button>
              <span className="label spacer">Disabled:</span>
              <Button disabled={true} label={'Label'} onClick={action('clicked')}></Button>
              <span className="label spacer">Proccessing:</span>
              <Button isProcessing={true} borderless={true} label={'Label'} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

  DefaultButton.story = {
    title: 'Default Button'
  }
