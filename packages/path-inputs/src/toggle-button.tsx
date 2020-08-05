import * as React from 'react';
import { CSSProperties, useEffect, useState } from 'react';
import { Button, ButtonProps } from './button';
import { NativeButtonProps } from 'antd/lib/button/button';

export type ToggleButtonProps = {
  /** Label of the button
   * */
  label?: string;
  /**
   * Disables input and changes style of the button
   * */
  disabled?: boolean;
  /**
   * Set button in one of 3 state: default, cta and borderless. Each type has own style
   * */
  type?: 'default' | 'borderless';
  /**
   * Default active state of the toggle button
   * */
  defaultActive?: boolean;
  /**
   * Active state of the toggle button
   * */
  isActive?: boolean;
  /**
   * Change event handler
   * */
  onChange?: (isActive: boolean) => void;
  /**
   * An icon element that is placed next to the label (on the left side)
   * */
  icon?: React.ReactElement;
  /**
   * Button's content layout. Can be horizontal or vertical
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * Optional class names of the button
   */
  className?: string;
  /**
   * Optional styles of the button
   */
  style?: CSSProperties;
};

/**
 * Toggle buttons are buttons that are changing a binary state of a single parameter.
 */
export function ToggleButton(props: Omit<NativeButtonProps, keyof ButtonProps> & ToggleButtonProps) {
  const {isActive, defaultActive, onChange, disabled} = props;
  const [isControlled] = useState(typeof isActive === 'boolean');
  const [active, setActive] = useState(
    (typeof isActive === 'boolean' ? isActive : defaultActive) || false
  );

  useEffect(() => {
    if (!isControlled) {
      return;
    }

    setActive(isActive || false);
  }, [isActive]);

  const handleActiveState = () => {
    if (disabled) {
      return;
    }

    if (!isControlled) {
      setActive(!active);
    }

    if (onChange) {
      onChange(!active);
    }
  };

  return <Button {...props} isActive={active} onClick={handleActiveState} />;
}
