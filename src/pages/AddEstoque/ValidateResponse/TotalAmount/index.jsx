import { TotalAmountStyle } from "./style"
import Table from "../../../../components/Table"
export default function TotalAmount(){

    const tableList = [
        {
            "vProd": "2850.00",
            "vFrete": "200.00",
            "vNF": "3050.00"
        }
    ]

    return(
        <TotalAmountStyle>
            <Table tableList={tableList}/>
        </TotalAmountStyle>
    )
}