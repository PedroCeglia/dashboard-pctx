import Table from "../../../../components/Table";
import { EmitenteRemetenteStyle } from "./style";

export default function EmitenteRemetente() {
  const listaEmitenteRemetente = [
    {
      type: "emitente",
      cnpj: "12345678000100",
      iE: "123456789",
      cep: "12345-678",
      uf: "UF",
      cMun: "1234567",
      cPais: "1058",
      xCpl: "Cidade Esportiva",
      xLgr: "Rua das Esportes, 123",
      xMun: "Estado",
      xPais: "Brasil",
      xNome: "SportsStore Ltda.",
    },
    {
      type: "remetente",
      cnpj: "98765432000199",
      iE: "987654321",
      cep: "98765-432",
      uf: "UF",
      cMun: "9876543",
      cPais: "1058",
      xCpl: "Bairro Esportivo",
      xLgr: "Avenida do Futebol, 456",
      xMun: "Estado",
      xPais: "Brasil",
      xNome: "SportsWear Comércio e Distribuição",
    },
  ];

  return (
    <EmitenteRemetenteStyle>
      <Table
        tableList={listaEmitenteRemetente}
        hasFooter={false}
        hasCaption={false}
        hasFilter={false}
        hasSelectItem={false}
      />
    </EmitenteRemetenteStyle>
  );
}
