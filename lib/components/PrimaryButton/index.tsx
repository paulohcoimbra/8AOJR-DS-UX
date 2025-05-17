import React, { ReactNode } from 'react';
import { Container } from './styled';
import { DSTypography_button } from '../../utils/typography';

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    text: string;
  }

export function PrimaryButton({ leftIcon, rightIcon, text, ...props } : PrimaryButtonProps) {
  return <Container>
    { leftIcon ? leftIcon : ""}
      <button {...props}>
        <DSTypography_button>
          {text}
        </DSTypography_button>
      </button>
    { rightIcon ? rightIcon : ""}
  </Container>
}