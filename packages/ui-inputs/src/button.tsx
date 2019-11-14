import * as React from 'react';
import {useTheme, createUseStyles} from './theme';
import {Button as AntButton} from 'antd';

const classNames = require('classnames');

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

const useStyles = createUseStyles({
    'btn': (props: ButtonProps & { theme: any }) => ({
        height: '32px',
        boxShadow: 'none',
        fontFamily: props.theme.button.fontFamily,
        fontSize: props.theme.button.fontSize,
        fontWeight: props.theme.button.fontWeight,
        borderRadius: props.theme.button.borderRadius,
        '--antd-wave-shadow-color': 'transparent',
    }),
    'btnDefault': (props: ButtonProps & { theme: any }) => ({
        '&:hover': {
            boxShadow: 'none',
            color: '#434a4b',
            backgroundColor: props.theme.colors.greyscale4,
            border: `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:focus': {
            backgroundColor: '#ffffff',
            border: `1px solid ${props.theme.colors.greyscale4}`,
            color: '#434a4b',
        },
        '&:active': {
            boxShadow: 'none',
            color: '#434a4b',
            backgroundColor: props.theme.colors.greyscale5,
            border: `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: `1px solid ${props.theme.colors.greyscale4}`,
            color: props.theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff'
        }
    }),
    'btnCTA': (props: ButtonProps & { theme: any }) => ({
        boxShadow: 'none',
        color: '#ffffff',
        backgroundColor: '#008297',
        border: '1px solid #008297',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#006879',
            border: '1px solid #006879',
        },
        '&:focus': {
            backgroundColor: '#008297',
            border: '1px solid #004e5a',
            color: '#ffffff',
        },
        '&:active': {
            color: '#ffffff',
            backgroundColor: '#004e5a',
            border: '1px solid #004e5a',
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: `1px solid ${props.theme.colors.greyscale4}`,
            color: props.theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff'
        }
    }),
    'btnBorderless': (props: ButtonProps & { theme: any }) => ({
        color: '#434a4b',
        backgroundColor: '#ffffff',
        border: '1px solid #ffffff',
        boxShadow: 'none',
        '&:hover': {
            color: '#434a4b',
            backgroundColor: props.theme.colors.greyscale4,
            border: `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:focus': {
            color: '#434a4b',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
        },
        '&:active': {
            color: '#434a4b',
            backgroundColor: props.theme.colors.greyscale5,
            border: `1px solid ${props.theme.colors.greyscale5}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
            color: props.theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
        }
    }),
    'btnActive': (props: ButtonProps & { theme: any }) => ({
        color: '#434a4b',
        backgroundColor: props.theme.colors.greyscale5,
        border: `1px solid ${props.theme.colors.greyscale5}`,
        '&:hover': {
            color: '#434a4b',
            backgroundColor: props.theme.colors.greyscale5,
            border: `1px solid ${props.theme.colors.greyscale5}`,
        },
        '&:focus': {
            color: '#434a4b',
            backgroundColor: props.theme.colors.greyscale5,
            border: `1px solid ${props.theme.colors.greyscale5}`,
        },
    }),
    'btnCTAActive': {
        color: '#ffffff',
        backgroundColor: '#004e5a',
        border: '1px solid #004e5a',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#004e5a',
            border: '1px solid #004e5a',
        },
        '&:focus': {
            color: '#ffffff',
            backgroundColor: '#004e5a',
            border: '1px solid #004e5a',
        },
    },
});

export function Button(props: ButtonProps) {
    const theme = useTheme();
    const classes: any = useStyles({...props, theme});
    const {label, disabled, onClick} = props;
    
    var btnClass = classNames({
        [classes.btn]: true,
        [classes.btnDefault]: !props.isCTA && !props.borderless && !props.isActive,
        [classes.btnCTA]: props.isCTA && !props.isActive,
        [classes.btnBorderless]: props.borderless && !props.isActive,
        [classes.btnActive]: props.isActive && !props.isCTA,
        [classes.btnCTAActive]: props.isActive && props.isCTA,
    });
    return (
        <AntButton className={btnClass} disabled={disabled} onClick={onClick}>{label}</AntButton>
    )
}



