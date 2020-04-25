import * as React from 'react';
import {
  createUseStyles,
  theming,
  Theme,
} from '@kaltura-react-ui-kits/path-theming';
import {CSSProperties} from 'react';

const classNames = require('classnames');

export interface RadioButtonProps {
  /** checked value of the radio button
   * @default false
   * */
  checked: boolean;
  /** Disables input and changes style of the radio button
   * @default false
   * */
  disabled?: boolean;
  /** Set the radio button value
   * @default false
   * */
  value?: any;
  /** A change event callback
   * @default undefined
   * */
  onChange?: (value: any, e: React.ChangeEvent<HTMLElement>) => void;
  /**
   * Should radio button's content truncate if overflow width.
   * @default false
   */
  truncate?: boolean;
  /**
   * Optional class names of the radio button
   * @default ''
   */
  className?: string;
  /**
   * Optional styles of the radio button
   * @default undefined
   */
  style?: CSSProperties;
  /**
   * Optional children which represents label for the radio button
   * @default undefined
   */
  children?: React.ReactNode;
}

const withClassName = (element: React.ReactElement, className = '') => {
  return React.cloneElement(element, {className});
};

const useStyles = createUseStyles((theme: Theme) => ({}), {theming});

export function RadioButton(props: RadioButtonProps) {
  const classes = useStyles(props);
  const {
    value,
    disabled,
    onChange,
    className,
    style,
    children,
    checked,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    if (disabled || !onChange) {
      return;
    }

    onChange(value, event);
  };

  return (
    <label className={``} style={style}>
      <span className={``}>
        <input
          className={``}
          name={name}
          type="radio"
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          value={value}
        />
        <span className={``} />
      </span>
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  );
}

RadioButton.defaultProps = {
  disabled: false,
  truncate: false,
};
