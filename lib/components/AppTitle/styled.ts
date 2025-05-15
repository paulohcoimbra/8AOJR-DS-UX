import styled from "styled-components";
import { DSColors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > div {
    width: 100%;
  }

  & > h1 {
    color: ${DSColors.secondary[500]};
  }

  & > h3 {
    color: ${DSColors.primary[500]};
  }
`