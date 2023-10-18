import TotalAmount from "./TotalAmount";
import { ValidateResponseStyle } from "./style";

export default function ValidateResponse(){
    return(
        <ValidateResponseStyle>
            <h2>Informações da Nota Fiscal</h2>
            <TotalAmount/>
            <>Produtos</>
            <>total</>
            <button>Validar Nota</button>
        </ValidateResponseStyle>
    )
}