import { Container } from "./styled";
import { Button } from "../../../lib/components/Button";
import { GoogleIcon, FacebookIcon } from '../../../lib/components/Icons';
import { useNavigate } from "react-router-dom";
import { DSTypography_paragraph } from "../../../lib/utils/typography";

export function Signin() {
  const navigate = useNavigate();
  
  function handleClick(page: string) {
    navigate(`/${page}`, { replace: true });
  }

  return <Container>
            <Button buttonStyle="outlined" text="Entrar Com Sua Conta Google" leftIcon={<GoogleIcon/>} onClick={() => handleClick("google")} />
            <Button buttonStyle="outlined" text="Entrar Com Sua Conta Facebook" leftIcon={<FacebookIcon/>} onClick={() => handleClick("facebook")}/>
            <hr />
            <Button text="Entrar Com Seu Email" onClick={() => handleClick("login")} buttonStyle='primary'/>
            <div>
              <DSTypography_paragraph>Não tem uma conta?</DSTypography_paragraph>
              <Button buttonStyle="flat" text="Registre-se" onClick={() => handleClick("register")}/>
            </div>
        </Container>
}