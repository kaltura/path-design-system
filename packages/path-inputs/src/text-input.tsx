import * as React from 'react'
import { useState } from 'react'
import { Input } from 'antd';
import { createUseStyles, theming } from '@kaltura-react-ui-kits/path-theming';
import { Theme } from '@kaltura-react-ui-kits/path-theming';
import { SpinnerBright24Icon } from '@kaltura-react-ui-kits/path-icons';

const classNames = require('classnames');

export type InputRef = ((ref: HTMLInputElement | null) => void) | React.MutableRefObject<HTMLInputElement | null>;
export type AffixContent = React.ReactElement | string;

export interface TextInputProps {
    /**
     * Initial value for controlled input
     * @default undefined
     * */
    value?: string;
    /**
     * Initial value for uncontrolled input
     * @default undefined
     * */
    defaultValue?: string;
    /**
     * Set input in disabled state which prevents user input and changes input style
     * @default false
     * */
    disabled?: boolean;
    /**
     * Placeholder text which is displayed when no initial value or user input provided
     * @default undefined
     * */
    placeholder?: string
    /**
     * Ref provides a way to access DOM nodes or React elements created in the render method
     * @default undefined
     * */
    inputRef?: InputRef;
    /**
     * Content that will be displayed to the left side inside an input. Can be either React component or string
     * @default undefined
     * */
    preContent?: AffixContent;
    /**
     * Content that will be displayed to the right side inside an input. Can be either React component or string
     * @default undefined
     * */
    postContent?: AffixContent;
    /**
     * Flag that indicates if input has an error, changes input style
     * @default false
     * */
    hasError?: boolean;
    /**
     * Sets input in busy state by displaying animation indicating busy state which replace 'preContent'. Can be set only if 'isBusy' prop is true otherwise nothing will happen
     * @default false
     * */
    isBusy?: boolean;
    /**
     * Flag that indicates if input can be put in a busy state which controlled by 'isBusy' prop
     * @default false
     * */
    supportBusy?: boolean;
    /**
     * Event callback which is triggered after a user have typed something into an input field
     * @default undefined
     * */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * HTML input type
     * @default undefined
     */
    htmlType?: string;
}

const useStyles = createUseStyles((theme: Theme) => ({
    input: {
        height: '32px',
        width: '100%',
        minWidth: '0',
        padding: '8px',
        lineHeight: '32px',
        fontFamily: theme.input.fontFamily,
        fontSize: theme.input.fontSize,
        fontWeight: theme.input.fontWeight,
        borderRadius: theme.input.borderRadius,
        border: 'none',
        boxShadow: 'none',
        '&::placeholder': {
            color: theme.colors.grayscale2,
        },
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
            backgroundColor: theme.colors.white,
            '&::placeholder': {
                color: theme.colors.grayscale4,
            },
        },
        '&:disabled:hover': {
            border: 'none',
            boxShadow: 'none',
        }
    },
    affixWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        border: `thin solid ${theme.colors.grayscale4}`,
        borderRadius: '4px',
        '&:hover:not([aria-disabled=true]):not([has-error=true])': {
            borderColor: theme.colors.grayscale3,
        },
    },
    affixWrapper__focus: {
        borderColor: `${theme.colors.cyan} !important`,
        boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
    },
    affixWrapper__disabled: {
        boxShadow: 'none',
        backgroundColor: theme.colors.white,
        border: `thin solid ${theme.colors.grayscale5}`,
        '&::placeholder': {
            color: theme.colors.grayscale4,
        },
    },
    affixWrapper__error: {
        borderColor: theme.colors.danger,
        boxShadow: `0 0 0 1px ${theme.colors.danger}`,
    },
    preContent: {
        color: theme.colors.grayscale2,
        margin: '0 0 0 8px',
        height: '24px',
        minWidth: '24px',
    },
    postContent: {
        margin: '0 8px 0 0',
        flex: '1 0 auto',
        height: '24px',
        minWidth: '24px',
        lineHeight: '24px',
        color: theme.colors.grayscale2,
        fontSize: theme.input.fontSize,
    },
    affixContent__disabled: {
        color: theme.colors.grayscale4,
    },
}), { theming });

const renderAffix = (props: { element?: AffixContent, className?: string, supportBusy?: boolean }) => {
    const { element, className, supportBusy } = props;
    if (!element && !supportBusy) {
        return null;
    }
    return <span className={className}>{element}</span>;
};

/**
 * A basic widget for getting the user input is a text field. Keyboard and mouse (via screen keyboard) can be used for providing or changing data.
 */
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
        htmlType,
        hasError = false
    } = props;
    const classes = useStyles(props);

    const [isInFocus, setIsInFocus] = useState(false);

    const inputClass = classNames({ [classes.input]: true });
    const affixWrapperClass = classNames({
        [classes.affixWrapper]: true,
        [classes.affixWrapper__focus]: !hasError && isInFocus,
        [classes.affixWrapper__disabled]: disabled,
        [classes.affixWrapper__error]: hasError,
    });
    const prefixClass = classNames({ [classes.preContent]: true, [classes.affixContent__disabled]: disabled });
    const suffixClass = classNames({ [classes.postContent]: true, [classes.affixContent__disabled]: disabled });
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

    return (
        <span className={affixWrapperClass} aria-disabled={disabled} has-error={hasErrorAttribute}>
            {renderAffix({
                element: isBusy && supportBusy ? <SpinnerBright24Icon spin/> : preContent,
                className: prefixClass,
                supportBusy,
            })}
            <Input className={inputClass}
                   {...values}
                   type={htmlType}
                   disabled={disabled}
                   ref={handleInputRef}
                   placeholder={placeholder}
                   onFocus={() => setIsInFocus(true)}
                   onBlur={() => setIsInFocus(false)}
                   onChange={onChange}/>
            {renderAffix({ element: postContent, className: suffixClass })}
        </span>
    );
};



