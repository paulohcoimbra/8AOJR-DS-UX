import styled from "styled-components";

import { DSPaddings } from "../../utils/padding";
import { DSColors } from "../../utils/colors";
import { DSCornerRadius } from "../../utils/cornerRadius";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${DSPaddings.p1};
  

  & > div {
    width: 100%;
    padding: ${DSPaddings.p3};
    min-height: 44px;
    background-color: ${DSColors.white[75]};
    border-radius: ${DSCornerRadius.r2};
  }

  & > p {
    color: ${DSColors.error.light};
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
      font-family: "Roboto", "sans-serif";
      
      border: 0px;
      background-color: ${DSColors.white[0]};
      width: 100%;

      &:focus {
        outline: none;
      }
    }
`