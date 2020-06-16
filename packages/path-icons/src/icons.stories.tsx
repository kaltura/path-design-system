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
    className: string;
}

const icons16List: string[] = [
    'ArrowLeft16Icon',
    'Checkmark16Icon',
    'ConnectingArrow16Icon',
    'Home16Icon',
    'Plus16Icon',
    'Refresh16Icon',
];

const icons24List: string[] = [
    'Api24Icon',
    'Bold24Icon',
    'ChevronRight24Icon',
    'Close24Icon',
    'Duplicate24Icon',
    'Exit24Icon',
    'Film24Icon',
    'Freeze24Icon',
    'Gear24Icon',
    'Globe24Icon',
    'Image24Icon',
    'Interaction24Icon',
    'Italic24Icon',
    'Loop24Icon',
    'Magnet24Icon',
    'Map24Icon',
    'Minus24Icon',
    'NoAccess24Icon',
    'Pencil24Icon',
    'Play24Icon',
    'PlayFull24Icon',
    'Plus24Icon',
    'Redo24Icon',
    'Search24Icon',
    'SpinnerBright24Icon',
    'SpinnerDark24Icon',
    'Target24Icon',
    'TimeTimeline24Icon',
    'Trash24Icon',
    'Underline24Icon',
    'Undo24Icon',
    'Upload24Icon',
    'Video24Icon',
    'Waveform24Icon',
    'ZoomIn24Icon',
    'ZoomOut24Icon',
];
const dartBackground = [
    'SpinnerDark24Icon',
];

const { Search } = Input;

const IconWrapper = (props: { component: IconComponent<IconProps> }) => {
    const Icon = props.component;
    return <Icon className="icon"/>;
};

const IconsGroup = (props: { iconsList: IconsComponentsList[] }) => {
    const { iconsList } = props;
    const copyIcon = (iconName: string) => message.success(`<${iconName}/> copied 🎉`);

    return (
        <ul className="icons-group-content">
            {iconsList.map((item: IconsComponentsList) => (
                <li key={item.name} className={item.className}>
                    <CopyToClipboard text={item.copyText} onCopy={() => copyIcon(item.name)}>
                        <div className="icons-group-item">
                            <IconWrapper key={item.name} component={item.component}/>
                            <span className="icon-label">{item.name}</span>
                        </div>
                    </CopyToClipboard>
                </li>
            ))}
        </ul>
    );
};

export const Library = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm((event.target as any).value || '');
    };
    const getFilteredIconsList = (list: string[]): IconsComponentsList[] => {
        const result = !searchTerm
            ? list
            : list.filter(icon => icon.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

        return result.map(icon => ({
            name: icon,
            copyText: `<${icon}/>`,
            component: IconsList[icon],
            className: dartBackground.includes(icon) ? 'bg-dark' : ''
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
                <IconsGroup iconsList={icons16}/>
            </section>

            <section className="icons-group">
                <h2>24px</h2>
                <IconsGroup iconsList={icons24}/>
            </section>
        </main>
    );
};
