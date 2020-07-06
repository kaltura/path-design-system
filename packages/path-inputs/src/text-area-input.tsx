import * as React from 'react'
import { Input } from 'antd';
import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';
import {CSSProperties} from "react";

const classNames = require('classnames');
const { TextArea } = Input;

export type TextAreaInputElement = HTMLTextAreaElement | null;
export type TextAreaInputRef =
  ((ref: TextAreaInputElement) => void)
  | React.MutableRefObject<TextAreaInputElement>;

export interface TextAreaInputProps {
  /**
   * Initial value for controlled input
   * @default undefined
   * */
  value?: string;
  /**
   * Initial value for uncontrolled input
   * @default undefined
   * */
  defaultValue?: string;
  /**
   * Set input in disabled state which prevents user input and changes input style
   * @default false
   * */
  disabled?: boolean;

  /**
   * Set input in readonly state which prevents user input and changes input style
   * @default false
   * */
  readOnly?: boolean;
  /**
   * Placeholder text which is displayed when no initial value or user input provided
   * @default undefined
   * */
  placeholder?: string
  /**
   * Ref provides a way to access DOM nodes or React elements created in the render method
   * @default undefined
   * */
  inputRef?: TextAreaInputRef;
  /**
   * Flag that indicates if input has an error, changes input style
   * @default false
   * */
  hasError?: boolean;
  /**
   * Event callback which is triggered after a user have typed something into an input field
   * @default undefined
   * */
  onChange?: (event: React.ChangeEvent<TextAreaInputElement>) => void;
  /**
   * Should the text area input be with transparent background and without borders
   * @default undefined
   */
  transparent?: boolean;
  /**
   * Optional styles of the textArea
   */
  style?: CSSProperties;
}

const useStyles = createUseStyles((theme: Theme) => ({
  input: (props: TextAreaInputProps) => ({
    height: '32px',
    width: '100%',
    padding: '8px',
    lineHeight: '32px',
    fontFamily: theme.input.fontFamily,
    fontSize: theme.input.fontSize,
    fontWeight: theme.input.fontWeight,
    borderRadius: theme.input.borderRadius,
    border: props.transparent ? 'none' : `thin solid ${theme.colors.grayscale4}`,
    resize: props.transparent ? 'none' : 'auto',
    boxShadow: 'none',
    backgroundColor: props.transparent ? 'transparent' : theme.colors.white,
    '&::placeholder': {
      color: theme.colors.grayscale2,
    },
    '&:hover:not([aria-disabled=true]):not([has-error=true])': {
      borderColor: props.transparent ? 'none' : theme.colors.grayscale3,
    },
    '&:focus': {
      borderColor:  props.transparent ? 'none' : `${theme.colors.cyan} !important`,
      boxShadow: props.transparent ? 'none' : `0 0 0 1px ${theme.colors.cyan}`,
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: props.transparent ? 'transparent' : theme.colors.white,
      border: props.transparent ? 'none' : `thin solid ${theme.colors.grayscale5}`,
      '&::placeholder': {
        color: theme.colors.grayscale4,
      },
    },
  }),
  hasError: {
    borderColor: theme.colors.danger,
    boxShadow: `0 0 0 1px ${theme.colors.danger}`,
    '&:hover': {
      borderColor: theme.colors.danger,
      boxShadow: `0 0 0 1px ${theme.colors.danger}`,
    },
    '&:focus': {
      borderColor: `${theme.colors.danger} !important`,
      boxShadow: `0 0 0 1px ${theme.colors.danger}`,
    },
  }
}), { theming });

/**
 * Another basic widget for getting the user input is a text field. Keyboard and mouse (via screen keyboard) can be used for providing or changing data.
 */
export const TextAreaInput = (props: TextAreaInputProps) => {
  const {
    value,
    defaultValue,
    inputRef,
    disabled,
    readOnly,
    onChange,
    placeholder,
    hasError = false,
    style
  } = props;
  const classes = useStyles(props);

  const inputClass = classNames(classes.input, { [classes.hasError]: hasError });

  const hasErrorAttribute = hasError ? 'true' : 'false'; // convert to string for a custom attribute
  const values = {}; // fix antd input value/defaultValue issue
  if (value !== undefined) {
    values['value'] = value;
  }
  if (defaultValue !== undefined) {
    values['defaultValue'] = defaultValue;
  }

  // proxy ref to hide antd input implementation from the end-user
  const handleInputRef = (ref: any | null) => {
    if (!inputRef) {
      return;
    }

    const current = ref ? ref.input : null;
    if (typeof inputRef === 'function') {
      inputRef(current);
    } else {
      inputRef.current = current;
    }
  };

  return (
    <TextArea className={inputClass}
              style={style}
              {...values}
              readOnly={readOnly}
              has-error={hasErrorAttribute}
              aria-disabled={disabled}
              disabled={disabled}
              ref={handleInputRef}
              placeholder={placeholder}
              onChange={onChange}/>
  );
};



