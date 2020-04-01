import * as React from 'react';
import { FunctionComponent, ReactText } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio';

import './radio-group.css';

const { Group, Button } = Radio;

export interface RadioGroupOption {
  label: string;
  value: ReactText;
  disabled?: boolean;
}

export interface RadioGroupProps {
  value: ReactText;
  options: RadioGroupOption[];
  onChange: (value: RadioChangeEvent) => void;
  disabled?: boolean;
}


export const RadioGroup: FunctionComponent<RadioGroupProps> = (props) => {
  const { value, options, disabled, onChange } = props;
  return (
    <Group value={value} disabled={disabled} onChange={onChange} prefixCls="path-radio">
      {options.map(option =>
        <Button key={option.value}
                value={option.value}
                disabled={option.disabled}
                prefixCls="path-radio-button">
          {option.label}
        </Button>
      )}
    </Group>
  );
};
