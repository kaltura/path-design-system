import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Exit24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M13 3c1.5977 0 2.9037 1.249 2.995 2.8237L16 6v2c0 .5523-.4477 1-1 1-.5128 0-.9355-.386-.9933-.8834L14 8V6c0-.5128-.386-.9355-.8834-.9933L13 5H6c-.5128 0-.9355.386-.9933.8834L5 6v12c0 .5128.386.9355.8834.9933L6 19h7c.5128 0 .9355-.386.9933-.8834L14 18v-2c0-.5523.4477-1 1-1 .5128 0 .9355.386.9933.8834L16 16v2c0 1.5977-1.249 2.9037-2.8237 2.995L13 21H6c-1.5977 0-2.9037-1.249-2.995-2.8237L3 18V6c0-1.5977 1.249-2.9037 2.8237-2.995L6 3h7zm9.8848 8.5339a.9123.9123 0 01.0505.1121.8667.8667 0 01.0364.1176 1.006 1.006 0 01-.0164.5322l-.0197.058a1.2307 1.2307 0 01-.0209.0505.8973.8973 0 01-.0298.062l-.0129.0233-.0116.0203a1.001 1.001 0 01-.0401.0622L22.8 12.6l-3 4c-.3314.4418-.9582.5314-1.4.2-.4078-.3059-.5155-.8635-.269-1.295l.069-.105 1.799-2.4H12c-.5523 0-1-.4477-1-1 0-.5128.386-.9355.8834-.9933L12 11h7.999L18.2 8.6c-.3059-.4078-.2531-.9733.1043-1.3185L18.4 7.2c.4078-.3059.9733-.2531 1.3185.1043L19.8 7.4l3.0146 4.0198.024.0351.0034.0061-.042-.061.061.091.0238.0429z" /></g></svg>
);

export const Exit24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Exit24Svg} {...rest} style={style} />;
}
