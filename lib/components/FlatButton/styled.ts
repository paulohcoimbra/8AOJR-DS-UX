import { DSTypography_button } from '../../utils/typography';
import { DSColors } from '../../utils/colors';
import { DSPaddings } from '../../utils/padding';
import { DSCornerRadius } from '../../utils/cornerRadius';

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${DSColors.white[0]};
  border-radius: ${DSCornerRadius.r2} 0px ${DSCornerRadius.r2} 0px;
  flex: 1 1 auto;
  margin: 4px 0px;
  
  &:hover {
    background-color: ${DSColors.white[75]};
    cursor: pointer;
  }

  & > button {
    width: 100%;
    background-color: ${DSColors.white[0]};
    padding: ${DSPaddings.p2};
    color: ${DSColors.secondary[900]};
    font-family: ${DSTypography_button};
  }
`