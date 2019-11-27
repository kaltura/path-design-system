import * as React from 'react'
import { Input } from 'antd';
import { createUseStyles, theming, useTheme } from './theme';
import { Theme } from './theme/theme';
import classNames from 'classnames';

export interface InputFieldProps {
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string
    inputRef?: React.RefObject<any>;
    preContent?: React.ReactElement<any>;
    postContent?: React.ReactElement<any>;
    hasError?: boolean;
    isBusy?: boolean;
    supportBusy?: boolean;
    onChange?: any;
}

const useStyles = createUseStyles((theme: Theme) => ({
    input: {
        height: '34px',
        width: '100%',
        padding: '8px',
        lineHeight: '34px',
        fontFamily: theme.input.fontFamily,
        fontSize: theme.input.fontSize,
        fontWeight: theme.input.fontWeight,
        borderRadius: theme.input.borderRadius,
    },
    inputDefault: () => ({
        '&:hover': {
            borderColor: theme.colors.cyan,
            boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
        },
        '&:focus': {
            borderColor: theme.colors.cyan,
            boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
        },
        '&:active': {
            borderColor: theme.colors.cyan,
            boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
        },
        '&:disabled': {
            boxShadow: 'none',
        },
        '&:disabled:hover': {
            boxShadow: 'none',
        }
    }),
    inputError: () => ({
        border: `2px solid ${theme.colors.danger}`,
        '&:hover': {
            boxShadow: 'none',
            border: `2px solid ${theme.colors.danger}`,
            borderRightWidth: '2px !important',
        },
        '&:focus': {
            boxShadow: 'none',
            border: `2px solid ${theme.colors.danger}`,
            borderRightWidth: '2px !important',
        },
        '&:active': {
            boxShadow: 'none',
            border: `2px solid ${theme.colors.danger}`,
            borderRightWidth: '2px !important',
        },
        '&:disabled': {
            boxShadow: 'none',
            border: `1px solid ${theme.colors.greyscale5}`,
        },
        '&:disabled:hover': {
            boxShadow: 'none',
            border: `1px solid ${theme.colors.greyscale5}`,
        }
    }),
    inputWithBothAffix: {
      padding: '0 40px 0 40px',
    },
    inputWithPrefix: {
        padding: 0,
        paddingRight: '40px',
    },
    inputWithSuffix: {
        padding: 0,
        paddingLeft: '40px',
    },
    affixWrapper: {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        lineHeight: '1.5',
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        textAlign: 'start',
    },
    affixContent: {
        position: 'absolute',
        top: '50%',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        lineHeight: 0,
        transform: 'translateY(-50%)',
    },
    preContent: {
        left: '8px',
    },
    postContent: {
        right: '8px',
    },
}), { theming });

const renderAffix = (props: { element?: React.ReactElement<any>, className?: string }) => props.element
    ? <span className={props.className}>{React.cloneElement(props.element)}</span>
    : null;

export const TextInput = (props: InputFieldProps) => {
    const theme = useTheme();
    const classes = useStyles({ ...props, theme });
    const { preContent, postContent, inputRef, disabled, hasError, ...rest } = props;
    const hasAffix = !!preContent || !!postContent;
    const inputClass = classNames({
        [classes.input]: true,
        [classes.inputDefault]: !hasError,
        [classes.inputError]: hasError,
        [classes.inputWithBothAffix]: !!preContent && !!postContent,
        [classes.inputWithPrefix]: !!preContent && !postContent,
        [classes.inputWithSuffix]: !!postContent && !preContent,
    });
    const affixWrapperClass = classNames({ [classes.affixWrapper]: true });
    const prefixClass = classNames({ [classes.affixContent]: true, [classes.preContent]: true });
    const suffixClass = classNames({ [classes.affixContent]: true, [classes.postContent]: true });
    const renderInput = () => <Input className={inputClass} {...rest} disabled={disabled} ref={inputRef}/>;
    const renderWithAffix = () => (
        <span className={affixWrapperClass}>
            {renderAffix({ element: preContent, className: prefixClass })}
            {renderInput()}
            {renderAffix({ element: postContent, className: suffixClass })}
        </span>
    );
    
    return hasAffix ? renderWithAffix() : renderInput();
};
