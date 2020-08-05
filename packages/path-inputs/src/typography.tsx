import * as React from 'react';
import Paragraph from "antd/lib/typography/Paragraph";
import 'antd/dist/antd.css';
import { createUseStyles, theming, Theme } from '@kaltura-react-ui-kits/path-theming';
import {useMemo} from "react";
import {getDataOrAriaProps} from "./utils";
const classNames = require('classnames');

export enum TypographyTypes {
  Paragraph = 'Paragraph',
  Label18 = 'Label18',
  Label18Normal = 'Label18Normal',
  Label15 = 'Label15',
  Label14 = 'Label14',
  Label14White = 'Label14White',
  Label14Gray = 'Label14Gray',
  Label13 = 'Label13',
  Label12 = 'Label12',
  Label12Black = 'Label12Black',
  Label12White = 'Label12White',
  Label10Grey = 'Label10Grey',
  Label11White = 'Label11White'
}

export interface TypographyProps {
  /**
   * Typography types determine how the text will look like
   * @default TypographyTypes.Label14
   */
  type: TypographyTypes;

  /**
   * Allow user text selection
   * @default false
   */
  allowUserSelect?: boolean;
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
  /**
   * Optional aria attributes
   */
  ariaAttributes: Record<string, string>

}

const useStyles = createUseStyles((theme: Theme) => ({
  fontStyle :{
    wordBreak: 'break-word',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    marginBottom: '2px !important' //in order to override antd margin
  },
  label18: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: '#434a4b'
  },
  Label18Normal: {
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: 'normal',
    color: '#434a4b'
  },
  label14: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.grayscale1
  },
  label14Gray: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.grayscale2
  },
  label14White : {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.white
  },
  label13: {
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: '#434a4b'
  },
  label12: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.grayscale2
  },
  label15: {
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.grayscale2
  },
  label12Black: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.grayscale1
  },
  label12White: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.white
  },
  label10Grey: {
    fontSize: '10px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: '#97a3a5'
  },
  label11White : {
    fontSize: '11px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.colors.white
  },
  paragraphStyle: {
    fontSize: '15px',
    fontWeight: 'normal',
    lineHeight: '1.47',
    color: '#434a4b'
  }
}), { theming });

export const Typography = (props: TypographyProps) => {

  const {text, type, rows, ellipsis, expandable, className, allowUserSelect, ariaAttributes} = props;

  const classes = useStyles(props);

  const ellipsisAttr = ellipsis ? {rows, expandable} : false;

  const ariaAttr = useMemo(() => {
    return {
      'aria-label': text,
      'role': 'text',
      ...getDataOrAriaProps(ariaAttributes)
    }
  }, [ariaAttributes]);

  return (
    <Paragraph
      {...ariaAttr}
      style={{
        userSelect: allowUserSelect ? 'auto': 'none'
      }}
      className={classNames(
        {
          [classes.fontStyle]: true,
          [classes.label18]: type === TypographyTypes.Label18,
          [classes.Label18Normal]: type === TypographyTypes.Label18Normal,
          [classes.label14]: type === TypographyTypes.Label14,
          [classes.label14Gray]: type === TypographyTypes.Label14Gray,
          [classes.label14White]: type === TypographyTypes.Label14White,
          [classes.label13]: type === TypographyTypes.Label13,
          [classes.label15]: type === TypographyTypes.Label15,
          [classes.label12]: type === TypographyTypes.Label12,
          [classes.label12Black]: type === TypographyTypes.Label12Black,
          [classes.label12White]: type === TypographyTypes.Label12White,
          [classes.label10Grey]: type === TypographyTypes.Label10Grey,
          [classes.label11White]: type === TypographyTypes.Label11White,
          [classes.paragraphStyle]: type === TypographyTypes.Paragraph
        }, className)}
      ellipsis={ellipsisAttr}>{text}</Paragraph>
  )
};

Typography.defaultProps = {
  ariaAttributes: {},
  ellipsis: true,
  rows: 1,
  type: TypographyTypes.Label14,
  expandable: false
};
