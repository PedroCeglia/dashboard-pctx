import InputField from "../../../../../components/InputField";
import InputSelect from "../../../../../components/InputSelect";
import { FormFieldsContainerStyle, FormFieldsContentStyle } from "../../style";

export default function AddItem() {
  return (
    <FormFieldsContainerStyle>
      <h2>Add Item</h2>
      <FormFieldsContentStyle>
        <InputField
          id={"create-nfe-add-item-numero-item"}
          placeholder={"Numero do Item"}
          labelText={"Numero do Item"}
        />
        <InputField
          id={"create-nfe-add-item-codigo-produto"}
          placeholder={"Código do Produto"}
          labelText={"Código do Produto"}
        />
        <InputField
          id={"create-nfe-add-item-descricao"}
          placeholder={"Descrição"}
          labelText={"Descrição"}
        />
        <InputField
          id={"create-nfe-add-item-cfop"}
          placeholder={"CFOP"}
          labelText={"CFOP"}
        />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputField
          id={"create-nfe-add-item-quantidade-commercial"}
          placeholder={"Quantidade Comercial"}
          labelText={"Quantidade Comercial"}
        />
        <InputField
          id={"create-nfe-add-item-quantidade_tributavel"}
          placeholder={"Quantidade Tributavel"}
          labelText={"Quantidade Tributavel"}
        />
        <InputField
          id={"create-nfe-add-item-valor_unitario_comercial"}
          placeholder={"Valor Unitario Comercial"}
          labelText={"Valor Unitario Comercial"}
        />
        <InputField
          id={"create-nfe-add-item-valor_unitario_tributavel"}
          placeholder={"Valor Unitario Tributavel"}
          labelText={"Valor Unitario Tributavel"}
        />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputSelect />
        <InputField
          id={"create-nfe-add-item-unidade_comercial"}
          placeholder={"Unidade Comercial"}
          labelText={"Unidade Commercial"}
        />
        <InputField
          id={"create-nfe-add-item-unidade_tributavel"}
          placeholder={"Unidade Tributavel"}
          labelText={"Unidade Tributavel"}
        />
        <InputField
          id={"create-nfe-add-item-valor-bruto"}
          placeholder={"Valor Bruto"}
          labelText={"Valor Bruto"}
        />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputField
          id={"codigo_ncm"}
          placeholder={"Código NCM"}
          labelText={"Código NCM"}
        />
        <InputSelect />
        <InputSelect />
        <InputSelect />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputSelect />
        <InputSelect />
        <InputField
          id={"create-nfe-add-item-icms-base-calculo"}
          placeholder={"ICMS Base Calculo"}
          labelText={"ICMS Base Calculo"}
        />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputField
          id={"create-nfe-add-item-icms-valor-total"}
          placeholder={"ICMS Valor Total"}
          labelText={"ICMS Valor Total"}
        />
        <InputField
          id={"create-nfe-add-item-icms-base-calculo-st"}
          placeholder={"ICMS Base Calculo ST"}
          labelText={"ICMS Base Calculo ST"}
        />
        <InputField
          id={"create-nfe-add-item-icms-valor-total-st"}
          placeholder={"ICMS Valor Total ST"}
          labelText={"ICMS Valor Total ST"}
        />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputField
          id={"create-nfe-add-item-valor-produtos"}
          placeholder={"Valor Produtos"}
          labelText={"Valor Produtos"}
        />
        <InputField
          id={"create-nfe-add-item-valor-frete"}
          placeholder={"Valor Frete"}
          labelText={"Valor Frete"}
        />
        <InputField
          id={"create-nfe-add-item-valor-seguro"}
          placeholder={"Valor Seguro"}
          labelText={"Valor Seguro"}
        />
        <InputField
          id={"create-nfe-add-item-valor-desconto"}
          placeholder={"Valor Desconto"}
          labelText={"Valor Desconto"}
        />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputField
          id={"create-nfe-add-item-ipi-valor"}
          placeholder={"IPI Valor"}
          labelText={"IPI Valor"}
        />
        <InputField
          id={"create-nfe-add-item-pis-valor"}
          placeholder={"Pis Valor"}
          labelText={"Pis Valor"}
        />
        <InputField
          id={"create-nfe-add-item-confins-valor"}
          placeholder={"Confis Valor"}
          labelText={"Confis Valor"}
        />
        <InputField
          id={"create-nfe-add-item-valor-outras-despesas"}
          placeholder={"Valor de Outras Despesas"}
          labelText={"Valor de Outras Despesas"}
        />
      </FormFieldsContentStyle>
      <FormFieldsContentStyle>
        <InputField
          id={"create-nfe-add-item-valor-total"}
          placeholder={"Valor Total"}
          labelText={"Valor Total"}
        />
        <InputSelect />
      </FormFieldsContentStyle>
    </FormFieldsContainerStyle>
  );
}
