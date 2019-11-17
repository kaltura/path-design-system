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
        boxShadow: 'none',
        padding: '0px 8px',
        fontFamily: props.theme.button.fontFamily,
        fontSize: props.theme.button.fontSize,
        fontWeight: props.theme.button.fontWeight,
        borderRadius: props.theme.button.borderRadius,
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
    'hideLabel': {
        opacity: 0
    }
});

export function Button(props: ButtonProps) {
    const theme = useTheme();
    const classes = useStyles({...props, theme});
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
        [classes.btnContent]: true
    });
    const labelClass = classNames({
        [classes.labelClass]: props.label && props.label.length,
        [classes.hideLabel]: props.isProcessing
    });
    const iconClass = classNames({
        [classes.btnIcon]: props.icon,
        [classes.processingIcon]: props.isProcessing
    });

    
    return (
        <AntButton className={btnClass} disabled={disabled} onClick={onClick}>
            <div className={btnContentClass}>
                {icon && !isProcessing ? <Icon className={iconClass} icon={icon} /> : null}
                {isProcessing ? <Icon className={iconClass} icon={IconRefresh} spin /> : null}
                <span className={labelClass}>{label}</span>
            </div>
        </AntButton>
    )
}



