import * as React from 'react';
import '../assets/css/styles.css';
import * as IconsList from './index';

export default {
    title: 'Icons',
};

export const Library = () => (
    <main className="content">
        <h1>Icons</h1>

        <section className="icons-group">
            <h2>16px</h2>
            <div className="icons-group-content">
                <IconsList.ArrowLeft16Icon className="icon"/>
            </div>
        </section>

        <section className="icons-group">
            <h2>24px</h2>
            <div className="icons-group-content">
                <IconsList.Minus24Icon className="icon"/>
                <IconsList.Plus24Icon className="icon"/>
                <IconsList.Redo24Icon className="icon"/>
                <IconsList.Search24Icon className="icon"/>
                <IconsList.SpinnerBright24Icon className="icon"/>
                <IconsList.SpinnerDark24Icon className="icon"/>
                <IconsList.Target24Icon className="icon"/>
                <IconsList.Undo24Icon className="icon"/>
                <IconsList.Upload24Icon className="icon"/>
                <IconsList.Video24Icon className="icon"/>
            </div>
        </section>
    </main>
);
Library.story = {
    title: 'Library'
};
