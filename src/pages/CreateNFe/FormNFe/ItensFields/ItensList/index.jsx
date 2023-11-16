import Table from "../../../../../components/Table"
export default function ItensList(){
    const tableList = [
        {
            numeroItem:1,
            codigoProduto:1232,
            descricao:"Cartões de Visita",
            cfop:5923,
            unidadeComercial:"un",
            quantidadeComercial:100,
            valorUnitarioComercial:0.4723,
            valorUnitarioTributavel:0.4723,
            unidadeTributavel:"un",
            codigoNcm:49111090,
            quantidadeTributavel:100,
            valorBruto:47.23,
            icmsSituacaoTributaria:41,
            icmsOrigem:0,
            pisSituacaoTributaria:"07",
            cofinsSituacaoTributaria:"07"
        },
        {
            numeroItem:1,
            codigoProduto:1232,
            descricao:"Produto dois",
            cfop:5923,
            unidadeComercial:"un",
            quantidadeComercial:100,
            valorUnitarioComercial:0.4723,
            valorUnitarioTributavel:0.4723,
            unidadeTributavel:"un",
            codigoNcm:49111090,
            quantidadeTributavel:100,
            valorBruto:47.23,
            icmsSituacaoTributaria:41,
            icmsOrigem:0,
            pisSituacaoTributaria:"07",
            cofinsSituacaoTributaria:"07"
        },
    ]
    return(
        <div>
            <Table
                tableList={tableList}
            />
        </div>
    )
}