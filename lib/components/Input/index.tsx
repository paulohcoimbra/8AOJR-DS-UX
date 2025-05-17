import React, { ReactNode } from 'react';
import { DSTypography_paragraph } from "../../utils/typography";
import { Container, InputContainer } from './styled';

export interface DefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    rightIcon?: ReactNode;
    errorMessage?: string;
  }

export function Input({ labelText, rightIcon, errorMessage, ...props} : DefaultInputProps) {
  return <Container>
          {labelText ? 
            <label htmlFor="">
              <DSTypography_paragraph>{labelText}</DSTypography_paragraph>
            </label>
          : ""}
          <InputContainer>
            <input {...props} />
            {rightIcon ? rightIcon : ""}
          </InputContainer>
          {errorMessage && (
            <DSTypography_paragraph role="alert">
              {errorMessage}
            </DSTypography_paragraph>
          )}
        </Container>
}