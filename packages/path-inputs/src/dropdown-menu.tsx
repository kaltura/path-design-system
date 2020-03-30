import * as React from 'react';
import { forwardRef, RefObject, useCallback, useState } from 'react';
import RcSelect, { Option } from 'rc-select';
import { Button } from 'antd';

import './dropdown-menu.css';
import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';

export interface DropdownMenuOption {
  value: any;
  label: string;
  disabled?: boolean;
  icon?: any;
}

export interface DropdownMenuProps {
  value: any;
  options: DropdownMenuOption[];
  onChange: (value: any) => void,
  disabled?: boolean;
}


const useSelectInputStyles = createUseStyles((theme: Theme) => ({
  selectInput: {
    height: '32px',
    width: '100%',
    minWidth: '80px',
    boxShadow: 'none',
    padding: '0px 8px',
    fontFamily: theme.button.fontFamily,
    fontSize: theme.button.fontSize,
    fontWeight: theme.button.fontWeight,
    borderRadius: theme.button.borderRadius,
    border: `thin solid ${theme.colors.grayscale4}`,
    '&:focus': {
      backgroundColor: '#ffffff',
      border: `thin solid ${theme.colors.grayscale4}`,
      color: '#434a4b',
    },
    '&:hover': {
      boxShadow: 'none',
      color: '#434a4b',
      backgroundColor: theme.colors.grayscale4,
      border: `thin solid ${theme.colors.grayscale4}`,
    },
    '&:active': {
      boxShadow: 'none',
      color: '#434a4b',
      backgroundColor: theme.colors.grayscale5,
      border: `thin solid ${theme.colors.grayscale4}`,
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      border: `thin solid ${theme.colors.grayscale4}`,
      color: theme.colors.grayscale4
    },
    '&:disabled:hover': {
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
  },
  labelContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: theme.colors.grayscale1
  }
}), { theming });

const SelectInput = forwardRef((
  { label, open, disabled }: { label: string, open: boolean, disabled: boolean },
  ref: RefObject<Button>) => {
  const classes = useSelectInputStyles();
  return (
    <Button ref={ref} className={classes.selectInput} disabled={disabled}>
      <div className={classes.labelContainer}>
        <span>{label}</span>
        {open ? <i/> : <i/>}
      </div>
    </Button>
  );
});

/**
 *
 */
export function DropdownMenu(props: DropdownMenuProps) {
  const { value, options, disabled, onChange } = props;
  const [open, setOpen] = useState(false);
  const getInputElement = useCallback(
    () => {
      const selectedOption = options.find(opt => opt.value === value);

      if (selectedOption) {
        return <SelectInput label={selectedOption.label}
                            open={open}
                            disabled={!!disabled}/>
      }

      return null;
    },
    [value, open, disabled]
  );

  return (
    // @ts-ignore
    <RcSelect value={value}
              onChange={onChange}
              listHeight={320}
              open={open}
              prefixCls="path"
              mode="combobox"
              getInputElement={getInputElement}
              onDropdownVisibleChange={setOpen}>
      {
        options.map(option =>
          <Option key={option.value}
                  value={option.value}
                  disabled={option.disabled}>
            {option.icon}
            {option.label}
          </Option>
        )
      }
    </RcSelect>
  );
}

DropdownMenu.defaultProps = {
  disabled: false
};
