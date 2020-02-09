import * as React from 'react';
import {CSSProperties} from 'react';
import {createUseStyles, Theme, theming} from '@kaltura-react-ui-kits/path-theming';
import {Typography, TypographyTypes} from "./typography";

const classNames = require('classnames');

const useStyles = createUseStyles((theme: Theme) => ({
  tag: {
    display: 'block',
    padding: '5px 8px',
    borderRadius: '4px',
    border: `solid 1px ${theme.colors.grayscale4}`,
    backgroundColor: theme.colors.white,
  }
}), { theming });

export interface TagProps {
  /**
   * Text label for a tag
   */
  label: string
  /**
   * Optional class name for a tag
   */
  className?: string;

  /**
   * Optional styles for a tag
   */
  style?: CSSProperties;
}

export const Tag = (props: TagProps) => {

  const {label, className, style} = props;
  const classes = useStyles();

  return (
    <div className={classNames({[classes.tag]: true},className)} style={style}>
      <Typography type={TypographyTypes.Label13}
                  rows={1}
                  ellipsis={true}
                  text={label}></Typography>
    </div>
  );

};
