import * as React from 'react'
import { useState } from 'react'
import { Input } from 'antd';
import { createUseStyles, theming } from './theme';
import { Theme } from './theme/theme';
import classNames from 'classnames';
import { SpinnerBright24Icon } from '@kaltura-path/ui-icons';

export type InputElement = HTMLInputElement | null;
export type InputRef = ((ref: InputElement) => void) | React.MutableRefObject<InputElement>;
export type AffixContent = React.ReactElement | string;

export interface TextInputProps {
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string
    inputRef?: InputRef;
    preContent?: AffixContent;
    postContent?: AffixContent;
    hasError?: boolean;
    isBusy?: boolean;
    supportBusy?: boolean;
    onChange?: (event: React.ChangeEvent<InputElement>) => void;
}

const useStyles = createUseStyles((theme: Theme) => ({
    input: {
        height: '34px',
        width: '100%',
        padding: '8px',
        lineHeight: '32px',
        fontFamily: theme.input.fontFamily,
        fontSize: theme.input.fontSize,
        fontWeight: theme.input.fontWeight,
        borderRadius: theme.input.borderRadius,
    },
    inputDefault: {
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
    },
    inputBorderLess: {
        height: '32px',
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
            border: 'none',
            boxShadow: 'none',
        },
        '&:focus': {
            border: 'none',
            boxShadow: 'none',
        },
        '&:active': {
            border: 'none',
            boxShadow: 'none',
        },
        '&:disabled': {
            border: 'none',
            boxShadow: 'none',
        },
        '&:disabled:hover': {
            border: 'none',
            boxShadow: 'none',
        }
    },
    inputError: {
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
        },
    },
    affixWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${theme.colors.greyscale4}`,
        borderRadius: '4px',
        '&:hover:not([aria-disabled=true]):not([has-error=true])': {
            borderColor: theme.colors.cyan,
            boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
        },
    },
    affixWrapper__focus: {
        borderColor: `${theme.colors.cyan} !important`,
        boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
    },
    affixWrapper__disabled: {
        boxShadow: 'none',
        backgroundColor: theme.colors.disabled,
        border: `1px solid ${theme.colors.greyscale5}`,
    },
    affixWrapper__error: {
        borderColor: theme.colors.danger,
        boxShadow: `0 0 0 1px ${theme.colors.danger}`,
    },
    preContent: {
        color: theme.colors.greyscale3,
        margin: '0 0 0 8px',
        height: '24px',
        minWidth: '24px',
    },
    postContent: {
        margin: '0 8px 0 0',
        flex: '1 0 auto',
        height: '24px',
        minWidth: '24px',
        color: theme.colors.greyscale2,
        fontSize: theme.input.fontSize,
    },
}), { theming });

const renderAffix = (props: { element?: AffixContent, className?: string, supportBusy?: boolean }) => {
    const { element, className, supportBusy } = props;
    if (!element && !supportBusy) {
        return null;
    }
    return <span className={className}>{element}</span>;
};

export const TextInput = (props: TextInputProps) => {
    const {
        value,
        defaultValue,
        preContent,
        postContent,
        inputRef,
        disabled,
        isBusy,
        supportBusy,
        onChange,
        placeholder,
        hasError = false
    } = props;
    const classes = useStyles(props);
    const hasAffix = !!preContent || !!postContent || supportBusy;
    
    const [isInFocus, setIsInFocus] = useState(false);
    
    const inputClass = classNames({
        [classes.input]: true,
        [classes.inputDefault]: !hasError && !hasAffix,
        [classes.inputError]: hasError && !hasAffix,
        [classes.inputBorderLess]: hasAffix,
    });
    const affixWrapperClass = classNames({
        [classes.affixWrapper]: true,
        [classes.affixWrapper__focus]: !hasError && isInFocus,
        [classes.affixWrapper__disabled]: disabled,
        [classes.affixWrapper__error]: hasError,
    });
    const prefixClass = classNames({ [classes.preContent]: true });
    const suffixClass = classNames({ [classes.postContent]: true });
    const hasErrorAttribute = hasError ? "true" : "false"; // convert to string for a custom attribute
    const values = {}; // fix antd input value/defaultValue issue
    if (value !== undefined) {
        values['value'] = value;
    }
    if (defaultValue !== undefined) {
        values['defaultValue'] = defaultValue;
    }
    
    // proxy ref to hide antd input implementation from the end-user
    const handleInputRef = (ref: Input | null) => {
        if (!inputRef) {
            return;
        }
    
        const current = ref ? ref.input : null;
        if (typeof inputRef === 'function') {
            inputRef(current);
        } else {
            inputRef.current = current;
        }
    };

    const renderInput = () => <Input className={inputClass}
                                     {...values}
                                     disabled={disabled}
                                     ref={handleInputRef}
                                     placeholder={placeholder}
                                     onFocus={() => setIsInFocus(true)}
                                     onBlur={() => setIsInFocus(false)}
                                     onChange={onChange}/>;
    const renderWithAffix = () => (
        <span className={affixWrapperClass} aria-disabled={disabled} has-error={hasErrorAttribute}>
            {renderAffix({
                element: isBusy && supportBusy ? <SpinnerBright24Icon spin/> : preContent,
                className: prefixClass,
                supportBusy,
            })}
            {renderInput()}
            {renderAffix({ element: postContent, className: suffixClass })}
        </span>
    );
    
    return hasAffix ? renderWithAffix() : renderInput();
};
