import { DSTypography_h1, DSTypography_h3 } from "../../../lib/utils/typography";
import { AvocadoIcon } from '../Icons';
import { Container } from "./styled";

export function AppTitle() {
  return <Container>
    <AvocadoIcon/>
    <DSTypography_h1>Avocado</DSTypography_h1>
    <DSTypography_h3>Eat avocado every day</DSTypography_h3>
  </Container>
}