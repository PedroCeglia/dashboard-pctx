import { InputSelectStyle } from "./style";

export default function InputSelect({ listaDeOpcoes = [], placeHolder="" }) {
  const optionsList =
    listaDeOpcoes.length == 0
      ? [
          { id: "opcao1", title: "Opção 1" },
          { id: "opcao2", title: "Opção 2" },
          { id: "opcao3", title: "Opção 3" },
          { id: "opcao4", title: "Opção 4" },
        ]
      : listaDeOpcoes;
  return (
    <InputSelectStyle>
        <option value={0}>{placeHolder}</option>
      {optionsList.map((option) => (
        <option value={option.id}> {option.title} </option>
      ))}
    </InputSelectStyle>
  );
}
