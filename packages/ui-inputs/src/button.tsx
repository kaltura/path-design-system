import * as React from 'react';
import {useTheme, createUseStyles, theming} from './theme';
import {Button as AntButton} from 'antd';
import { ReactNode } from 'react';
import { SpinnerBright24Icon, SpinnerDark24Icon } from '@kaltura-path/ui-icons';
const classNames = require('classnames');

export interface ButtonProps {
    label?: string;
    disabled?: boolean;
    borderless?: boolean;
    isActive?: boolean;
    onClick?: () => void;
    isProcessing?: boolean;
    isCTA?: boolean;
    icon?: ReactNode
}

const useStyles = createUseStyles((theme: any) => ({
    'btn': {
        height: '32px',
        minWidth: '34px',
        boxShadow: 'none',
        padding: '0px 8px',
        fontFamily: theme.button.fontFamily,
        fontSize: theme.button.fontSize,
        fontWeight: theme.button.fontWeight,
        borderRadius: theme.button.borderRadius,
    },
    'btnDefault': (props: ButtonProps) => ({
        '&:hover': {
            boxShadow: 'none',
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.greyscale4,
            border: `1px solid ${theme.colors.greyscale4}`,
        },
        '&:focus': {
            backgroundColor: '#ffffff',
            border: `1px solid ${theme.colors.greyscale4}`,
            color: '#434a4b',
        },
        '&:active': {
            boxShadow: 'none',
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.greyscale5,
            border: `1px solid ${theme.colors.greyscale4}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: `1px solid ${theme.colors.greyscale4}`,
            color: theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff'
        }
    }),
    'btnCTA': (props: ButtonProps) => ({
        boxShadow: 'none',
        color: '#ffffff',
        backgroundColor: '#008297',
        border: '1px solid #008297',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: props.isProcessing ? '#008297' : '#006879',
            border: '1px solid #006879',
        },
        '&:focus': {
            backgroundColor: '#008297',
            border: '1px solid #004e5a',
            color: '#ffffff',
        },
        '&:active': {
            color: '#ffffff',
            backgroundColor: props.isProcessing ? '#008297' : '#004e5a',
            border: '1px solid #004e5a',
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: `1px solid ${theme.colors.greyscale4}`,
            color: theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff'
        }
    }),
    'btnBorderless': (props: ButtonProps) => ({
        color: '#434a4b',
        backgroundColor: '#ffffff',
        border: '1px solid #ffffff',
        boxShadow: 'none',
        '&:hover': {
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.greyscale4,
            border: props.isProcessing ? '1px solid #ffffff' : `1px solid ${theme.colors.greyscale4}`,
        },
        '&:focus': {
            color: '#434a4b',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
        },
        '&:active': {
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.greyscale5,
            border: props.isProcessing ? '1px solid #ffffff' : `1px solid ${theme.colors.greyscale5}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
            color: theme.colors.greyscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
        }
    }),
    'btnActive': {
        color: '#434a4b',
        backgroundColor: theme.colors.greyscale5,
        border: `1px solid ${theme.colors.greyscale5}`,
        '&:hover': {
            color: '#434a4b',
            backgroundColor: theme.colors.greyscale5,
            border: `1px solid ${theme.colors.greyscale5}`,
        },
        '&:focus': {
            color: '#434a4b',
            backgroundColor: theme.colors.greyscale5,
            border: `1px solid ${theme.colors.greyscale5}`,
        },
    },
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
    'btnIconOnly': {
        padding: '0px 0px !important'
    },
    'btnContent': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    'btnIcon': {
        padding: '4px'
    },
    'processingIcon':{
        position: 'absolute'
    },
    'labelClass': {
        padding: '4px'
    },
    'hide': {
        visibility: 'hidden'
    }
}), {theming});

export function Button(props: ButtonProps) {
    const theme = useTheme();
    const classes = useStyles({...props, theme});console.log({...props, theme});
    const {label, disabled, onClick, icon, isProcessing} = props;

    const btnClass = classNames({
        'btn-leave': true, // hack to remove border glow on click
        [classes.btn]: true,
        [classes.btnDefault]: !props.isCTA && !props.borderless && !props.isActive,
        [classes.btnCTA]: props.isCTA && !props.isActive,
        [classes.btnBorderless]: props.borderless && !props.isActive,
        [classes.btnActive]: props.isActive && !props.isCTA,
        [classes.btnCTAActive]: props.isActive && props.isCTA,
        [classes.btnIconOnly]: props.icon && !props.label && !props.isProcessing,
    });
    const btnContentClass = classNames({
        [classes.btnContent]: true,
        [classes.hide]: props.isProcessing,
    });
    const labelClass = classNames({
        [classes.labelClass]: props.label && props.label.length,
    });
    const progressClass = classNames({
        [classes.btnIcon]: props.icon,
    });

    return (
        <AntButton className={btnClass} disabled={disabled} onClick={onClick}>
            <div className={btnContentClass}>
	            {icon}
                <span className={labelClass}>{label}</span>
            </div>
            {!isProcessing
                    ? null
		            : <div className={btnContentClass}>{props.isCTA && !disabled
                    ? <SpinnerDark24Icon className={progressClass} spin />
		            : <SpinnerBright24Icon className={progressClass} spin />}</div>
            }
        </AntButton>
    )
}



