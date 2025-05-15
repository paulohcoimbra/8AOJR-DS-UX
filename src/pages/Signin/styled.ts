import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 5px;
  gap: 10px;

  & > hr {
    width: 100%;
    height: 2px;
  }

  & > div {
    display: flex;
    align-items: center;
  }
`