import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Undo24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M13 7c3.866 0 7 3.134 7 7 0 .5523-.4477 1-1 1s-1-.4477-1-1c0-2.7614-2.2386-5-5-5-2.0863 0-3.874 1.2777-4.6236 3.0933l1.8495-1.0248c.483-.2677 1.0917-.0932 1.3594.3898.2678.483.0932 1.0917-.3898 1.3594l-3.7107 2.057a1.0197 1.0197 0 01-.182.0786 1.0755 1.0755 0 01-.102.0265.9467.9467 0 01-.0641.011A1.0332 1.0332 0 017 15l.0768-.0027a.9957.9957 0 01-.043.0023L7 15a1.0181 1.0181 0 01-.148-.0109 1.1366 1.1366 0 01-.1047-.0213 1.2798 1.2798 0 01-.104-.0333 1.2704 1.2704 0 01-.0552-.0232.8262.8262 0 01-.0462-.0222.9982.9982 0 01-.1828-.1215.8005.8005 0 01-.042-.0368 1.2913 1.2913 0 01-.0769-.0803.9962.9962 0 01-.1149-.1657l.0495.0802a1.0007 1.0007 0 01-.041-.0649l-.0084-.0153-2.0569-3.7107c-.2677-.483-.0932-1.0917.3898-1.3594.483-.2678 1.0917-.0932 1.3594.3898l.7683 1.3875C7.668 8.724 10.1326 7 13 7z" /></g></svg>
);

export const Undo24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Undo24Svg} {...rest} style={style} />;
}
