import * as React from 'react';
import {useTheme, createUseStyles} from './theme';
import {Button as AntButton} from 'antd';
import { CustomIconComponentProps } from 'antd/lib/icon';
import { Icon, IconRefresh } from '@path-composer/ui-icons';
const classNames = require('classnames');

export interface ButtonProps {
    label?: string;
    disabled?: boolean;
    borderless?: boolean;
    isActive?: boolean;
    onClick?: () => void;
    isProcessing?: boolean;
    isCTA?: boolean;
    icon?: React.FunctionComponent<CustomIconComponentProps>,
}

const useStyles = createUseStyles({
    'btn': (props: ButtonProps & { theme: any }) => ({
        height: '32px',
        minWidth: '86px',
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
        minWidth: '86px',
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
        minWidth: '86px',
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
        minWidth: '86px',
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
        minWidth: '86px',
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
    'btnContent': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    'btnWithIcon': {
        padding: '0 8px',
    },
});

export function Button(props: ButtonProps) {
    const theme = useTheme();
    const classes = useStyles({...props, theme});
    const {label, disabled, onClick, icon, isProcessing} = props;
    
    const btnClass = classNames({
        [classes.btn]: true,
        [classes.btnDefault]: !props.isCTA && !props.borderless && !props.isActive,
        [classes.btnCTA]: props.isCTA && !props.isActive,
        [classes.btnBorderless]: props.borderless && !props.isActive,
        [classes.btnActive]: props.isActive && !props.isCTA,
        [classes.btnCTAActive]: props.isActive && props.isCTA,
        [classes.btnWithIcon]: props.icon,
    });
    const btnContentClass = classNames({
        [classes.btnContent]: true,
        
    });
    return (
        <AntButton className={btnClass} disabled={disabled} onClick={onClick}>
            <div className={btnContentClass}>
                {icon && !isProcessing ? <Icon icon={icon} /> : null}
                {isProcessing ? <Icon icon={IconRefresh} spin /> : null}
                {icon || !isProcessing ? label : null}
            </div>
        </AntButton>
    )
}



