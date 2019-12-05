import * as React from 'react';
import { createUseStyles, theming } from './theme';
import { Button as AntButton } from 'antd';
import { SpinnerBright24Icon, SpinnerDark24Icon } from '@kaltura-path/ui-icons';
import { Theme } from './theme/theme';

const classNames = require('classnames');

export interface ButtonProps {
    /** Label of the button */
    label?: string;
    /** Disables input and changes style of the button */
    disabled?: boolean;
    /** Set button in a borderless mode and changes its style */
    borderless?: boolean;
    /** Set button in an active mode and changes its style */
    isActive?: boolean;
    /** A click event callback */
    onClick?: () => void;
    /** Set button in a processing mode and shows animation indicating busy state */
    isProcessing?: boolean;
    /** Set button in an CTA mode and changes its style */
    isCTA?: boolean;
    /** An icon element that is placed next to the label (on the left side) */
    icon?: React.ReactElement
}

const withClassName = (element: React.ReactElement, className: string = '') => {
    return React.cloneElement(element, { className });
};

const useStyles = createUseStyles((theme: Theme) => ({
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
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.grayscale4,
            border: `1px solid ${theme.colors.grayscale4}`,
        },
        '&:focus': {
            backgroundColor: '#ffffff',
            border: `1px solid ${theme.colors.grayscale4}`,
            color: '#434a4b',
        },
        '&:active': {
            boxShadow: 'none',
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.grayscale5,
            border: `1px solid ${theme.colors.grayscale4}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: `1px solid ${theme.colors.grayscale4}`,
            color: theme.colors.grayscale4
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
            border: `1px solid ${theme.colors.grayscale4}`,
            color: theme.colors.grayscale4
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
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.grayscale4,
            border: props.isProcessing ? '1px solid #ffffff' : `1px solid ${theme.colors.grayscale4}`,
        },
        '&:focus': {
            color: '#434a4b',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
        },
        '&:active': {
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.grayscale5,
            border: props.isProcessing ? '1px solid #ffffff' : `1px solid ${theme.colors.grayscale5}`,
        },
        '&:disabled': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
            color: theme.colors.grayscale4
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
        }
    }),
    'btnActive': {
        color: '#434a4b',
        backgroundColor: theme.colors.grayscale5,
        border: `1px solid ${theme.colors.grayscale5}`,
        '&:hover': {
            color: '#434a4b',
            backgroundColor: theme.colors.grayscale5,
            border: `1px solid ${theme.colors.grayscale5}`,
        },
        '&:focus': {
            color: '#434a4b',
            backgroundColor: theme.colors.grayscale5,
            border: `1px solid ${theme.colors.grayscale5}`,
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
        padding: '0px 0px !important',
    },
    'btnContent': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    'btnIcon': {
        padding: '4px',
    },
    'processingIcon': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    'labelClass': {
        padding: '0 4px',
        lineHeight: '24px',
    },
    'fadeOut': {
        opacity: 0,
    },
}), { theming });

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 */
export function Button(props: ButtonProps) {
    const classes = useStyles(props);
    const { label, disabled, onClick, icon, isProcessing } = props;
    
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
        [classes.fadeOut]: props.isProcessing
    });
    const spinnerIconClass = classNames({
        [classes.btnIcon]: props.icon,
        [classes.processingIcon]: props.isProcessing
    });
    const iconClass = classNames({
        [classes.fadeOut]: props.isProcessing,
    });
    
    return (
        <AntButton className={btnClass} disabled={disabled} onClick={onClick}>
            <div className={btnContentClass}>
                {icon ? withClassName(icon, iconClass) : null}
                {!isProcessing
                    ? null
                    : props.isCTA
                        ? <SpinnerDark24Icon className={spinnerIconClass} spin/>
                        : <SpinnerBright24Icon className={spinnerIconClass} spin/>}
                <span className={labelClass}>{label}</span>
            </div>
        </AntButton>
    )
}
