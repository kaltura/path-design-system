import * as React from 'react';
import { Tooltip } from 'antd';
// import { createUseStyles, theming } from './theme';
// import { Theme } from './theme/theme';
// import classNames from 'classnames';

export enum HintDirection {
    top = 'top',
    bottom = 'bottom',
    right = 'right',
    left = 'left',
}

export interface HintProps {
    direction?: HintDirection;
    container?: any;
    maxWidth?: number;
    content?: string | React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
}

// const useStyles = createUseStyles((theme: Theme) => ({}), { theming });

export function Hint(props: HintProps) {
    const { content, children } = props;
    // const classes = useStyles(props);
    // const hintClass = classNames({});
    const getPopupContainer = () => props.container.current as any;
    console.warn(children);
    return (
        <Tooltip title={content} placement="bottom" getPopupContainer={getPopupContainer} arrowPointAtCenter={true}>
            {children}
        </Tooltip>
    );
}
