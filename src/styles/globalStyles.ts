import { DSColors } from '../../lib/utils/colors';
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        font-family: 'Roboto', 'sans-serif';
    }

    h1 {
      font-size: 3.43rem;
    }

    h2 {
      font-size: 2.57rem;
    }

    h3 {
      font-size: 2rem;
    }

    body {
        height: 100vh;
        background:rgba(122, 122, 122, 0.25);
    }

    button {
        cursor: pointer;
        border: 0;
    }

    :root {
        --primary: #ED145B;
        --primary-bg: #f1f1f1;
        --white: #FFFFFF;
        --whiteWithOpacity: #FFFFFF40;
        --black: #000000;
    }
`

export const commonFlexPageStyle = `
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;


export const Container = styled.div`
  ${commonFlexPageStyle}
`

export const SignInArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 330px;
  height: 568px;
  padding: 4px;
  border-radius: 8px;
  background: ${DSColors.background[2]};
  gap: 12px;
`