import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss'
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

// const getUseStyles = (props: any) => createUseStyles<string>((theme: any) => ({
//     btn: {
//         color: theme.colorPrimary,
//         border: props.borderless ? 'none' : '1px solid red'
//     },
//     label: {
//         fontWeight: 'bold'
//     }
// }));

const useStyles = createUseStyles({
    btn: {
        color: (theme: any) => theme.colorPrimary,
        border: (props: ButtonProps) => props.borderless ? 'none' : '1px solid red'
    },
    label: {
        fontWeight: 'bold'
    }
});

export function Button(props: ButtonProps) {
    const theme = useTheme();
    // const classes = getUseStyles(props)(theme);
    const classes = useStyles({...props, ...theme});
    const {label, disabled, onClick} = props;
    return (
        <AntButton className={classes.btn} disabled={disabled} onClick={onClick}>{label}</AntButton>
    )
}



