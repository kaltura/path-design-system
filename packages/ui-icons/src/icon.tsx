import { Icon as AntdIcon } from 'antd';
import * as React from 'react';
import { CustomIconComponentProps, IconProps as AntdIconProps } from 'antd/lib/icon';

export interface IconProps extends AntdIconProps {
    icon: React.FunctionComponent<CustomIconComponentProps>,
}

export const Icon = (props: IconProps) => <AntdIcon component={props.icon} {...props} />;
