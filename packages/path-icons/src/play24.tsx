import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Play24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M19.2674 9.8403L8.7597 3.711A2.5 2.5 0 007.5 3.3703c-1.3807 0-2.5 1.1193-2.5 2.5v12.259a2.5 2.5 0 00.3406 1.2597c.6957 1.1926 2.2264 1.5954 3.419.8997l10.5078-6.1295a2.5 2.5 0 00.8997-.8997c.6957-1.1927.2929-2.7235-.8997-3.4192zm-.8278 2.4114a.5.5 0 01-.18.18L7.752 18.5612A.5.5 0 017 18.1292V5.8704a.5.5 0 01.752-.4319l10.5076 6.1295a.5.5 0 01.18.6838z" /></svg>
);

export const Play24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Play24Svg} {...rest} style={style} />;
}
