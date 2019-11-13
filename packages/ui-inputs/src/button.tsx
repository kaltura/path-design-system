import * as React from 'react';
import {useTheme, createUseStyles} from './theme';

import {Button as AntButton} from 'antd';

export interface ButtonProps {
    label?: string;
    icon?: any;
    disabled?: boolean;
    borderless?: boolean;
    isActive?: boolean;
    onClick?: () => void;
    isProcessing?: boolean;
    isCTA?: boolean;
}

// const getUseStyles = (props: any) => createUseStyles<string>((theme: any) => ({
//     btn: {
//         color: theme.colorPrimary,
//         border: props.borderless ? 'none' : '1px solid red'
//     },
//     label: {
//         fontWeight: 'bold'
//     }
// }));

const useStyles = createUseStyles({
    'btn': {
        color: (themeWithProps: any) => themeWithProps.isCTA ? '#ffffff' : '#434a4b',
        backgroundColor: (themeWithProps: any) => themeWithProps.isCTA ? (themeWithProps.isActive ? '#004e5a' : '#008297') : (themeWithProps.isActive ? themeWithProps.colors.greyscale5 : '#ffffff'),
        boxShadow: 'none',
        fontFamily: (themeWithProps: any) => themeWithProps.button.fontFamily,
        fontSize: (themeWithProps: any) => themeWithProps.button.fontSize,
        fontWeight: (themeWithProps: any) => themeWithProps.button.fontWeight,
        border: (themeWithProps: any) => themeWithProps.borderless || themeWithProps.isCTA ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        borderRadius: (themeWithProps: any) => themeWithProps.button.borderRadius,
        '--antd-wave-shadow-color': '#ffffff',
        '&:hover': {
            boxShadow: 'none',
            color: (themeWithProps: any) => themeWithProps.isCTA ? '#ffffff' : '#434a4b',
            backgroundColor: (themeWithProps: any) => themeWithProps.isCTA ? (themeWithProps.isActive ? '#004e5a' : '#006879') : (themeWithProps.isActive ? themeWithProps.colors.greyscale5 : themeWithProps.colors.greyscale4),
            border: (themeWithProps: any) => themeWithProps.borderless || themeWithProps.isCTA ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        },
        '&:active': {
            boxShadow: 'none',
            color: (themeWithProps: any) => themeWithProps.isCTA ? '#ffffff' : '#434a4b',
            backgroundColor: (themeWithProps: any) => themeWithProps.isCTA ? '#004e5a' : themeWithProps.colors.greyscale5,
            border: (themeWithProps: any) => themeWithProps.borderless || themeWithProps.isCTA ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        },
        '&:focus': {
            boxShadow: 'none',
            backgroundColor: (themeWithProps: any) => themeWithProps.isCTA ? '#004e5a' : themeWithProps.colors.greyscale5,
            color: (themeWithProps: any) => themeWithProps.isCTA ? '#ffffff' : '#434a4b',
            border: (themeWithProps: any) => themeWithProps.borderless || themeWithProps.isCTA ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: (themeWithProps: any) => themeWithProps.borderless ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
            color: (themeWithProps: any) => themeWithProps.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff'
        }
    }
});

export function Button(props: ButtonProps) {
    const theme = useTheme();
    // const classes = getUseStyles(props)(theme);
    const classes = useStyles({...props, ...theme});
    const {label, disabled, onClick} = props;
    return (
        <AntButton className={classes.btn} disabled={disabled} onClick={onClick}>{label}</AntButton>
    )
}



