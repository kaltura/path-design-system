import * as React from 'react';
// import {
//   createUseStyles,
//   Theme,
//   theming
// } from '@kaltura-react-ui-kits/path-theming';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

const { Option } = Select;

export interface DropdownMenuOption {
  value: any;
  label: string;
  disabled?: boolean;
}

export interface DropdownMenuProps {
  value: any;
  options: DropdownMenuOption[];
  onChange: (value: any) => void
}

// const useStyles = createUseStyles((theme: Theme) => ({}), { theming });
const dropdownRender = (menu?: React.ReactNode, props?: SelectProps) => {
  console.warn(props);
  return menu;
};

/**
 *
 */
export function DropdownMenu(props: DropdownMenuProps) {
  const { value, options, onChange } = props;

  return (
    <Select defaultValue={value}
            dropdownRender={dropdownRender}
            onChange={onChange}>
      {
        options.map(option =>
          <Option key={option.value}
                  value={option.value}
                  disabled={option.disabled}>
            {option.label}
          </Option>
        )
      }
    </Select>
  );
}

