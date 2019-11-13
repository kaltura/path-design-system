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
    'btn': (props: ButtonProps & {theme: any}) => ({
        height: '32px',
        boxShadow: 'none',
        fontFamily:  props.theme.button.fontFamily,
        fontSize:  props.theme.button.fontSize,
        fontWeight:  props.theme.button.fontWeight,
        borderRadius:  props.theme.button.borderRadius,
        '&:hover': {
            boxShadow: 'none',
            color:  '#434a4b',
            backgroundColor:  props.theme.colors.greyscale4,
            border:  `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:focus': {
            backgroundColor: '#ffffff',
            border:  `1px solid ${props.theme.colors.greyscale4}`,
            color:  '#434a4b',
        },
        '&:active': {
            boxShadow: 'none',
            color:  '#434a4b',
            backgroundColor:  props.theme.colors.greyscale5,
            border:  `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border:  `1px solid ${props.theme.colors.greyscale4}`,
            color:  props.theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff'
        }
    }),
    'btnCTA': {
        color:  '#ffffff',
        backgroundColor:  '#008297',
        border:  '1px solid #008297',
        '&:hover': {
            color:  '#ffffff',
            backgroundColor:  '#006879',
            border:  '1px solid #006879',
        },
        '&:focus': {
            backgroundColor:  '#008297',
            border:  '1px solid #004e5a',
            color:  '#ffffff',
        },
        '&:active': {
            color:  '#ffffff',
            backgroundColor: '#004e5a',
            border:  '1px solid #004e5a',
        },
    },
    'btnBorderless': (props: ButtonProps & {theme: any}) => ({
        color:  '#434a4b',
        backgroundColor:  '#ffffff',
        border:  '1px solid #ffffff',
        '&:hover': {
            color:  '#434a4b',
            backgroundColor:  props.theme.colors.greyscale4,
            border:  `1px solid ${props.theme.colors.greyscale4}`,
        },
        '&:focus': {
            color:  '#434a4b',
            backgroundColor:  '#ffffff',
            border:  '1px solid #ffffff',
        },
        '&:active': {
            color:  '#434a4b',
            backgroundColor:  props.theme.colors.greyscale5,
            border:  `1px solid ${props.theme.colors.greyscale5}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border:  '1px solid #ffffff',
            color:  props.theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border:  '1px solid #ffffff',
        }
    }),
    'btnActive': (props: ButtonProps & {theme: any}) => ({
        color:  '#434a4b !important',
        backgroundColor:  `${props.theme.colors.greyscale5} !important`,
        border:  `1px solid ${props.theme.colors.greyscale5} !important`,
    }),
    'btnCTAActive': {
        color:  '#ffffff !important',
        backgroundColor: '#004e5a !important',
        border:  '1px solid #004e5a !important',
    },
});


/*
const useStyles = createUseStyles({
    'btn': (props: ButtonProps & {theme: any}) => ({
        height: '32px',
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
*/

export function Button(props: ButtonProps) {
    const theme = useTheme();
    const classes: any = useStyles({...props, theme});
    const {label, disabled, onClick} = props;

    var btnClass = classNames({
        [classes.btn]: !props.isCTA && !props.isActive && !props.borderless,
        [classes.btnCTA]: props.isCTA,
        [classes.btnBorderless]: props.borderless,
        [classes.btnActive]: props.isActive && !props.isCTA,
        [classes.btnCTAActive]: props.isActive && props.isCTA,
    });
    return (
        <AntButton className={btnClass} disabled={disabled} onClick={onClick}>{label}</AntButton>
    )
}



