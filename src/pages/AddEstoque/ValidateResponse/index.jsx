import { ValidateResponseStyle } from "./style";

import EmitenteRemetente from "./EmitenteRemetente";
import ProductsToAdd from "./ProductsToAdd";
import TotalAmount from "./TotalAmount";
import { useAddEstoqueContext } from "../../../contexts/AddEstoque";


export default function ValidateResponse(){
    const {NFe} = useAddEstoqueContext() 
    return(
        <ValidateResponseStyle>
            <ProductsToAdd
                productsList={NFe.productsList}
            />

            <button>Validar Nota</button>
        </ValidateResponseStyle>
    )
}