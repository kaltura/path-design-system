import * as React from 'react'
import { useEffect, useState } from 'react'
import { InputElement, InputRef, TextInput } from './text-input';
import { Search24Icon, Undo24Icon } from '@kaltura-path/ui-icons';
import { Theme } from './theme/theme';
import { createUseStyles, theming } from './theme';
import classNames from 'classnames';

export interface SearchInputFieldProps {
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string
    inputRef?: InputRef;
    hasError?: boolean;
    isBusy?: boolean;
    onChange?: (event: React.ChangeEvent<InputElement>) => void;
}

const useStyles = createUseStyles((theme: Theme) => ({
    clearBtn: {
        cursor: 'pointer',
        color: theme.colors.greyscale3,
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

export const SearchInput = (props: SearchInputFieldProps) => {
    const { value, defaultValue, disabled, placeholder, inputRef, hasError, isBusy, onChange } = props;
    const classes = useStyles(props);
    const clearBtnClass = classNames({ [classes.clearBtn]: true });
    const [localValue, setLocalValue] = useState<string | undefined>('');
    const [showClear, setShowClear] = useState(false);
    const [inputEl, setInputEl] = useState<InputElement>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(event.target.value);
        resolveOnChange(inputEl, event, onChange);
    };
    const clearInput = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setLocalValue('');
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
        setLocalValue(value ?? defaultValue);
    }, [value, defaultValue]);
    
    useEffect(() => {
        setShowClear(!!localValue);
    }, [localValue]);
    
    return <TextInput value={localValue}
                      defaultValue={defaultValue}
                      disabled={disabled}
                      placeholder={placeholder}
                      inputRef={saveInput}
                      hasError={hasError}
                      isBusy={isBusy}
                      onChange={handleChange}
                      supportBusy={true}
                      postContent={showClear ? <Undo24Icon className={clearBtnClass} onClick={clearInput}/> : undefined}
                      preContent={<Search24Icon/>}/>;
};
