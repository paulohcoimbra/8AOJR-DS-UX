import React, { ReactNode } from 'react';
import { Container } from './styled';
import { DSTypography_button } from '../../utils/typography';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    text: string;
    buttonStyle: "primary" | "outlined" | "flat";
  }

export function Button({ leftIcon, rightIcon, text, ...props } : ButtonProps) {
  return <Container {...props}>
    { leftIcon && leftIcon }
        <DSTypography_button>
          {text}
        </DSTypography_button>
    { rightIcon && rightIcon }
  </Container>
}