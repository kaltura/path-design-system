import * as React from 'react';
import { FunctionComponent, ReactText } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio';
import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';
const classNames = require('classnames');

const { Group, Button } = Radio;

const useStyle = createUseStyles((theme: Theme) => ({
  '@keyframes pathRadioEffect': {
    '0%': { transform: 'scale(1)', opacity: '.5' },
    '100%': { transform: 'scale(1.6)', opacity: '0' }
  },
  'group': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    fontSize: '14px',
    fontWeight: 'bold',
    listStyle: 'none',
    fontFamily: 'Lato, Arial, Helvetica',
    zIndex: '1',
    '& .path-radio-wrapper': {
      boxSizing: 'border-box',
      margin: '0',
      padding: '0',
      fontSize: '14px',
      listStyle: 'none',
      position: 'relative',
      display: 'inline-block',
      marginRight: '8px',
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    },
    '& .path-radio': {
      boxSizing: 'border-box',
      margin: '0',
      padding: '0',
      fontSize: '14px',
      fontVariant: 'tabular-nums',
      lineHeight: '1.5715',
      listStyle: 'none',
      fontFeatureSettings: 'tnum',
      position: 'relative',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'sub',
      outline: 'none',
      cursor: 'pointer'
    },
    '& .path-radio-wrapper:hover .path-radio, & .path-radio:hover .path-radio-inner, & .path-radio-input:focus + .path-radio-inner': {
      borderColor: theme.colors.grayscale3
    },
    '& .path-radio-checked::after': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      border: `thin solid ${theme.colors.grayscale3}`,
      borderRadius: '50%',
      visibility: 'hidden',
      animation: 'pathRadioEffect .36s ease-in-out',
      animationFillMode: 'both',
      content: '""'
    },
    '& .path-radio:hover::after, & .path-radio-wrapper:hover .path-radio::after': {
      visibility: 'visible'
    },
    '& .path-radio-inner': {
      position: 'relative',
      top: '0',
      left: '0',
      display: 'block',
      width: '16px',
      height: '16px',
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.grayscale5,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '100px',
      transition: 'all .3s'
    },
    '& .path-radio-inner::after': {
      position: 'absolute',
      top: '3px',
      left: '3px',
      display: 'table',
      width: '8px',
      height: '8px',
      backgroundColor: theme.colors.grayscale4,
      borderTop: '0',
      borderLeft: '0',
      borderRadius: '8px',
      transform: 'scale(0)',
      opacity: '0',
      transition: 'all .3s cubic-bezier(.78, .14, .15, .86)',
      content: '""'
    },
    '& .path-radio-input': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '1',
      cursor: 'pointer',
      opacity: '0'
    },
    '& .path-radio-checked .path-radio-inner': {
      borderColor: theme.colors.grayscale4
    },
    '& .path-radio-checked .path-radio-inner::after': {
      transform: 'scale(1)',
      opacity: '1',
      transition: 'all .3s cubic-bezier(.78, .14, .15, .86)'
    },
    '& .path-radio-disabled .path-radio-inner': {
      backgroundColor: theme.colors.grayscale8,
      borderColor: `${theme.colors.grayscale5} !important`,
      cursor: 'not-allowed'
    },
    '& .path-radio-disabled .path-radio-inner::after': {
      backgroundColor: 'rgba(0, 0, 0, .2)'
    },
    '& .path-radio-disabled .path-radio-input': {
      cursor: 'not-allowed'
    },
    '& .path-radio-disabled + span': {
      color: theme.colors.grayscale1,
      cursor: 'not-allowed'
    },
    '& span.path-radio + *': {
      paddingRight: '8px',
      paddingLeft: '8px'
    },

    '& .path-radio-button-wrapper': {
      position: 'relative',
      display: 'inline-block',
      height: '32px',
      textAlign: 'center',
      margin: '0',
      padding: '0 15px',
      color: theme.colors.grayscale2,
      lineHeight: '30px',
      background: theme.colors.white,
      border: `thin solid ${theme.colors.grayscale5}`,
      borderTopWidth: '1.02px',
      borderLeftWidth: '0',
      cursor: 'pointer',
      transition: 'color .3s, background .3s, border-color .3s, box-shadow .3s'
    },
    '& .path-radio-button-wrapper a': {
      color: theme.colors.grayscale2
    },
    '& .path-radio-button-wrapper > .path-radio-button': {
      display: 'block',
      width: '0',
      height: '0',
      marginLeft: '0'
    },
    '& .path-radio-group-large .path-radio-button-wrapper': {
      height: '40px',
      fontSize: '16px',
      lineHeight: '38px'
    },
    '& .path-radio-group-small .path-radio-button-wrapper': {
      height: '24px',
      padding: '0 7px',
      lineHeight: '22px'
    },
    '& .path-radio-button-wrapper:not(:first-child):before': {
      position: 'absolute',
      top: '-1px',
      left: '-1px',
      display: 'block',
      boxSizing: 'content-box',
      width: '1px',
      height: '100%',
      padding: '1px 0',
      transition: 'background-color .3s',
      content: '""'
    },
    '& .path-radio-button-wrapper:not(:first-child):not(.path-radio-button-wrapper-disabled):hover:before': {
      backgroundColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper:first-child': {
      borderLeft: `thin solid ${theme.colors.grayscale5}`,
      borderRadius: '4px 0 0 4px'
    },
    '& .path-radio-button-wrapper:last-child': {
      borderRadius: '0 4px 4px 0'
    },
    '& .path-radio-button-wrapper:first-child:last-child': {
      borderRadius: '4px'
    },
    '& .path-radio-button-wrapper:hover': {
      position: 'relative',
      color: theme.colors.grayscale1,
      backgroundColor: theme.colors.grayscale6,
      borderColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper .path-radio-inner, & .path-radio-button-wrapper input[type=checkbox], & .path-radio-button-wrapper input[type=radio]': {
      width: '0',
      height: '0',
      opacity: '0',
      pointerEvents: 'none'
    },
    '& .path-radio-button-wrapper-checked:not(.path-radio-button-wrapper-disabled)': {
      zIndex: '1',
      color: theme.colors.grayscale1,
      background: theme.colors.grayscale6,
      borderColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper-checked:not(.path-radio-button-wrapper-disabled):before': {
      backgroundColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper-checked:not(.path-radio-button-wrapper-disabled):first-child': {
      borderColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper-checked:not(.path-radio-button-wrapper-disabled):hover': {
      color: theme.colors.grayscale1,
      borderColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper-checked:not(.path-radio-button-wrapper-disabled):hover:before': {
      backgroundColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper-checked:not(.path-radio-button-wrapper-disabled):active': {
      color: theme.colors.grayscale1,
      borderColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper-checked:not(.path-radio-button-wrapper-disabled):active:before': {
      backgroundColor: theme.colors.grayscale3
    },
    '& .path-radio-button-wrapper-disabled': {
      color: 'rgba(0,0,0,.25)',
      backgroundColor: theme.colors.grayscale8,
      borderColor: theme.colors.grayscale5,
      cursor: 'not-allowed'
    },
    '& .path-radio-button-wrapper-disabled:first-child, & .path-radio-button-wrapper-disabled:hover': {
      color: 'rgba(0,0,0,.25)',
      backgroundColor: theme.colors.grayscale8,
      borderColor: theme.colors.grayscale5
    },
    '& .path-radio-button-wrapper-disabled:first-child': {
      borderLeftColor: theme.colors.grayscale5
    },
    '& .path-radio-button-wrapper-disabled.path-radio-button-wrapper-checked': {
      color: theme.colors.white,
      backgroundColor: theme.colors.grayscale6,
      borderColor: theme.colors.grayscale5,
      boxShadow: 'none'
    }
  },
}), { theming });

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
   * ClassName of wrapped element
   */
  className?: string;
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
  const { value, options, disabled, onChange, className } = props;
  const classes = useStyle();
  return (
    <Group value={value}
           disabled={disabled}
           onChange={onChange}
           className={classNames(classes.group, className)}
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
