import * as React from 'react';
import { forwardRef, ReactElement, useEffect, useState } from 'react';
import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';
import { Button } from 'antd';
import { ArrowLeft16Icon } from '@kaltura-react-ui-kits/path-icons';
import { v4 as uuidV4 } from 'uuid';
import { DropdownMenuType } from './dropdown-menu-types';

const classNames = require('classnames');

export interface SelectInputButtonProps {
  /**
   * Text that is displayed on the button
   */
  label: string | ReactElement;

  /**
   * Flag indicates current opened/closed state of the dropdown
   */
  open: boolean;

  /**
   * Flag indicates disable state of the option. Changes content appearance in grayed colors
   */
  disabled: boolean;

  /**
   * Type of the dropdown. Changes button styles as well.
   * Currently supporting two (Labeled and Action) types.
   */
  type?: DropdownMenuType;
}

const useStyles = createUseStyles((theme: Theme) => ({
  button: {
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
      backgroundColor: theme.colors.grayscale4,
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
  buttonBorderless: {
    padding: '4px',
    color: theme.colors.grayscale1,
    fontFamily: theme.button.fontFamily,
    fontSize: theme.button.fontSize,
    fontWeight: theme.button.fontWeight,
    borderRadius: theme.button.borderRadius,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    '&:focus': {
      color: theme.colors.grayscale1,
      backgroundColor: 'transparent',
      border: 'none',
    },
    '&:hover': {
      color: theme.colors.grayscale1,
      backgroundColor: theme.colors.grayscale4,
      border: 'none',
    },
    '&:active': {
      color: theme.colors.grayscale1,
      backgroundColor: theme.colors.grayscale4,
      border: 'none',
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.colors.grayscale4
    },
    '&:disabled:hover': {
      color: theme.colors.grayscale4,
      boxShadow: 'none',
      backgroundColor: 'transparent',
      border: 'none',
    },
  },
  buttonBorderlessOpened: {
    backgroundColor: `${theme.colors.grayscale4} !important`,
  },
  labelContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  actionLabelContainer: {
    justifyContent: 'center'
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: theme.colors.grayscale1,
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  actionLabel: {
    fontSize: '10px',
    letterSpacing: '2px',
    lineHeight: '32px',
  },
  labelDisabled: {
    color: theme.colors.grayscale4
  },
  caret: {
    marginLeft: 'auto'
  }
}), { theming });

/**
 * Dropdown trigger component. Represents styled button which opens/closes dropdown upon click.
 * Currently supporting two (Labeled and Action) types.
 */
export const SelectInputButton = forwardRef((props: SelectInputButtonProps, ref: (el: HTMLButtonElement | null) => void) => {
  const { label, open, disabled, type } = props;
  const classes = useStyles();
  const [labelValue, setLabelValue] = useState<string | ReactElement | null>(null);
  const buttonId = uuidV4();

  // Antd button component doesn't expose `focus` function in its ref
  // in order to make it work properly with the `Select` component
  // we're patching a ref to the actual HTML button element
  useEffect(() => {
    ref(document.getElementById(buttonId) as HTMLButtonElement);
  }, []);

  useEffect(() => {
    if (type === DropdownMenuType.Labeled) {
      setLabelValue(label);
    } else if (type === DropdownMenuType.Action) {
      setLabelValue('•••')
    }
  }, [label, type]);

  const buttonClass = classNames({
    [classes.button]: type !== DropdownMenuType.Action,
    [classes.buttonBorderless]: type === DropdownMenuType.Action,
    [classes.buttonBorderlessOpened]: open,
  });

  const labelContainerClass = classNames(
    classes.labelContainer,
    { [classes.actionLabelContainer]: type === DropdownMenuType.Action }
  );

  const labelClass = classNames(
    classes.label,
    {
      [classes.actionLabel]: type === DropdownMenuType.Action,
      [classes.labelDisabled]: disabled
    }
  );

  return (
    <Button id={buttonId} className={buttonClass} disabled={disabled}>
      <div className={labelContainerClass}>
        <span className={labelClass}>{labelValue}</span>
        {type === DropdownMenuType.Labeled && <span className={classes.caret}>{
          open
            ? <ArrowLeft16Icon style={{ 'transform': 'rotate(90deg)' }}/>
            : <ArrowLeft16Icon style={{ 'transform': 'rotate(-90deg)' }}/>
        }</span>}
      </div>
    </Button>
  );
});
