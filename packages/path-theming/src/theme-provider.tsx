import * as React from 'react'
import {createTheming} from 'react-jss'
import { theme } from './theme';

const ThemeContext = React.createContext(theme);

const theming = createTheming(ThemeContext);

const {ThemeProvider, useTheme} = theming;

export { ThemeProvider, useTheme, theming};
