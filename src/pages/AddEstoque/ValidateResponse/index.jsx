import EmitenteRemetente from "./EmitenteRemetente";
import { ValidateResponseStyle } from "./style";

export default function ValidateResponse(){
    return(
        <ValidateResponseStyle>
            <h2>Informações da Nota Fiscal</h2>
            <EmitenteRemetente/>
            <>Produtos</>
            <>total</>
            <button>Validar Nota</button>
        </ValidateResponseStyle>
    )
}