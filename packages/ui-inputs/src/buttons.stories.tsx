import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from './button';
import {ThemeProvider} from 'react-jss';
import {theme} from '../../theme/theme';
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
                <div className="spacer"></div>
                <Button label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Disabled:</span>
                <Button disabled={true} label={'Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button disabled={true} label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button disabled={true} label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Proccessing:</span>
                <Button isProcessing={true} label={'Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isProcessing={true} label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isProcessing={true} label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

DefaultButton.story = {
    title: 'Default Button'
}

export const CTAButton = () =>
    <ThemeProvider theme={theme}>
        <div className="stories">
            <div className="row">
                <span className="label">Default:</span>
                <Button isCTA={true} label={'Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Disabled:</span>
                <Button isCTA={true} disabled={true} label={'Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} disabled={true} label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} disabled={true} label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Proccessing:</span>
                <Button isCTA={true} isProcessing={true} label={'Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} isProcessing={true} label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} isProcessing={true} label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

CTAButton.story = {
    title: 'CTA Button'
}

export const BorderlessButton = () =>
    <ThemeProvider theme={theme}>
        <div className="stories">
            <div className="row">
                <span className="label">Default:</span>
                <Button borderless={true} label={'Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Disabled:</span>
                <Button borderless={true} disabled={true} label={'Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} disabled={true} label={'Icon + Label'} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} disabled={true} label={'Icon Only'} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

BorderlessButton.story = {
    title: 'Borderless Button'
}
