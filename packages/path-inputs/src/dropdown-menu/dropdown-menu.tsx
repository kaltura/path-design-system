import * as React from 'react';
import {
  ReactElement,
  ReactText,
  useCallback,
  useEffect,
  useState
} from 'react';
import RcSelect, { Option } from 'rc-select';
import { Checkmark16Icon } from '@kaltura-react-ui-kits/path-icons';
import { SelectInputButton } from './dropdown-menu-select-button';
import { SelectInputOptionContent } from './dropdown-menu-select-option-content';
import { v4 as uuidV4 } from 'uuid';
import { DropdownMenuType } from './dropdown-menu-types';

import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';

export interface DropdownMenuOption {
  /**
   * Flag indicates that current option is a divider and not selectable
   */
  divider?: boolean;

  /**
   * Value of the option
   */
  value?: ReactText;

  /**
   * Label of the option
   */
  label?: string;

  /**
   * Flag indicates disable state of the option
   */
  disabled?: boolean;

  /**
   * Icon that can be displayed next to the label
   */
  icon?: ReactElement;

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

export interface DropdownMenuProps {
  /**
   * Dropdown options for a user to chose from
   */
  options: DropdownMenuOption[];

  /**
   * Type of the dropdown. Currently supporting two (Labeled and Action) types.
   */
  type?: DropdownMenuType;

  /**
   * Default value of the dropdown
   */
  defaultValue?: ReactText;

  /**
   * Current selected value of the dropdown
   */
  value?: ReactText;

  /**
   * Placeholder text that will be displayed if current value is not defined
   */
  placeholder?: string;

  /**
   * Flag that indicates disabled state of the dropdown.
   * Changes styles and prevents a user from interacting with the component.
   */
  disabled?: boolean;

  /**
   * Change event notifies that current value has been changed
   */
  onChange?: (value: ReactText) => void,

  /**
   * Select event notifies that option item has been selected.
   * Note: unlike `onChange` this event will be fired by each click even on the same option.
   * @param value
   */
  onSelect?: (value: ReactText) => void,
}

const useStyles = createUseStyles((theme: Theme) => ({
  '@global': {
    '.path-dropdown': {
      borderRadius: '4px',
      boxShadow: '0 4px 30px -8px rgba(0, 0, 0, 0.2)',
      border: `solid 1px ${theme.colors.grayscale5}`,
      backgroundColor: theme.colors.white,
      minWidth: '80px !important'
    },
    '.path-dropdown-hidden': { display: 'none' },
    '.path-selection-search, .path-selection-search-input': { width: '100%' },
    '.path-item': {
      padding: '8px 15px 10px 16px',
      fontFamily: 'Lato, Arial, Helvetica',
      fontSize: '15px',
      fontWeight: 'bold',
      lineHeight: '1.47',
      position: 'relative'
    },
    '.path-item:hover:not(.path-item-option-divider)': {
      backgroundColor: theme.colors.grayscale8,
      cursor: 'pointer'
    },
    '.path-item-option-divider': {
      cursor: 'default !important',
      padding: '0',
      width: '100%',
      height: '1px',
      backgroundColor: '#cfdddf'
    },
    '.path-item .path-item-option-content': { width: 'calc(100% - 10px)' },
    '.path-item .path-item-option-state': {
      position: 'absolute',
      right: '9px',
      top: '9px'
    },
    '.path-item.path-item-option-disabled': {
      color: theme.colors.grayscale4,
      cursor: 'not-allowed'
    }
  }
}), { theming });

/**
 * DroprownMenu component gives a user a way to select item or action from the dropdrown list of options.
 */
export function DropdownMenu(props: DropdownMenuProps) {
  const { value, defaultValue, type, options, placeholder, disabled, onChange, onSelect } = props;
  const [open, setOpen] = useState(false);
  const [isControlled] = useState(() => !!value);
  const [localValue, setLocalValue] = useState(() => value || defaultValue);
  const getInputElement = useCallback(
    () => {
      const selectedOption = options.find(opt => opt.value === localValue);
      const label = selectedOption ? selectedOption.label : (placeholder || '');
      return <SelectInputButton label={label || ''}
                                type={type}
                                open={open}
                                disabled={!!disabled}/>
    },
    [type, localValue, open, disabled, placeholder]
  );

  useEffect(() => {
    setLocalValue(value || defaultValue);
  }, [value, defaultValue]);

  const handleChange = (e: ReactText) => {
    if (!isControlled) {
      setLocalValue(e);
    }
    onChange && onChange(e);
  };

  useStyles();

  return (
    // @ts-ignore
    <RcSelect value={localValue}
              onSelect={onSelect}
              disabled={disabled}
              onChange={handleChange}
              listHeight={320}
              open={open}
              prefixCls="path"
              combobox={true}
              getInputElement={getInputElement}
              menuItemSelectedIcon={<Checkmark16Icon/>}
              onDropdownVisibleChange={setOpen}>
      {
        options.map(option =>
          <Option key={option.value || uuidV4()}
                  value={option.value || ''}
                  className={option.divider ? 'path-item-option-divider' : ''}
                  disabled={option.disabled || option.divider}>
            {!option.divider && <SelectInputOptionContent key={option.value}
                                                          disabled={option.disabled}
                                                          icon={option.icon}
                                                          optionClass={option.optionClass}
                                                          optionIconClass={option.optionIconClass}
                                                          optionLabelClass={option.optionLabelClass}
                                                          label={option.label || ''}/>}
          </Option>
        )
      }
    </RcSelect>
  );
}

DropdownMenu.defaultProps = {
  disabled: false,
  value: null,
  placeholder: 'Select item...',
  type: DropdownMenuType.Labeled
};
