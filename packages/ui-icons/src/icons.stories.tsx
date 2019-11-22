import * as React from 'react';
import '../assets/css/styles.css';
import * as IconsList from './index';
import { message } from 'antd';
// @ts-ignore https://github.com/nkbt/react-copy-to-clipboard/issues/105
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default {
    title: 'Icons',
};

const copyIcon = (iconName: string) => {
    message.success(`<${iconName}/> copied 🎉`);
};

export const Library = () => (
    <main className="content">
        <h1>Icons</h1>

        <section className="icons-group">
            <h2>16px</h2>
            <div className="icons-group-content">
                <CopyToClipboard text="<ArrowLeft16Icon/>" onCopy={() => copyIcon('ArrowLeft16Icon')}>
                    <IconsList.ArrowLeft16Icon className="icon"/>
                </CopyToClipboard>
            </div>
        </section>

        <section className="icons-group">
            <h2>24px</h2>
            <div className="icons-group-content">
                <CopyToClipboard text="<Minus24Icon/>" onCopy={() => copyIcon('Minus24Icon')}>
                    <IconsList.Minus24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<Plus24Icon/>" onCopy={() => copyIcon('Plus24Icon')}>
                    <IconsList.Plus24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<Redo24Icon/>" onCopy={() => copyIcon('Redo24Icon')}>
                    <IconsList.Redo24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<Search24Icon/>" onCopy={() => copyIcon('Search24Icon')}>
                    <IconsList.Search24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<SpinnerBright24Icon/>" onCopy={() => copyIcon('SpinnerBright24Icon')}>
                    <IconsList.SpinnerBright24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<SpinnerDark24Icon/>" onCopy={() => copyIcon('SpinnerDark24Icon')}>
                    <IconsList.SpinnerDark24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<Target24Icon/>" onCopy={() => copyIcon('Target24Icon')}>
                    <IconsList.Target24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<Undo24Icon/>" onCopy={() => copyIcon('Undo24Icon')}>
                    <IconsList.Undo24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<Upload24Icon/>" onCopy={() => copyIcon('Upload24Icon')}>
                    <IconsList.Upload24Icon className="icon"/>
                </CopyToClipboard>
                <CopyToClipboard text="<Video24Icon/>" onCopy={() => copyIcon('Video24Icon')}>
                    <IconsList.Video24Icon className="icon"/>
                </CopyToClipboard>
            </div>
        </section>
    </main>
);
Library.story = {
    title: 'Library'
};
