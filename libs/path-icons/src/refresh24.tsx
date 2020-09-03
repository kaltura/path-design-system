import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Refresh24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M5.5959 9.59a.9974.9974 0 01-.3078-.1462l.0942.0588a1.0066 1.0066 0 01-.188-.1338l-.0695-.0696a.727.727 0 01-.0355-.0409 1.2318 1.2318 0 01-.0392-.0518.85.85 0 01-.0319-.0474 1.0018 1.0018 0 01-.1026-.218.5674.5674 0 01-.0101-.0314 1.8042 1.8042 0 01-.0112-.0425.84.84 0 01-.014-.0649 1.049 1.049 0 01-.0136-.1135l-.0001-.1196.2658-4.6127c.0318-.5513.5045-.9725 1.0559-.9408.509.0294.907.4344.9402.9302l.0006.1257-.0966 1.6563A7.9854 7.9854 0 0112 4c4.4183 0 8 3.5817 8 8s-3.5817 8-8 8c-4.1108 0-7.541-3.1146-7.9579-7.1746-.0564-.5494.3433-1.0405.8927-1.0969.5494-.0564 1.0405.3433 1.0969.8927C6.344 15.6636 8.9173 18 12 18c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6a5.9898 5.9898 0 00-4.2024 1.7163l2.7296.1293c.5093.024.9115.425.9499.9204l.0019.1257c-.024.5092-.425.9114-.9204.9498l-.1257.0019-4.6151-.2178a.9824.9824 0 01-.222-.0355z" /></g></svg>
);

export const Refresh24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Refresh24Svg} {...rest} style={style} />;
}
