import { useState } from "react";
import { FlatButton } from "../../../lib/components/FlatButton";
import { Input } from "../../../lib/components/Input";
import { PrimaryButton } from "../../../lib/components/PrimaryButton";
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
              <PrimaryButton text="Enviar" onClick={handleSend}/>
            </>
    :
    <>
      <p>
        As intruções para recuperação da senha foram enviadas por email
      </p>
      <FlatButton text="Voltar A Tela De Login" onClick={handleBackToLogin} />
    </>
    }
  </Container>
}