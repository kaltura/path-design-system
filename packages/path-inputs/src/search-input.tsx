import * as React from 'react'
import { useEffect, useState } from 'react'
import { InputElement, InputRef, TextInput } from './text-input';
import { Plus24Icon, Search24Icon } from '@kaltura-react-ui-kits/path-icons';
import { Theme } from '@kaltura-react-ui-kits/path-theming';
import { createUseStyles, theming } from '@kaltura-react-ui-kits/path-theming';

const classNames = require('classnames');

export interface SearchInputFieldProps {
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
     * @default undefined
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
     * Flag that indicates if input has an error, changes input style
     * @default false
     * */
    hasError?: boolean;
    /**
     * Sets input in busy state by displaying animation indicating busy state which replace the search icon
     * @default false
     * */
    isBusy?: boolean;
    /**
     * Event callback which is triggered after a user have typed something into an input field
     * @default undefined
     * */
    onChange?: (event: React.ChangeEvent<InputElement>) => void;
}

const useStyles = createUseStyles((theme: Theme) => ({
    clearBtn: {
        cursor: 'pointer',
        color: theme.colors.grayscale3,
        transform: 'rotate(45deg)',
    },
}), { theming });

const resolveOnChange = (
    target: InputElement,
    e:
        | React.ChangeEvent<InputElement>
        | React.MouseEvent<HTMLElement, MouseEvent>,
    onChange?: (event: React.ChangeEvent<InputElement>) => void,
): void => {
    const callOnChange = (event: React.ChangeEvent<InputElement>) => {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    };
    if (target) {
        let event = e;
        if (e.type === 'click') {
            // click clear icon
            event = Object.create(e);
            event.target = target;
            event.currentTarget = target;
            const originalInputValue = target.value;
            // change target ref value cause e.target.value should be '' when clear input
            target.value = '';
            callOnChange(event as React.ChangeEvent<InputElement>);
            // reset target ref value
            target.value = originalInputValue;
            return;
        }
        callOnChange(event as React.ChangeEvent<InputElement>);
    }
};

/**
 * Search input is an extension of TextInput component that provides additional ability to clear a user's input by clicking the clear button in the input.
 * The clear button will appear once user input some value in the SearchInput.
 */
export const SearchInput = (props: SearchInputFieldProps) => {
    const { value, defaultValue, disabled, placeholder, inputRef, hasError, isBusy, onChange } = props;
    const classes = useStyles(props);
    const clearBtnClass = classNames({ [classes.clearBtn]: true });
    const [isControlled] = useState<boolean>(value === '' || !!value);
    const [localValue, setLocalValue] = useState<string>((value ?? defaultValue) || '');
    const [showClear, setShowClear] = useState(false);
    const [inputEl, setInputEl] = useState<InputElement>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(event.target.value);
        resolveOnChange(inputEl, event, onChange);
    };
    const clearInput = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (!isControlled) {
            setLocalValue('');
        }
        inputEl?.focus();
        resolveOnChange(inputEl, event, onChange);
    };

    const saveInput = (el: InputElement) => {
        setInputEl(el);

        if (!inputRef) {
            return;
        }

        if (typeof inputRef === 'function') {
            inputRef(el);
        } else {
            inputRef.current = el;
        }
    };

    useEffect(() => {
        if (!isControlled) {
            return;
        }

        setLocalValue(value || '');
    }, [value]);

    useEffect(() => {
        setShowClear(!!localValue);
    }, [localValue]);

    return <TextInput value={localValue}
                      disabled={disabled}
                      placeholder={placeholder}
                      inputRef={saveInput}
                      hasError={hasError}
                      isBusy={isBusy}
                      onChange={handleChange}
                      supportBusy={true}
                      postContent={showClear ? <Plus24Icon className={clearBtnClass} onClick={clearInput}/> : undefined}
                      preContent={<Search24Icon/>}/>;
};
