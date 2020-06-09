import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';

const classNames = require('classnames');

export interface SelectInputOptionContentProps {
  /**
   * Main content of the label
   */
  label: string;

  /**
   * Optional icon that is displayed to the left of the label
   */
  icon?: ReactElement;

  /**
   * Flag indicates disable state of the option. Changes content appearance in grayed colors
   */
  disabled?: boolean;

  /**
   * ClassName of the option for custom styling purposes
   */
  optionClass?: string;

  /**
   * ClassName of the option label for custom styling purposes
   */
  optionLabelClass?: string;

  /**
   * ClassName of the option icon for custom styling purposes
   */
  optionIconClass?: string;
}

const useStyles = createUseStyles((theme: Theme) => ({
  optionContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  icon: (props: SelectInputOptionContentProps) => ({
    marginRight: '12px',
    color: props.disabled ? theme.colors.grayscale4 : theme.colors.grayscale2
  }),
  label: {
    fontSize: '15px',
    fontWeight: 'bold',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
}), { theming });

/**
 * Option content component. Simply displays provided label and optional icon with style 😎
 */
export const SelectInputOptionContent: FunctionComponent<SelectInputOptionContentProps> = (props: SelectInputOptionContentProps) => {
  const { label, icon, optionClass, optionLabelClass, optionIconClass } = props;
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.optionContainer, optionClass)}>
      {icon && <span className={classNames(classes.icon, optionIconClass)}>{icon}</span>}
      <span className={classNames(classes.label, optionLabelClass)}>{label}</span>
    </div>
  )
};
