import { Container } from "./styled";
import { PrimaryButton } from "../../../lib/components/PrimaryButton";
import { OutlinedButton } from "../../../lib/components/OutlinedButton";
import { FlatButton } from "../../../lib/components/FlatButton";
import { GoogleIcon, FacebookIcon } from '../../../lib/components/Icons';
import { useNavigate } from "react-router-dom";
import { DSTypography_paragraph } from "../../../lib/utils/typography";

export function Signin() {
  const navigate = useNavigate();
  
  function handleClick(page: string) {
    navigate(`/${page}`, { replace: true });
  }

  return <Container>
            <OutlinedButton text="Entrar Com Sua Conta Google" leftIcon={<GoogleIcon/>} onClick={() => handleClick("google")} />
            <OutlinedButton text="Entrar Com Sua Conta Facebook" leftIcon={<FacebookIcon/>} onClick={() => handleClick("facebook")}/>
            <hr />
            <PrimaryButton text="Entrar Com Seu Email" onClick={() => handleClick("login")}/>
            <div>
              <DSTypography_paragraph>Não tem uma conta?</DSTypography_paragraph>
              <FlatButton text="Registre-se" onClick={() => handleClick("register")}/>
            </div>
        </Container>
}