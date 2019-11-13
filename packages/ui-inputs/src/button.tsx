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

/*
const useStyles = createUseStyles({
    btn: {
        '&:active': (props: any) => props.isCTA? {} : {}
    },
    'btn-default': {
        '&:active': {}
    },
    'btn-cta': {
        '&:active': {}
    },
    'btn-active': {
    },
    'btn-borderless': {
        '&:active': {}
    }
});
*/
const useStyles = createUseStyles({
    'btn': (props: ButtonProps & {theme: any}) => ({
        color:  props.isCTA ? '#ffffff' : '#434a4b',
        backgroundColor:  props.isCTA ? (props.isActive ? '#004e5a' : '#008297') : (props.isActive ? props.theme.colors.greyscale5 : '#ffffff'),
        boxShadow: 'none',
        fontFamily:  props.theme.button.fontFamily,
        fontSize:  props.theme.button.fontSize,
        fontWeight:  props.theme.button.fontWeight,
        border:  props.borderless || props.isCTA ? 'none' : `1px solid ${props.theme.colors.greyscale4}`,
        borderRadius:  props.theme.button.borderRadius,
        '--antd-wave-shadow-color': '#ffffff',
        '&:hover': {
            boxShadow: 'none',
            color:  props.isCTA ? '#ffffff' : '#434a4b',
            backgroundColor:  props.isCTA ? (props.isActive ? '#004e5a' : '#006879') : (props.isActive ? props.theme.colors.greyscale5 : props.theme.colors.greyscale4),
            border:  props.borderless || props.isCTA ? 'none' : `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:focus': {
            backgroundColor:  props.isCTA ? (props.isActive ? '#004e5a' : '#008297') : (props.isActive ? props.theme.colors.greyscale5 : '#ffffff'),
            border:  props.borderless || props.isCTA ? 'none' : `1px solid ${props.theme.colors.greyscale4}`,
            color:  props.isCTA ? '#ffffff' : '#434a4b',
        },
        '&:active': {
            boxShadow: 'none',
            color:  props.isCTA ? '#ffffff' : '#434a4b',
            backgroundColor:  props.isCTA ? '#004e5a' : props.theme.colors.greyscale5,
            border:  props.borderless || props.isCTA ? 'none' : `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border:  props.borderless ? 'none' : `1px solid ${props.theme.colors.greyscale4}`,
            color:  props.theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff'
        }
    })
});

export function Button(props: ButtonProps) {
    const theme = useTheme();
    const classes = useStyles({...props, theme});
    const {label, disabled, onClick} = props;
    return (
        <AntButton className={classes.btn} disabled={disabled} onClick={onClick}>{label}</AntButton>
    )
}



