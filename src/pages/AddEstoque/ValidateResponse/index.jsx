import { ValidateResponseStyle } from "./style";

import EmitenteRemetente from "./EmitenteRemetente";
import ProductsToAdd from "./ProductsToAdd";
import TotalAmount from "./TotalAmount";
import { useAddEstoqueContext } from "../../../contexts/AddEstoque";


export default function ValidateResponse(){
    const {NFe} = useAddEstoqueContext() 
    return(
        <ValidateResponseStyle>
            <h2>Informações da Nota Fiscal</h2>
            <EmitenteRemetente
                emitente={NFe.emitente}
                destinatario={NFe.destinatario}
            />
            <ProductsToAdd
                productsList={NFe.productsList}
            />
            <TotalAmount
                fatura={NFe.fatura}
            />
            <button>Validar Nota</button>
        </ValidateResponseStyle>
    )
}