import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Magnet24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M14.5355 5.2218c.3906.3905.3906 1.0237 0 1.4142l-4.9497 4.9498c-.781.781-.781 2.0474 0 2.8284.75.75 1.9545.7828 2.7209.101l.1075-.101 4.9498-4.9497c.3905-.3906 1.0237-.3906 1.4142 0l2.8284 2.8284c.3905.3905.3905 1.0237 0 1.4142l-4.9497 4.9498c-3.1242 3.1241-8.1896 3.1241-11.3138 0-3.1241-3.1242-3.1241-8.1896 0-11.3138l4.9498-4.9497c.3905-.3905 1.0237-.3905 1.4142 0zm-3.5362 2.1206L9.585 5.9282 6.7574 8.7574c-2.2367 2.2366-2.3383 5.7997-.305 8.157l.1488.1663.1562.162c2.3431 2.343 6.142 2.343 8.4852 0l2.8278-2.8292-1.4143-1.4142-2.8484 2.8493-.1496.1406c-1.578 1.4052-3.9862 1.3395-5.4865-.1608-1.5621-1.562-1.5621-4.0947 0-5.6568l2.8277-2.8292z" /></g></svg>
);

export const Magnet24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Magnet24Svg} {...rest} style={style} />;
}
