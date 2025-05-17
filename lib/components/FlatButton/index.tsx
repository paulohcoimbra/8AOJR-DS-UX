import React, { ReactNode } from 'react';
import { Container } from './styled';
import { DSTypography_button } from '../../utils/typography';

export interface FlatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    text: string;
  }

export function FlatButton({ leftIcon, rightIcon, text, ...props } : FlatButtonProps) {
  return <Container>
    { leftIcon && leftIcon}
      <button {...props}>
        <DSTypography_button>
          {text}
        </DSTypography_button>
      </button>
    { rightIcon && rightIcon}
  </Container>
}