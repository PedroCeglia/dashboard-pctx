import { useState } from "react";
import { AuthSingInStyle, InputContainerStyle } from "./style";
import { Link } from "react-router-dom";

export default function AuthSingIn({ isCreating }) {

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");

  function createAccount() {
    if (verifyNameField())
      if (verifyEmailField())
        if (verifyPasswordField())
          if (verifyPasswordConfirmField()) console.log("OIOI 1");
  }
  function loginAccount() {
    if (verifyEmailField()) if (verifyPasswordField()) console.log("OIOI 1");
  }

  function verifyNameField() {
    if (nameField.length < 4) return;
    return true;
  }
  function verifyEmailField() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailField);
    if (!isValid) return;
    return true;
  }
  function verifyPasswordField() {
    if (passwordField.length < 6) return;
    return true;
  }
  function verifyPasswordConfirmField() {
    if (passwordField !== confirmPasswordField) return;
    return true;
  }

  return (
    <AuthSingInStyle>
      <form>
        {isCreating && (
          <InputContainerStyle>
            <label>Digite o seu Nome</label>
            <input
              type="text"
              placeholder="Seu Nome Aqui"
              onChange={(e) => setNameField(e.target.value)}
              value={nameField}
            />
          </InputContainerStyle>
        )}
        <InputContainerStyle>
          <label>Digite o seu Email</label>
          <input
            type="email"
            placeholder="seuemail@aqui.com"
            onChange={(e) => setEmailField(e.target.value)}
            value={emailField}
          />
        </InputContainerStyle>
        <InputContainerStyle>
          <label>Crie sua senha</label>
          <input
            type="password"
            placeholder="***********"
            onChange={(e) => setPasswordField(e.target.value)}
            value={passwordField}
          />
        </InputContainerStyle>

        {isCreating && (
          <InputContainerStyle>
            <label>Confirme sua senha</label>
            <input
              type="password"
              placeholder="***********"
              onChange={(e) => setConfirmPasswordField(e.target.value)}
              value={confirmPasswordField}
            />
          </InputContainerStyle>
        )}
      </form>

      <button onClick={isCreating ? createAccount : loginAccount}>
        Criar Conta
      </button>
      <Link to={isCreating ? "/auth" : "/auth/sing-in"}>
        {isCreating ? "Você Ja possui uma conta" : "Não Pussue uma conta?"}
      </Link>
    </AuthSingInStyle>
  );
}
