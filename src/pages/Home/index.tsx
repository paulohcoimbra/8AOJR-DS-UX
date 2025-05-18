import { useNavigate } from "react-router-dom";
import { DSTypography_h1 } from "../../../lib/utils/typography";
import { Container } from "./styled";
import { Button } from "../../../lib/components/Button";

export function Home() {
  const navigate = useNavigate();

  const handleRetornarLogin = () => {
    navigate("../signin")
  }

  return <Container>
    <DSTypography_h1>Home</DSTypography_h1>
    <Button buttonStyle='flat' text="Retornar ao Signin" onClick={handleRetornarLogin} />
  </Container>
}