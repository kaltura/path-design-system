import * as React from 'react'
import { useEffect, useState } from 'react'
import { TextInput } from './text-input';
import { Search24Icon, Undo24Icon } from '@kaltura-path/ui-icons';
import { Theme } from './theme/theme';
import { createUseStyles, theming } from './theme';
import classNames from 'classnames';

export interface SearchInputFieldProps {
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string
    inputRef?: React.RefObject<any>;
    hasError?: boolean;
    isBusy?: boolean;
    onChange?: (value: string) => void;
}

const useStyles = createUseStyles((theme: Theme) => ({
    clearBtn: {
        cursor: 'pointer',
        color: theme.colors.greyscale3,
    },
}), { theming });

export const SearchInput = (props: SearchInputFieldProps) => {
    const { value, defaultValue, disabled, placeholder, inputRef, hasError, isBusy, onChange } = props;
    const classes = useStyles(props);
    const clearBtnClass = classNames({ [classes.clearBtn]: true });
    const [showClear, setShowClear] = useState(false);
    const toggleClear = (currentValue?: string) => {
        setShowClear(!!currentValue);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleClear(inputRef?.current?.input.value || event?.target?.value);
        
        if (typeof onChange === 'function' && event.target) {
            onChange(event.target.value);
        }
    };
    const clearInput = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (typeof inputRef?.current?.handleReset === 'function') {
            inputRef.current.handleReset(event)
        }
        
        if (typeof onChange === 'function') {
            onChange('');
        }
    };
    
    useEffect(() => {
        toggleClear(value || defaultValue);
    }, [value, defaultValue]);
    
    return <TextInput value={value}
                      defaultValue={defaultValue}
                      disabled={disabled}
                      placeholder={placeholder}
                      inputRef={inputRef}
                      hasError={hasError}
                      isBusy={isBusy}
                      onChange={handleChange}
                      supportBusy={true}
                      postContent={showClear ? <Undo24Icon className={clearBtnClass} onClick={clearInput}/> : undefined}
                      preContent={<Search24Icon/>}/>;
};
