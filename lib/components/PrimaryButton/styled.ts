import { DSTypography_button } from '../../utils/typography';
import { DSCornerRadius } from '../../utils/cornerRadius';
import { DSColors } from '../../utils/colors';
import { DSPaddings } from '../../utils/padding';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 148px;
  min-height: 44px;
  background-color: ${DSColors.primary[500]};
  justify-content: center;
  align-items: center;
  border-radius: ${DSCornerRadius.r2} 0px ${DSCornerRadius.r2} 0px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.25);
  margin: 4px 0px;
  
  &:hover {
    background-color: ${DSColors.primary[900]};
    cursor: pointer;
  }

  & > button {
    background-color: ${DSColors.white[0]};
    width: 100%;
    padding: ${DSPaddings.p2};
    color: ${DSColors.white[100]};
    font-family: ${DSTypography_button};
  }
`