import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Image24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M21.009 3C22.6607 3 24 4.353 24 5.9925v12.015C24 19.6602 22.6582 21 21.009 21H2.991C1.3393 21 0 19.647 0 18.0075V5.9925C0 4.3398 1.3418 3 2.991 3h18.018zm0 2H2.991C2.4455 5 2 5.4453 2 5.9925v12.015c0 .5411.4498.9925.991.9925h18.018c.5456 0 .991-.4453.991-.9925V5.9925C22 5.4514 21.5502 5 21.009 5zm-7.5432 4.8483c.2927-.4648.7738-.465 1.0693.0078l3.9298 6.2878c.294.4702.0843.8561-.4717.8561H6.0068c-.5569 0-.7578-.371-.4506-.8287l2.8876-4.3026c.306-.4559.9077-.551 1.3412-.2085l.911.7196c.44.3477 1.0242.2404 1.3192-.2281zM6.5 7C7.328 7 8 7.672 8 8.5c0 .829-.672 1.5-1.5 1.5S5 9.329 5 8.5C5 7.672 5.672 7 6.5 7z" /></svg>
);

export const Image24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Image24Svg} {...rest} style={style} />;
}
