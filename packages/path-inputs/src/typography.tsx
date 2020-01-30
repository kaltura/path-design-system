import * as React from 'react';
import Paragraph from "antd/lib/typography/Paragraph";
import 'antd/dist/antd.css';
import { createUseStyles, theming, Theme } from '@kaltura-react-ui-kits/path-theming';
const classNames = require('classnames');

export enum TypographyTypes {
  Paragraph = 'Paragraph',
  LabelLarge = 'LabelLarge',
  LabelMedium = 'LabelMedium',
  LabelSmall = 'LabelSmall'
}

export interface TypographyProps {
  /**
   * Typography types determine how the text will look like
   * @default TypographyTypes.LabelMedium
   */
  type: TypographyTypes;
  /**
   * Text to display
   */
  text: string;
  /**
   * If to add ellipsis at the end of the visible text if overflowing
   * @default true
   */
  ellipsis: boolean;
  /**
   * Max number of rows for ellipsis
   * @default 1
   */
  rows: number;
  /**
   * If to enable to expand the text if too long
   * @default false
   */
  expandable: boolean;
  /**
   * Classname for external style
   */
  className?: string;
}

const useStyles = createUseStyles((theme: Theme) => ({
  fontStyle :{
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    marginBottom: '2px !important' //in order to override antd margin
  },
  labelLarge: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: '#434a4b'
  },
  labelMedium: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.grayscale1
  },
  labelSmall: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.grayscale2
  },
  paragraphStyle: {
    fontSize: '15px',
    fontWeight: 'normal',
    lineHeight: '1.47',
    color: '#434a4b'
  }
}), { theming });

export const Typography = (props: TypographyProps) => {

  const {text, type, rows, ellipsis, expandable, className} = props;

  const classes = useStyles(props);

  const ellipsisAttr = ellipsis ? {rows, expandable} : false;

  return (
    <Paragraph
      className={classNames(
        {
          [classes.fontStyle]: true,
          [classes.labelLarge]: type === TypographyTypes.LabelLarge,
          [classes.labelMedium]: type === TypographyTypes.LabelMedium,
          [classes.labelSmall]: type === TypographyTypes.LabelSmall,
          [classes.paragraphStyle]: type === TypographyTypes.Paragraph
        }, className)}
      ellipsis={ellipsisAttr}>{text}</Paragraph>
  )
};

Typography.defaultProps = {
  ellipsis: true,
  rows: 1,
  type: TypographyTypes.LabelMedium,
  expandable: false
};
