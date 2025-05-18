import { DSCornerRadius } from '../../utils/cornerRadius';
import { DSColors } from '../../utils/colors';
import styled from "styled-components";
import { ButtonProps } from '.';

export const Container = styled.button<Pick<ButtonProps, "buttonStyle">>`
  display: flex;
  min-width: 148px;
  min-height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: ${DSCornerRadius.r2} 0px ${DSCornerRadius.r2} 0px;
  box-shadow: ${({buttonStyle}) => buttonStyle == 'flat' ? '' : '3px 5px 5px rgba(0, 0, 0, 0.25)'};
  margin: 4px 0px;
  flex: ${({ buttonStyle }) => buttonStyle == 'flat' ? '1 1 auto' : ''};

  background-color: ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case 'primary':
        return DSColors.primary[500];
      case 'outlined':
        return DSColors.white[100];
      case 'flat':
        return DSColors.white[0];
      default:
        return DSColors.primary[500];
    }
  }};

  color: ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case 'primary':
        return DSColors.white[100];
      case 'outlined':
        return DSColors.secondary[500];
      case 'flat':
        return DSColors.secondary[500];
    }
  }};
  
  border: ${({ buttonStyle }) =>
    buttonStyle === 'outlined'
      ? `2px solid ${DSColors.secondary[900]}`
      : 'none'};

  &:hover {
    background-color: ${({ buttonStyle }) => {
      switch (buttonStyle) {
        case 'primary':
          return DSColors.primary[900];
        case 'outlined':
          return DSColors.white[75];
        case 'flat':
          return DSColors.white[75];
        default:
          return DSColors.primary[900];
      }
    }};
    cursor: pointer;
    border: ${({buttonStyle}) => {
      switch (buttonStyle) {
        case 'primary':
          return '';
        case 'outlined':
          return `1px solid ${DSColors.secondary[900]}`;
        case 'flat':
          return '';
      }
    }}
  }
`