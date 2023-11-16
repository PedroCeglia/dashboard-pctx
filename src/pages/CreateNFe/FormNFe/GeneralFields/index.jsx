import InputField from "../../../../components/InputField";
import InputSelect from "../../../../components/InputSelect";

import { FormFieldsContentStyle, FormFieldsContainerStyle } from "../style";

export default function GeneralFields() {
  const documentType = [
    { id: 0, title: "Nota de Entrada" },
    { id: 1, title: "Nota de Saida" },
  ];
  const localDestino = [
    { id: 0, title: "Operação Interna" },
    { id: 1, title: "Peração Interestadual" },
    { id: 2, title: "Operação com Exterior" },
  ];
  const finalidadeEmissao = [
    { id: 0, title: "Normal" },
    { id: 1, title: "Complementar" },
    { id: 2, title: "Nota de Ajuste" },
    { id: 3, title: "Devolução" },
  ];
  const consumidorFinal = [
    { id: 0, title: "Normal" },
    { id: 1, title: "Consumidor final" },
  ];

  const presencaComprador = [
    { id: 0, title: "Não se aplica " },
    { id: 1, title: "Operação presencial" },
    { id: 2, title: "Operação não presencial, pela Internet" },
    { id: 3, title: "Operação não presencial, Teleatendimento" },
    { id: 4, title: "NFC-e em operação com entrega em domicílio" },
    { id: 5, title: "Operação não presencial, outros" },
  ];

  return (
    <FormFieldsContainerStyle>
      <h2>Informações Gerais</h2>
      <FormFieldsContentStyle>
        <InputField
          labelText={"Natureza da Operação"}
          id={"create-nfe-general-field-natureza_operacao1"}
          placeholder={"Natureza da Operação"}
        />
        <InputField
          labelText={"Data de Emissão"}
          id={"create-nfe-general-field-data-emissao"}
          placeholder={""}
          type="date"
        />
      </FormFieldsContentStyle>

      <FormFieldsContentStyle>
        <InputSelect
          placeHolder="Tipo Documento"
          listaDeOpcoes={documentType}
        />
        <InputSelect placeHolder="Local Destino" listaDeOpcoes={localDestino} />
        <InputSelect
          placeHolder="Finalidade da Emissão"
          listaDeOpcoes={finalidadeEmissao}
        />
        <InputSelect
          placeHolder="Consumidor Final"
          listaDeOpcoes={consumidorFinal}
        />
        <InputSelect
          placeHolder="Presença do Comprador"
          listaDeOpcoes={presencaComprador}
        />
      </FormFieldsContentStyle>
    </FormFieldsContainerStyle>
  );
}
