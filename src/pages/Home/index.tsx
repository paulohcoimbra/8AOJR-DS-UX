import { useNavigate } from "react-router-dom";
import { FlatButton } from "../../../lib/components/FlatButton";
import { DSTypography_h1 } from "../../../lib/utils/typography";
import { Container } from "./styled";

export function Home() {
  const navigate = useNavigate();

  const handleRetornarLogin = () => {
    navigate("../signin")
  }

  return <Container>
    <DSTypography_h1>Home</DSTypography_h1>
    <FlatButton text="Retornar ao Signin" onClick={handleRetornarLogin} />
  </Container>
}