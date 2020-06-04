import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const NoAccess24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M12 3c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9-9-4.0294-9-9 4.0294-9 9-9zm5.408 4.5553L7.891 17.6678C9.045 18.5058 10.4649 19 12 19c3.866 0 7-3.134 7-7 0-1.6877-.5973-3.2359-1.592-4.4447zM12 5c-3.866 0-7 3.134-7 7 0 1.6095.5432 3.0921 1.4563 4.2745L15.931 6.2071C14.8104 5.4453 13.4572 5 12 5z" /></g></svg>
);

export const NoAccess24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={NoAccess24Svg} {...rest} style={style} />;
}
