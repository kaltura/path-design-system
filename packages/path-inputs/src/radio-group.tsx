import * as React from 'react';
import {
  createUseStyles,
  theming,
  Theme,
} from '@kaltura-react-ui-kits/path-theming';
import {CSSProperties, useEffect, useState} from 'react';

const classNames = require('classnames');

export interface RadioItem {
  /** Disables and change style of the radio item
   * @default false
   * */
  disabled?: boolean;
  /**
   * Value of the radio item
   * @default undefined
   */
  value: any;
  /** Label of the radio item
   * @default undefined
   * */
  label: string;
}

export interface RadioGroupProps {
  /** Options to display as Radio elements
   * @default []
   * */
  options: RadioItem[];
  /** Disables input and changes style of the radio group
   * @default false
   * */
  disabled?: boolean;
  /**
   * Optional selected value of the group
   * @default undefined
   */
  value?: any;
  /**
   * Optional default selected value in the group
   * @default undefined
   */
  defaultValue?: any;
  /** A onChange event callback
   * @default undefined
   * */
  onChange?: (value: any, event: React.ChangeEvent<HTMLElement>) => void;
  /**
   * Optional class names of the button
   * @default ''
   */
  className?: string;
  /**
   * Optional styles of the button
   * @default undefined
   */
  style?: CSSProperties;

  /**
   * FIXME [OPEN QUESTION] Radio Group content layout. Can be vertical (or horizontal ?)
   * @default horizontal
   */
  layout?: 'horizontal' | 'vertical';
}

const useStyles = createUseStyles(
  (theme: Theme) => ({
    radioGroup: {
      boxSizing: 'border-box',
      margin: '0',
      padding: '0',
      fontSize: '14px',
      fontFamily: 'Lato, Arial, Helvetica',
      fontWeight: 'normal',
      color: theme.colors.gray,
      '& .radio-wrapper': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        fontSize: '14px',
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        marginRight: '8px',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
      },
      '& .radio-wrapper--vertical': {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
      '& .radio': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        fontSize: '14px',
        lineHeight: '1.5715',
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        verticalAlign: 'sub',
        outline: 'none',
        cursor: 'pointer',
      },
      '& .radio-wrapper:hover .radio, & .radio:hover .radio-inner, & .radio-input:focus + .radio-inner': {
        borderColor: theme.colors.allports,
      },
      '& .radio-checked::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        visibility: 'hidden',
        animation: 'pathRadioEffect .36s ease-in-out',
        animationFillMode: 'both',
        content: '""',
      },
      '& .radio:hover::after, & .radio-wrapper:hover .radio::after': {
        visibility: 'visible',
      },
      '& .radio-inner': {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block',
        width: '18px',
        height: '18px',
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.submarine,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '100px',
        transition: 'all .3s',
      },
      '& .radio-inner::after': {
        position: 'absolute',
        top: '4px',
        left: '4px',
        display: 'table',
        width: '8px',
        height: '8px',
        backgroundColor: theme.colors.white,
        borderTop: '0',
        borderLeft: '0',
        borderRadius: '8px',
        transform: 'scale(0)',
        opacity: '0',
        transition: 'all .3s cubic-bezier(.78, .14, .15, .86)',
        content: '""',
      },
      '& .radio-input': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: '1',
        cursor: 'pointer',
        opacity: '0',
      },
      '& .radio-checked .radio-inner': {
        borderColor: theme.colors.allports,
        backgroundColor: theme.colors.allports,
      },
      '& .radio-checked .radio-inner::after': {
        transform: 'scale(1)',
        opacity: '1',
        transition: 'all .3s cubic-bezier(.78, .14, .15, .86)',
      },
      '& .radio-disabled .radio-inner': {
        borderColor: `${theme.colors.submarine} !important`,
        cursor: 'not-allowed',
      },
      '& .radio-checked.radio-disabled .radio-inner': {
        borderColor: `${theme.colors.grayscale4} !important`,
        backgroundColor: theme.colors.grayscale4,
      },
      '& .radio-disabled .radio-input': {
        cursor: 'not-allowed',
      },
      '& .radio-disabled + span': {
        color: theme.colors.submarine,
        cursor: 'not-allowed',
      },
      '& .radio-checked.radio-disabled + span': {
        color: theme.colors.gray,
      },
      '& span.radio + *': {
        paddingRight: '8px',
        paddingLeft: '8px',
      },
    },
  }),
  {theming}
);

export function RadioGroup({
  options,
  disabled: isGroupDisabled,
  value,
  defaultValue,
  onChange,
  style,
  className,
}: RadioGroupProps) {
  const classes = useStyles();
  const [localValue, setLocalValue] = useState(value || defaultValue);

  useEffect(() => {
    setLocalValue(value || defaultValue);
  }, [value, defaultValue]);

  const radioGroupClass = classNames(classes.radioGroup, className);
  const radioWrapperClass = classNames(
    'radio-wrapper',
    'radio-wrapper--vertical'
  );
  const radioClass = (selected: boolean, disabled: boolean): string =>
    classNames('radio', {
      'radio-checked': selected,
      'radio-disabled': disabled,
    });

  const isControlled = !!value;

  const isValueSelected = (itemValue: any): boolean => {
    if (itemValue === undefined || localValue === undefined) {
      return false;
    }

    return localValue === itemValue;
  };

  const isDisabled = (disabled: boolean | undefined): boolean => {
    return isGroupDisabled || !!disabled;
  };

  const handleChange = (
    newValue: any,
    event: React.ChangeEvent<HTMLElement>
  ): void => {
    if (!isControlled) {
      setLocalValue(newValue);
    }

    if (onChange) {
      onChange(newValue, event);
    }
  };

  return (
    <div className={radioGroupClass} style={style} role="radiogroup">
      {options &&
        options.map((radio, index) => {
          return (
            <label key={index} className={radioWrapperClass}>
              <span
                className={radioClass(
                  isValueSelected(radio.value),
                  isDisabled(radio.disabled)
                )}>
                <input
                  type="radio"
                  className="radio-input"
                  value={radio.value}
                  disabled={isDisabled(radio.disabled)}
                  checked={isValueSelected(radio.value)}
                  onChange={(e): void => handleChange(radio.value, e)}
                />
                <span className="radio-inner" />
              </span>
              <span>{radio.label}</span>
            </label>
          );
        })}
    </div>
  );
}

RadioGroup.defaultProps = {
  disabled: false,
  layout: 'vertical',
  options: [],
};
