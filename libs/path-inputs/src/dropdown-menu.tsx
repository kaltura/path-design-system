import * as React from 'react';
import {useState} from 'react';
import {Dropdown} from 'antd';
import {ArrowLeft16Icon} from '@kaltura-react-ui-kits/path-icons';
import {
  createUseStyles,
  Theme,
  theming,
} from '@kaltura-react-ui-kits/path-theming';
const classNames = require('classnames');
import {DropDownProps} from 'antd/lib/dropdown';

type Props = {
  placeholder: string;
  className?: string;
};

const useStyles = createUseStyles(
  (theme: Theme) => ({
    dropdownSelect: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 'bold',
      borderRadius: 4,
      border: `solid 1px ${theme.colors.grayscale4}`,
      fontSize: 14,
      lineHeight: '17px',
      padding: '6px 11px 7px 8px',
      outline: 'none',
      '&:hover': {
        backgroundColor: theme.colors.grayscale4,
      },
      '&.ant-dropdown-open': {
        backgroundColor: theme.colors.grayscale6,
        border: `solid 1px ${theme.colors.grayscale6}`,

        '& $arrowIcon': {
          transform: 'rotate(1.25turn)',
        },
      },
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    dropdownSelect__focus: {
      borderColor: `${theme.colors.cyan} !important`,
      boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
    },
    arrowIcon: {
      transform: 'rotate(0.75turn)',
      transition: 'transform 0.3s',
    },
  }),
  {theming}
);

export const DropdownMenu = ({
  className = '',
  placeholder,
  ...props
}: Props & DropDownProps) => {
  const classes = useStyles();
  const [isInFocus, setIsInFocus] = useState(false);

  const wrapperClass = classNames(classes.dropdownSelect, className, {
    [classes.dropdownSelect__focus]: isInFocus,
  });

  return (
    <Dropdown trigger={['click']} {...props}>
      <div
        tabIndex={0}
        className={wrapperClass}
        onFocus={() => setIsInFocus(true)}
        onBlur={() => setIsInFocus(false)}>
        {placeholder} <ArrowLeft16Icon className={classes.arrowIcon} />
      </div>
    </Dropdown>
  );
};
