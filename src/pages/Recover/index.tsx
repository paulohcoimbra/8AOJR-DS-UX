import { useState } from "react";
import { Input } from "../../../lib/components/Input";
import { Button } from "../../../lib/components/Button";
import { Container } from "./styled";
import { useNavigate } from "react-router-dom";

export function Recover() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const handleSend = () => {
    setState(true);
  }

  const handleBackToLogin = () => {
    navigate("../login")
  }

  return <Container>
    {!state ? <>
              <Input placeholder="Informe seu e-mail para recuperação" />
              <Button text="Enviar" onClick={handleSend} buttonStyle="primary"/>
            </>
    :
    <>
      <p>
        As intruções para recuperação da senha foram enviadas por email
      </p>
      <Button buttonStyle="flat" text="Voltar A Tela De Login" onClick={handleBackToLogin} />
    </>
    }
  </Container>
}