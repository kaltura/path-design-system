import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Interaction24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path transform="scale(Infinity, Infinity)" fillRule="nonzero" d="M7.5613 8.7678c-.3959-2.2125 1.9454-3.5476 3.6518-2.1084l8.7463 7.3768c1.5558 1.3122.9522 3.5899-.9663 3.9668l-.1831.0283.6842 1.1847c.6404 1.1092.2829 2.499-.7478 3.1901l-.1382.0861-1.0328.5963c-1.1388.6575-2.6105.2893-3.2803-.8708l-.6802-1.1766-.0261.0346c-1.2379 1.5466-3.5261 1.0388-3.9809-.8936l-.0313-.1514zm2.2947-.6316c-.24-.1654-.3856-.0541-.326.2793l2.0154 11.2629.0194.0836c.083.2829.292.3045.4905.027l1.1616-1.6237.0661-.0833c.3175-.3595.7544-.3107 1.0144.1396l1.7298 2.996.0473.0656c.1233.138.3313.1712.501.0733l1.0327-.5963.066-.0473c.1401-.1234.1832-.3319.088-.497l-1.7552-3.04-.0487-.095c-.197-.439.0297-.813.551-.8573l2.009-.1708.0859-.0117c.2917-.0562.3247-.2577.0658-.4761L9.9237 8.1882zM5.2369 11.25c.2761.4783.1122 1.0899-.366 1.366l-.866.5c-.4784.2762-1.09.1123-1.3661-.366-.2762-.4783-.1123-1.0899.366-1.366l.866-.5c.4783-.2762 1.09-.1123 1.366.366zm12.1243-7c.2762.4783.1123 1.0899-.366 1.366l-.866.5c-.4783.2762-1.09.1123-1.366-.366-.2762-.4783-.1123-1.0899.366-1.366l.866-.5c.4783-.2762 1.0899-.1123 1.366.366zM4.0048 3.884l.866.5c.4783.2761.6422.8877.366 1.366-.276.4783-.8877.6422-1.366.366l-.866-.5c-.4783-.2761-.6422-.8877-.366-1.366.2761-.4783.8877-.6422 1.366-.366zM10 0c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V1c0-.5523.4477-1 1-1z" /></svg>
);

export const Interaction24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Interaction24Svg} {...rest} style={style} />;
}