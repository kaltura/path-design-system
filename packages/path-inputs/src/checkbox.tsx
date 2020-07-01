import * as React from 'react';
import {
  createUseStyles,
  theming,
  Theme,
} from '@kaltura-react-ui-kits/path-theming';
import {CSSProperties, useEffect, useState} from 'react';

const classNames = require('classnames');

export interface CheckboxProps {
  /**
   * Label of the checkbox
   * */
  label?: string;
  /**
   * Disables input and changes style of the checkbox
   * */
  disabled?: boolean;
  /**
   * Value of the checkbox
   */
  value?: any;
  /**
   * Optional default checked
   */
  defaultChecked?: boolean;
  /**
   * Optional is checkbox checked
   */
  checked?: boolean;
  /**
   * Is checkbox in the partial state
   */
  partial?: boolean;
  /** A onChange event callback
   * */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional class names of the checkbox
   */
  className?: string;
  /**
   * Optional styles of the checkbox
   */
  style?: CSSProperties;
}

const useStyles = createUseStyles(
  (theme: Theme) => ({
    checkboxWrapper: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: theme.colors.grayscale1,
      fontSize: '14px',
      lineHeight: 1.5715,
      listStyle: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover $checkboxInner, $checkbox:hover $checkboxInner': {
        backgroundColor: theme.colors.grayscale4,
      },
      '&:hover $checkboxChecked $checkboxInner, $checkbox:hover $checkboxChecked $checkboxInner': {
        background: '#006879',
      },
      '&:hover $checkboxPartial $checkboxInner, $checkbox:hover $checkboxPartial $checkboxInner': {
        background: '#006879',
      },
    },
    checkbox: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: theme.colors.grayscale1,
      fontSize: '14px',
      listStyle: 'none',
      position: 'relative',
      top: '-.09em',
      display: 'inline-block',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      outline: 'none',
      cursor: 'pointer',
      '& + span': {
        paddingRight: '8px',
        paddingLeft: '8px',
      },
    },
    checkboxDisabled: {
      cursor: 'not-allowed',
      '& $checkboxInput': {
        cursor: 'not-allowed',
      },
      '& + span': {
        color: '#bac8cb',
        cursor: 'not-allowed',
      },
      '& $checkboxInner': {
        cursor: 'not-allowed',
        backgroundColor: '#fff !important',
        borderColor: `${theme.colors.grayscale4} !important`,
      },
      '& $checkboxInner::after': {
        borderColor: '#bac8cb !important',
      },
      '&$checkboxPartial $checkboxInner::after': {
        backgroundColor: '#bac8cb !important',
      },
    },
    checkboxChecked: {
      '& $checkboxInner': {
        backgroundColor: '#008297',
        borderColor: '#008297',
      },
      '& $checkboxInner::after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: 0,
        borderLeft: 0,
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '""',
      },
      '&:after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '1px solid #008297',
        borderRadius: '4px',
        visibility: 'hidden',
        animation: 'antCheckboxEffect .36s ease-in-out',
        animationFillMode: 'backwards',
        content: '""',
      },
    },
    checkboxPartial: {
      '& $checkboxInner': {
        backgroundColor: '#008297',
        borderColor: '#008297',
      },
      '& $checkboxInner::after': {
        top: '50%',
        left: '50%',
        width: '8px',
        height: '2px',
        borderRadius: '2px',
        backgroundColor: '#fff',
        border: '0',
        transform: 'translate(-50%,-50%) scale(1)',
        opacity: '1',
        content: '" "',
      },
    },
    checkboxInput: {
      boxSizing: 'border-box',
      padding: 0,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      opacity: 0,
      touchAction: 'manipulation',
    },
    checkboxInner: {
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      width: '18px',
      height: '18px',
      direction: 'ltr',
      backgroundColor: '#fff',
      border: `1px solid ${theme.colors.grayscale4}`,
      borderRadius: '4px',
      borderCollapse: 'separate',
      transition: 'all .3s',
      '&:after': {
        position: 'absolute',
        top: '50%',
        left: '30%',
        display: 'table',
        width: '5.5px',
        height: '9.5px',
        border: '2px solid #fff',
        borderTop: 0,
        borderLeft: 0,
        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
        opacity: 0,
        transition: 'all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s',
        content: '""',
      },
    },
  }),
  {theming}
);

export function Checkbox({
  label,
  disabled,
  onChange,
  className,
  checked,
  defaultChecked,
  value,
  style,
  partial,
}: CheckboxProps) {
  const classes = useStyles();
  const [isControlled] = useState(typeof checked === 'boolean');
  const [isChecked, setChecked] = useState(
    typeof checked === 'boolean' ? checked : defaultChecked || false
  );
  useEffect(() => {
    if (!isControlled) {
      return;
    }
    setChecked(checked || false);
  }, [checked]);

  const checkboxWrapperClass = classNames({
    [classes.checkboxWrapper]: true,
    className,
  });
  const checkboxClass = classNames({
    [classes.checkbox]: true,
    [classes.checkboxDisabled]: disabled,
    [classes.checkboxChecked]: isChecked,
    [classes.checkboxPartial]: partial,
  });
  const checkboxInputClass = classNames({
    [classes.checkboxInput]: true,
  });
  const checkboxInnerClass = classNames({
    [classes.checkboxInner]: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (disabled) {
      return;
    }

    if (!isControlled) {
      setChecked(event.target.checked);
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label className={checkboxWrapperClass} style={style}>
      <span className={checkboxClass}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={isChecked}
          className={checkboxInputClass}
          onChange={handleChange}
          value={value}
        />
        <span className={checkboxInnerClass} />
      </span>
      <span>{label}</span>
    </label>
  );
}

Checkbox.defaultProps = {
  disabled: false,
  partial: false,
};
