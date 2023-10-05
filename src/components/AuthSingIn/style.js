import styled from "styled-components";

export const AuthSingInStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);

  form {
    padding: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;

  }

  button {
    padding: 10px 20px;
    border-radius: 10px;
    min-width: 200px;
    max-width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    margin-top: 20px;
    background-color: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.9);
  }
  a:hover {
    color: rgba(0, 0, 200, 0.4);
  }


`;

export const InputContainerStyle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    align-self: flex-start;
    font-size: 1.5em;
    margin: 20px 0 10px;
  }
  input {
    width: 100%;
    min-width: 250px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    padding: 10px 20px;
    font-size: 1.1em;
  }
`;
