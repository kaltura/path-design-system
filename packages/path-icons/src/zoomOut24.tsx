import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const ZoomOut24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M10 3c3.866 0 7 3.134 7 7 0 1.5723-.5184 3.0236-1.3936 4.1922l4.1997 4.1997c.3905.3905.3905 1.0237 0 1.4142-.3605.3605-.9277.3882-1.32.0832l-.0942-.0832-4.1997-4.1997C13.0236 16.4816 11.5723 17 10 17c-3.866 0-7-3.134-7-7s3.134-7 7-7zm0 2c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5c1.296 0 2.4769-.493 3.3652-1.3019a.9398.9398 0 01.1458-.187c.0574-.0575.12-.1064.1864-.147A4.9746 4.9746 0 0015 10c0-2.7614-2.2386-5-5-5zm0 2c.5523 0 1 .4477 1 1v1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1.001L11 12c0 .5523-.4477 1-1 1s-1-.4477-1-1l-.001-1H8c-.5523 0-1-.4477-1-1s.4477-1 1-1h1V8c0-.5523.4477-1 1-1z" /></g></svg>
);

export const ZoomOut24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={ZoomOut24Svg} {...rest} style={style} />;
}
