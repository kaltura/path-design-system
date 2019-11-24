import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Redo24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path transform="scale(Infinity, Infinity)" fillRule="nonzero" d="M11 7c-3.866 0-7 3.134-7 7 0 .5523.4477 1 1 1s1-.4477 1-1c0-2.7614 2.2386-5 5-5 2.0863 0 3.874 1.2777 4.6236 3.0933l-1.8495-1.0248c-.483-.2677-1.0917-.0932-1.3594.3898-.2678.483-.0932 1.0917.3898 1.3594l3.7107 2.057a1.0197 1.0197 0 00.182.0786 1.0755 1.0755 0 00.102.0265.9467.9467 0 00.0641.011c.0446.006.0903.0092.1367.0092l-.0768-.0027a.9957.9957 0 00.043.0023L17 15a1.0181 1.0181 0 00.148-.0109 1.1366 1.1366 0 00.1047-.0213 1.2798 1.2798 0 00.104-.0333 1.2704 1.2704 0 00.0552-.0232.8262.8262 0 00.0462-.0222.9982.9982 0 00.1828-.1215.8005.8005 0 00.042-.0368 1.2913 1.2913 0 00.0769-.0803.9962.9962 0 00.1149-.1657l-.0495.0802a1.0007 1.0007 0 00.041-.0649l.0084-.0153 2.0569-3.7107c.2677-.483.0932-1.0917-.3898-1.3594-.483-.2678-1.0917-.0932-1.3594.3898l-.7683 1.3875C16.332 8.724 13.8674 7 11 7z" /></g></svg>
);

export const Redo24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Redo24Svg} {...rest} style={style} />;
}
