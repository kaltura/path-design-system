import * as React from 'react'
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

export function Button(props: ButtonProps) {
    const {label, disabled, onClick} = props;
    return (
        <AntButton disabled={disabled} onClick={onClick}>{label}</AntButton>
    )
}
