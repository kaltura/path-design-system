import * as React from 'react';
import {useState} from 'react';
import {Select} from 'antd';
import {createUseStyles, theming} from '@kaltura-react-ui-kits/path-theming';
const classNames = require('classnames');

import {
  ArrowLeft16Icon,
  Checkmark16Icon,
} from '@kaltura-react-ui-kits/path-icons';

const {Option} = Select;

export type OptionValue = {
  value: string | number;
  label: string;
  tooltip?: string;
};

export interface DropdownListProps {
  value: string | number;
  options: OptionValue[];
  optionTemplate: (value: OptionValue) => JSX.Element;
  onChange: (value: string | number) => void;
  optionLabelProp: string;
  bindTo?: () => HTMLElement;
}

const useStyles = createUseStyles(
  theme => ({
    '@global': {
      '.ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled)': {
        backgroundColor: theme.colors.grayscale7,
      },
      '.ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled)': {
        backgroundColor: theme.colors.white,
      },
      '.ant-select-dropdown-menu-item-selected': {
        backgroundColor: theme.colors.white,
      },
    },
    selectMenu: {
      width: '100%',
      fontWeight: 'bold',
      borderRadius: 4,
      border: `solid 1px ${theme.colors.grayscale4}`,
      '&:hover': {
        backgroundColor: theme.colors.grayscale4,
      },
      '&.ant-select-open': {
        backgroundColor: theme.colors.grayscale6,
        border: `solid 1px ${theme.colors.grayscale6}`,
      },
      '& .ant-select-selection': {
        border: 'none',
        backgroundColor: 'initial',
      },
      '& .ant-select-arrow': {
        marginTop: -8,
        color: theme.colors.grayscale1,
      },
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    selectMenu__focus: {
      borderColor: `${theme.colors.cyan} !important`,
      boxShadow: `0 0 0 1px ${theme.colors.cyan}`,
    },
    selectMenuOption: {
      padding: '8px 16px',
    },
    optionLabel: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 15,
      fontWeight: 'bold',
    },
  }),
  {theming}
);

const dropdownStyle = {
  borderRadius: 4,
  boxShadow: '0 4px 30px -8px rgba(0, 0, 0, 0.2)',
  border: `solid 1px #d9d9d9`,
};

export const DropdownList = (props: DropdownListProps) => {
  const classes = useStyles();
  const {
    value,
    options,
    optionTemplate,
    onChange,
    optionLabelProp,
    bindTo,
  } = props;
  const [isInFocus, setIsInFocus] = useState(false);

  const wrapperClass = classNames(classes.selectMenu, {
    [classes.selectMenu__focus]: isInFocus,
  });

  const isSelected = (optionValue: string | number): boolean => optionValue === value;

  return (
    <Select
      className={wrapperClass}
      value={value}
      onChange={onChange}
      suffixIcon={<ArrowLeft16Icon style={{transform: 'rotate(0.75turn)'}} />}
      optionLabelProp={optionLabelProp}
      dropdownStyle={dropdownStyle}
      {...(bindTo ? {getPopupContainer: bindTo} : {})}
      onFocus={() => setIsInFocus(true)}
      onBlur={() => setIsInFocus(false)}>
      {options.map(option => (
        <Option
          key={option.value}
          className={classes.selectMenuOption}
          value={option.value}
          title={option.label}>
          <div className={classes.optionLabel}>
            {optionTemplate(option)}
            {isSelected(option.value) && <Checkmark16Icon />}
          </div>
        </Option>
      ))}
    </Select>
  );
};

DropdownList.defaultProps = {
  optionLabelProp: 'label',
};
