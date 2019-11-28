/// <reference types="react" />
import { IconComponent, IconProps } from 'antd/lib/icon';
import '../assets/css/styles.css';
declare const _default: {
    title: string;
};
export default _default;
export interface IconsComponentsList {
    name: string;
    copyText: string;
    component: IconComponent<IconProps>;
    className: string;
}
export declare const Library: () => JSX.Element;
