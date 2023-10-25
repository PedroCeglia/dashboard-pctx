import { AddEstoqueContainerStyle, AddEstoqueContentStyle } from "./style";
import IntroForm from "./IntroForm";
import ValidateResponse from "./ValidateResponse";
import {useAddEstoqueContext} from "../../contexts/AddEstoque"

export default function AddEstoque() {

  const { isLoadNFe } = useAddEstoqueContext();

  return (
    <AddEstoqueContainerStyle>
        <AddEstoqueContentStyle isLoad={isLoadNFe}>
          {isLoadNFe ? <ValidateResponse /> : <IntroForm />}
        </AddEstoqueContentStyle>
    </AddEstoqueContainerStyle>
  );
}
