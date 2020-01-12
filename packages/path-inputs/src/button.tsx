import * as React from 'react';
import { createUseStyles, theming, Theme } from '@kaltura-react-ui-kits/path-theming';
import { Button as AntButton } from 'antd';
import { SpinnerBright24Icon, SpinnerDark24Icon } from '@kaltura-react-ui-kits/path-icons';
import { CSSProperties } from 'react';

const classNames = require('classnames');

export interface ButtonProps {
    /** Label of the button
     * @default undefined
     * */
    label?: string;
    /** Disables input and changes style of the button
     * @default false
     * */
    disabled?: boolean;
    /** Set button in one of 3 state: default, cta and borderless. Each type has own style
     * @default false
     * */
    type?: 'default' | 'cta' | 'borderless'
    /** Set button in an active mode and changes its style
     * @default false
     * */
    isActive?: boolean;
    /** A click event callback
     * @default undefined
     * */
    onClick?: () => void;
    /** Set button in a processing mode and shows animation indicating busy state
     * @default false
     * */
    isProcessing?: boolean;
    /** An icon element that is placed next to the label (on the left side)
     * @default undefined
     * */
    icon?: React.ReactElement;
    /**
     * Button's content layout. Can be horizontal or vertical
     * @default horizontal
     */
    layout?: 'horizontal' | 'vertical';

    /**
     * Optional class names of the button
     * @default ''
     */
    className?: string;

    /**
     * Optional styles of the button
     * @default undefined
     */
    style?: CSSProperties;
}

const withClassName = (element: React.ReactElement, className: string = '') => {
    return React.cloneElement(element, { className });
};

const useStyles = createUseStyles((theme: Theme) => ({
    'btn': (props: ButtonProps) => ({
        height: props.layout === 'vertical' ? '60px' : '32px',
        minWidth: props.layout === 'vertical' ? '80px' : '34px',
        boxShadow: 'none',
        padding: '0px 8px',
        fontFamily: theme.button.fontFamily,
        fontSize: theme.button.fontSize,
        fontWeight: theme.button.fontWeight,
        borderRadius: theme.button.borderRadius,
    }),
    'btnDefault': (props: ButtonProps) => ({
        '&:focus': {
            backgroundColor: '#ffffff',
            border: `1px solid ${theme.colors.grayscale4}`,
            color: '#434a4b',
        },
        '&:hover': {
            boxShadow: 'none',
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.grayscale4,
            border: `1px solid ${theme.colors.grayscale4}`,
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
        },
    }),
    'btnCTA': (props: ButtonProps) => ({
        boxShadow: 'none',
        color: '#ffffff',
        backgroundColor: '#008297',
        border: '1px solid #008297',
        '&:focus': {
            backgroundColor: '#008297',
            border: '1px solid #004e5a',
            color: '#ffffff',
        },
        '&:hover': {
            color: '#ffffff',
            backgroundColor: props.isProcessing ? '#008297' : '#006879',
            border: '1px solid #006879',
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
        },
    }),
    'btnBorderless': (props: ButtonProps) => ({
        color: '#434a4b',
        backgroundColor: '#ffffff',
        border: '1px solid #ffffff',
        boxShadow: 'none',
        '&:focus': {
            color: '#434a4b',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
        },
        '&:hover': {
            color: '#434a4b',
            backgroundColor: props.isProcessing ? '#ffffff' : theme.colors.grayscale4,
            border: props.isProcessing ? '1px solid #ffffff' : `1px solid ${theme.colors.grayscale4}`,
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
        },
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
    'btnContent': (props: ButtonProps) => ({
        display: 'flex',
        flexDirection: props.layout === 'vertical' ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    }),
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
    const { label, disabled, onClick, icon, isProcessing, className, style, type } = props;
    const isCTA = type === 'cta';
    const isBorderLess = type === 'borderless';

    const btnClass = classNames({
        'btn-leave': true, // hack to remove border glow on click
        [classes.btn]: true,
        [classes.btnDefault]: !isCTA && !isBorderLess && !props.isActive,
        [classes.btnCTA]: isCTA && !props.isActive,
        [classes.btnBorderless]: isBorderLess && !props.isActive,
        [classes.btnActive]: props.isActive && !isCTA,
        [classes.btnCTAActive]: props.isActive && isCTA,
        [classes.btnIconOnly]: props.icon && !props.label && !props.isProcessing,
        className,
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
        <AntButton className={btnClass} disabled={disabled} style={style} onClick={onClick}>
            <div className={btnContentClass}>
                {icon ? withClassName(icon, iconClass) : null}
                {!isProcessing
                    ? null
                    : isCTA && !disabled
                        ? <SpinnerDark24Icon className={spinnerIconClass} spin/>
                        : <SpinnerBright24Icon className={spinnerIconClass} spin/>}
                <span className={labelClass}>{label}</span>
            </div>
        </AntButton>
    )
}

Button.defaultProps = {
    disabled: false,
    type: 'default',
    isActive: false,
    isProcessing:false,
    layout:'horizontal',
    className: '',
};
