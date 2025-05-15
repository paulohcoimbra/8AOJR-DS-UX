import { useState } from "react";
import { Input } from "../../../lib/components/Input";
import { PrimaryButton } from "../../../lib/components/PrimaryButton";
import { Container } from "./styled";
import { FlatButton } from "../../../lib/components/FlatButton";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const handleCreate = () => {
    setState(true);
  }

  const handleBackToLogin = () => {
    navigate("../login");
  }

  return   <>
    {!state ? 
    <Container>
      <Input labelText="Nome" type="text"/>
      <Input labelText="E-mail" type="email" />
      <Input labelText="Senha" type="password" />
      <Input labelText="Confirme a senha" type="password" />
      <PrimaryButton text="Criar" onClick={handleCreate} />
    </Container>
    : <Container>
      <p>Conta criada com sucesso!</p>
      <FlatButton text="Voltar A Tela De Login" onClick={handleBackToLogin} />
    </Container>}
  </>
}