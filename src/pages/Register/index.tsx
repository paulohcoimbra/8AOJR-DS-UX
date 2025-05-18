import { useState } from "react";
import { Input } from "../../../lib/components/Input";
import { Button } from "../../../lib/components/Button";
import { Container } from "./styled";
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
      <Button text="Criar" onClick={handleCreate} buttonStyle="primary"/>
    </Container>
    : <Container>
      <p>Conta criada com sucesso!</p>
      <Button buttonStyle="flat" text="Voltar A Tela De Login" onClick={handleBackToLogin} />
    </Container>}
  </>
}