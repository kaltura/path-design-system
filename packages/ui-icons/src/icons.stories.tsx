import * as React from 'react';
import * as IconsList from './index';
import { Input, message } from 'antd';
import { IconComponent, IconProps } from 'antd/lib/icon';
// @ts-ignore https://github.com/nkbt/react-copy-to-clipboard/issues/105
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../assets/css/styles.css';

export default {
    title: 'Icons',
};

export interface IconsComponentsList {
    name: string;
    copyText: string;
    component: IconComponent<IconProps>;
}

const icons16List: string[] = [
    'ArrowLeft16Icon',
];

const icons24List: string[] = [
    'Minus24Icon',
    'Plus24Icon',
    'Redo24Icon',
    'Search24Icon',
    'SpinnerBright24Icon',
    'SpinnerDark24Icon',
    'Target24Icon',
    'Undo24Icon',
    'Upload24Icon',
    'Video24Icon',
];

const { Search } = Input;

const IconWrapper = (props: IconsComponentsList) => {
    const Icon = props.component;
    const copyIcon = (iconName: string) => message.success(`<${iconName}/> copied 🎉`);
    return (
        <CopyToClipboard text={props.copyText} onCopy={() => copyIcon(props.name)}>
            <Icon className="icon"/>
        </CopyToClipboard>
    )
};

export const Library = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event?.target?.value || '');
    };
    const getFilteredIconsList = (list: string[]): IconsComponentsList[] => {
        const result = !searchTerm
            ? list
            : list.filter(icon => icon.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

        return result.map(icon => ({
            name: icon,
            copyText: `<${icon}/>`,
            component: IconsList[icon],
        }));
    };

    const icons16 = getFilteredIconsList(icons16List);
    const icons24 = getFilteredIconsList(icons24List);

    return (
        <main className="content">
            <h1>Icons</h1>

            <Search
                    placeholder="Search icon here, click icon to copy code"
                    onChange={handleChange}
                    allowClear
            />

            <section className="icons-group">
                <h2>16px</h2>
                <div className="icons-group-content">
                    {icons16.map((item: IconsComponentsList) => <IconWrapper key={item.name} {...item}/>)}
                </div>
            </section>

            <section className="icons-group">
                <h2>24px</h2>
                <div className="icons-group-content">
                    {icons24.map((item: IconsComponentsList) => <IconWrapper key={item.name} {...item}/>)}
                </div>
            </section>
        </main>
    );
};

Library.story = {
    title: 'Library',
};
