import * as React from 'react'
import {createTheming} from 'react-jss'
import { getPathTheme } from './get-path-theme';

const ThemeContext = React.createContext(getPathTheme());

const theming = createTheming(ThemeContext);

const {ThemeProvider, useTheme} = theming;

export { ThemeProvider, useTheme, theming};
