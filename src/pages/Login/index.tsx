import { Container } from "./styled";
import { Input } from "../../../lib/components/Input";
import { Button } from "../../../lib/components/Button";
import { LockIcon } from "../../../lib/components/Icons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  
  const validLogin = {
    email: "email@email.com",
    password: "1234"
  }

  const initialState = {
    email: "",
    emailValidation: "",
    password: "",
    passwordValidation: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const text = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [field]: text,
      [`${field}Validation`]: "",
    }));
  }

  const handleSubmit = () => {
    const currentState = {
      ...formData,
      passwordValidation: "",
      emailValidation: ""
    };

    console.log(currentState)

    if(currentState["password"] !== validLogin["password"]) {
      currentState["passwordValidation"] = "Senha incorreta";
    } 

    if(currentState["email"] !== validLogin["email"]) {
      currentState["emailValidation"] = "Informe um e-mail válido";
    }

    if(currentState["emailValidation"] || currentState["passwordValidation"]) {
      setFormData(currentState);
      return;
    }
    
    redirect("home");
  }

  function redirect(page: string) {
    console.log(`Redirecting to ${page}`);
    navigate(`../${page}`);
  }

  return <Container>
            <Input labelText="E-mail" type="email" name="email" placeholder="Digite seu e-mail" onChange={handleTextChange} errorMessage={formData["emailValidation"]} />
            <Input labelText="Senha" type="password" name="password" placeholder="Informe sua senha" onChange={handleTextChange} errorMessage={formData["passwordValidation"]} rightIcon={<LockIcon/>} />
            <Button text="Entrar" onClick={handleSubmit} buttonStyle="primary" />
            <Button buttonStyle="outlined" text="Registrar" onClick={() => redirect("/register")}/>
            <Button buttonStyle="flat" text="Esqueci Minha Senha" onClick={() => redirect("/recover")} />
        </Container>
}