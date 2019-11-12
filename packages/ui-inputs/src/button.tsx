import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss'
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
        color: '#ffffff',
        backgroundColor: '#008297',
        fontFamily: (themeWithProps: any) => themeWithProps.button.fontFamily,
        fontSize: (themeWithProps: any) => themeWithProps.button.fontSize,
        fontWeight: (themeWithProps: any) => themeWithProps.button.fontWeight,
        border: (themeWithProps: any) => themeWithProps.borderless ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        borderRadius: (themeWithProps: any) => themeWithProps.button.borderRadius,
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#006879',
            border: (themeWithProps: any) => themeWithProps.borderless ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        },
        '&:active': {
            color: '#ffffff',
            backgroundColor: '#004e5a',
            border: (themeWithProps: any) => themeWithProps.borderless ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        },
        '&:focus': {
            backgroundColor: '#004e5a',
            color: '#ffffff',
            border: (themeWithProps: any) => themeWithProps.borderless ? 'none' : `1px solid ${themeWithProps.colors.greyscale4}`,
        },
        '&:disabled': {
            backgroundColor: '#ffffff',
            color: (themeWithProps: any) => themeWithProps.colors.greyscale4
        },
        '&:disabled:hover': {
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



