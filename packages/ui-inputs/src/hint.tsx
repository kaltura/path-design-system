import * as React from 'react';
import Trigger, { BuildInPlacements } from 'rc-trigger';
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

const autoAdjustOverflow = { adjustX: true, adjustY: true };
const targetOffset = [0, 0];

const placementMap: BuildInPlacements = {
    left: {
        points: ['cr', 'cl'],
        offset: [-12, 0],
        overflow: autoAdjustOverflow,
        targetOffset,
    },
    right: {
        points: ['cl', 'cr'],
        offset: [12, 0],
        overflow: autoAdjustOverflow,
        targetOffset,
    },
    top: {
        points: ['bc', 'tc'],
        offset: [0, -12],
        overflow: autoAdjustOverflow,
        targetOffset,
    },
    bottom: {
        points: ['tc', 'bc'],
        offset: [0, 12],
        overflow: autoAdjustOverflow,
        targetOffset,
    },
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
    },
    arrowUp: {
        borderWidth: '7px 6px 0 6px',
        borderColor: `transparent transparent ${theme.colors.grayscale1} transparent`,
    },
    arrowDown: {
        borderWidth: '0 6px 7px 6px',
        borderColor: `${theme.colors.grayscale1} transparent transparent transparent`,
    },
    arrowLeft: {
        borderWidth: '6px 7px 6px 0',
        borderColor: `transparent ${theme.colors.grayscale1} transparent transparent`,
    },
    arrowRight: {
        borderWidth: '6px 0 6px 7px',
        borderColor: `transparent transparent transparent ${theme.colors.grayscale1}`,
    },
    hintContainer: {
        position: 'relative',
    }
}), { theming });


export function Hint(props: HintProps) {
    const { content, children, direction = 'top' } = props;
    const classes = useStyles(props);
    const hintArrowClass = classNames({ [classes.arrow]: true });
    const getPopupElement = () => {
        return <div className={classes.hintContainer}>
            <div className={hintArrowClass} key="arrow"></div>
            <div className={classes.hintContent} key="content">{content}</div>
        </div>;
    };
    const getPopupClassNameFromAlign = (e: any) => {
        console.dir(e);
    };
    return (
        <Trigger
            action={['click']}
            popup={getPopupElement}
            popupPlacement={direction}
            builtinPlacements={placementMap}
            getPopupClassNameFromAlign={getPopupClassNameFromAlign}
        >
            <span>{children}</span>
        </Trigger>
    );
}
