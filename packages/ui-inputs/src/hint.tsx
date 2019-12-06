import * as React from 'react';
import Trigger from 'rc-trigger';
import { createUseStyles, theming } from './theme';
import { Theme } from './theme/theme';
import 'rc-trigger/assets/index.css';

const classNames = require('classnames');

export type HintDirection = 'top' | 'bottom' | 'right' | 'left';

export interface HintProps {
    direction?: HintDirection;
    container?: any;
    maxWidth?: number;
    content?: string | React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
}

const placementMap: any = {
    left: {
        points: ['cr', 'cl'],
        offset: [-12, 0],
        overflow: { adjustX: true, adjustY: true },
    },
    right: {
        points: ['cl', 'cr'],
        offset: [12, 0],
        overflow: { adjustX: true, adjustY: true }
    },
    top: {
        points: ['bc', 'tc'],
        offset: [0, -12],
        overflow: { adjustX: true, adjustY: true }
    },
    bottom: {
        points: ['tc', 'bc'],
        offset: [0, 12],
        overflow: { adjustX: true, adjustY: true }
    },
};

const getPlacement = (direction: HintDirection) => {
    if (placementMap.hasOwnProperty(direction)) {
        return placementMap[direction];
    }
    return placementMap.top;
};

const useStyles = createUseStyles((theme: Theme) => ({
    hintContent: {
        backgroundColor: theme.colors.grayscale1,
        color: theme.colors.white,
        borderRadius: '4px',
        padding: '5px 8px',
    },
    arrow: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 6px 7px 6px',
        borderColor: `transparent transparent ${theme.colors.grayscale1} transparent`,
    },
}), { theming });


export function Hint(props: HintProps) {
    const { content, children, direction = 'top' } = props;
    const classes = useStyles(props);
    const hintContentClass = classNames({ [classes.hintContent]: true });
    const hintArrowClass = classNames({ [classes.arrow]: true });
    const getPopupElement = () => {
        return [
            <div className={hintArrowClass}></div>,
            <div className={hintContentClass}>{content}</div>
        ];
    };
    return (
        <Trigger
            action={['hover']}
            forceRender={true}
            popup={getPopupElement}
            popupAlign={getPlacement(direction)}
        >
            <span>{children}</span>
        </Trigger>
    );
}
