import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Loop24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M4.0099 8.6674l1.4565 1.4565A3.9824 3.9824 0 005 12c0 2.1422 1.684 3.891 3.8004 3.9951L9 16h6c.1333 0 .265-.0065.395-.0193l-1.1005-1.102-.0777-.0872c-.3109-.3926-.285-.9644.0777-1.327.3905-.3906 1.0237-.3906 1.4142 0l2.8284 2.8284.0777.0872c.3108.3925.285.9644-.0777 1.327l-2.8284 2.8284-.0872.0777c-.3926.3109-.9644.285-1.327-.0777l-.0777-.0872c-.3109-.3925-.285-.9643.0777-1.327l1.1384-1.1367a6.0656 6.0656 0 01-.208.0113L15 18H9c-3.3137 0-6-2.6863-6-6 0-1.2331.372-2.3794 1.0099-3.3326zm5.6972-5.203c.3626.3627.3885.9345.0777 1.327l-.0777.0873-1.139 1.1366.1346-.008L9 6h6c3.3137 0 6 2.6863 6 6 0 1.2327-.3717 2.3785-1.0092 3.3316l-1.4566-1.4565A3.9825 3.9825 0 0019 12c0-2.1422-1.684-3.891-3.8004-3.9951L15 8H9c-.1326 0-.2637.0065-.393.019l1.1001 1.1023c.3626.3627.3885.9345.0777 1.327l-.0777.0872c-.3626.3627-.9345.3886-1.327.0777l-.0872-.0777-2.8284-2.8284c-.3627-.3626-.3886-.9345-.0777-1.327l.0777-.0872 2.8284-2.8284c.3905-.3906 1.0237-.3906 1.4142 0z" /></g></svg>
);

export const Loop24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Loop24Svg} {...rest} style={style} />;
}
