import * as React from 'react';
import {createUseStyles} from 'react-jss';
import {Button as AntButton} from 'antd';


export interface ButtonProps {
    label?: string;
    icon?: any;
    disabled?: boolean;
    borderless?: boolean;
    isActive?: boolean;
    onClick?: () => void;
    isProcessing?: boolean;
    isCTA?: boolean;
}

const useStyles = createUseStyles({
    btn: {
        color: 'green',
    }
});

export function Button(props: ButtonProps) {
    const classes = useStyles();

    const {label, disabled, onClick} = props;
    return (
        <AntButton className={classes.btn} disabled={disabled} onClick={onClick}>{label}</AntButton>
    )
}
