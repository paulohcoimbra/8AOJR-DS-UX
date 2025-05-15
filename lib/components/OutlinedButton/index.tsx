import { ReactNode } from 'react';
import { Container } from './styled';
import { DSTypography_button } from '../../utils/typography';

export interface OutlinedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    text: string;
  }

export function OutlinedButton({ leftIcon, rightIcon, text, ...props } : OutlinedButtonProps) {
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