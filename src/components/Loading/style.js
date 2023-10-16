import styled from "styled-components";

export const LoadingStyle = styled.div`
  display: ${({isLoading}) => isLoading ? "flex" : "none"} !important;
  justify-content: center;
  align-items: center;
  height: 100%; /* Define a altura da tela inteira */

  div {
    border: 4px solid rgba(255, 255, 255, 0.3); /* Cor e espessura da borda do spinner */
    border-top: 4px solid #3498db; /* Cor da borda superior do spinner */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite; /* Animação de rotação */

  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
