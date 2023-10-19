import { ValidateResponseStyle } from "./style";

import EmitenteRemetente from "./EmitenteRemetente";
import ProductsToAdd from "./ProductsToAdd";
import TotalAmount from "./TotalAmount";


export default function ValidateResponse(){
    return(
        <ValidateResponseStyle>
            <h2>Informações da Nota Fiscal</h2>
            <EmitenteRemetente/>
            <ProductsToAdd/>
            <TotalAmount/>
            <button>Validar Nota</button>
        </ValidateResponseStyle>
    )
}