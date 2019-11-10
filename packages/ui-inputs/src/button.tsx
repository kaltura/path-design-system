import * as React from 'react'
import { Button as AntButton } from 'antd';


export interface ButtonProps {
  label: string;
  onClick: () => void
}

export function Button(props: ButtonProps) {
    const { label, onClick } = props;
    return (
      <AntButton onClick={onClick}>{label}</AntButton>
    )
}
