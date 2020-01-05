import { Theme } from './theme.type';

export const getPathTheme = () : Theme => ({
    colors: {
        grayscale1: '#333333',
        grayscale2: '#888888',
        grayscale3: '#999999',
        grayscale4: '#cccccc',
        grayscale5: '#d9d9d9',
        grayscale6: '#ebebeb',
        grayscale7: '#f2f2f2',
        grayscale8: '#f4f4f4',
        success: '#29BE86',
        danger: '#FF5F65',
        acknowledgement: '#01ACCD',
        red: '#DB1F26',
        orange: '#F9A71B',
        yellow: '#fdd304',
        lime: '#b2d238',
        green: '#009444',
        deepcyan: '#00a784',
        cyan: '#01accd',
        royalblue: '#1c4b98',
        white: '#FFFFFF',
    },
    button: {
        borderRadius: '4px',
        fontFamily: 'Lato, Arial, Helvetica',
        fontWeight: 'bold',
        fontSize: '24px'
    },
    input: {
        borderRadius: '4px',
        fontFamily: 'Lato, Arial, Helvetica',
        fontWeight: 'normal',
        fontSize: '14px',
    },
    hint: {
        fontFamily: 'Lato, Arial, Helvetica',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '18px',
    }
});
