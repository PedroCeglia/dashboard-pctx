import TotalAmount from "./TotalAmount";

export default function ValidateResponse(){
    return(
        <div>
            <h2>Informações da Nota Fiscal</h2>
            <TotalAmount/>
            <>Produtos</>
            <>total</>
            <button>Validar Nota</button>
        </div>
    )
}