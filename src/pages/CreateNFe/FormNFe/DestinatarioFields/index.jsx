import InputField from "../../../../components/InputField";
import InputSelect from "../../../../components/InputSelect";
import { FormFieldsContainerStyle, FormFieldsContentStyle } from "../style";

export default function DestinatarioFields() {
    const documentType = [
      { id: 0, title: "CNPJ" },
      { id: 1, title: "CPF" },
    ];
    const regimeTributario = [
      {id: 1, title:"Simples Nacional"},
      {id: 2, title:"Simples Nacional - excesso de sublimite de receita bruta"},
      {id: 3, title:"Regime Normal"},
    ]
  
    return (
      <FormFieldsContainerStyle>
        <h2>Destinatario</h2>
        <FormFieldsContentStyle>
          <InputSelect
            placeHolder="Tipo de documento"
            listaDeOpcoes={documentType}
          />
          <InputField
            labelText={""}
            placeHolder="Tipo de documento"
            id={"create-nfe-destinatario-field-document-info"}
          />
          <InputField
            labelText={"Inscrição Estadual"}
            id={"create-nfe-destinatario-field-insicricao-estadual"}
            placeholder={"Inscrição Estadual"}
          />
        </FormFieldsContentStyle>
        <FormFieldsContentStyle>
          <InputField
            labelText={"Logradouro"}
            id={"create-nfe-destinatario-field-logradouro"}
            placeholder={"Logradouro"}
          />
          <InputField
            labelText={"Numero do Logradouro"}
            id={"create-nfe-destinatario-field-numero-do-logradouro"}
            placeholder={"Numero do Logradouro"}
          />
          <InputField
            labelText={"Bairro"}
            id={"create-nfe-destinatario-field-bairro"}
            placeholder={"Bairro"}
          />
        </FormFieldsContentStyle>
        <FormFieldsContentStyle>
          <InputField
            labelText={"Municipio"}
            id={"create-nfe-destinatario-field-municipio"}
            placeholder={"Municipio"}
          />
          <InputField
            labelText={"UF"}
            id={"create-nfe-destinatario-field-uf"}
            placeholder={"UF"}
          />
          <InputSelect
              listaDeOpcoes={regimeTributario}
              placeHolder={"Regime Tributário"}
          />
        </FormFieldsContentStyle>
      </FormFieldsContainerStyle>
    );
  }