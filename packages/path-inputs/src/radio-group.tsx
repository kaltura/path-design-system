import * as React from 'react';
import { FunctionComponent, ReactText } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio';

import './radio-group.css';

const { Group, Button } = Radio;

export interface RadioGroupOption {
  /**
   * Label of the option button
   */
  label: string;

  /**
   * Value of the option
   */
  value: ReactText;

  /**
   * Flag that indicates disabled state of an option
   */
  disabled?: boolean;
}

export interface RadioGroupProps {
  /**
   * Current value of the input
   */
  value: ReactText;

  /**
   * Options array of the input
   */
  options: RadioGroupOption[];

  /**
   * Change event
   */
  onChange: (value: RadioChangeEvent) => void;

  /**
   * Flag that indicates disabled state of the input
   */
  disabled?: boolean;
}

const prefixCls = 'path-radio';
const optionPrefixCls = 'path-radio-button';

/**
 * Used to select a single state from multiple options
 */
export const RadioGroup: FunctionComponent<RadioGroupProps> = (props) => {
  const { value, options, disabled, onChange } = props;
  return (
    <Group value={value}
           disabled={disabled}
           onChange={onChange}
           prefixCls={prefixCls}>
      {options.map(option =>
        <Button key={option.value}
                value={option.value}
                disabled={option.disabled}
                prefixCls={optionPrefixCls}>
          {option.label}
        </Button>
      )}
    </Group>
  );
};
