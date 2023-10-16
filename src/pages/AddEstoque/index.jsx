import { AddEstoqueContainerStyle, AddEstoqueContentStyle } from "./style";
import getXMLConverter from "../../api/xmlConverter";
import { useEffect, useState } from "react";
import IntroForm from "./IntroForm";
import ValidateResponse from "./ValidateResponse";

export default function AddEstoque() {
  const [notaFiscal, setNotaFiscal] = useState(null);
  const [isLoadingNotafiscal, setIsLoadingNotaFiscal] = useState(false);

  const handleChangeNotaFiscal = (e) => {
    setIsLoadingNotaFiscal(true);
    setNotaFiscal(e.target.files[0]);
  };

  useEffect(() => {
    if (isLoadingNotafiscal) {
      setTimeout(async () => {
        const convertResult = await getXMLConverter(notaFiscal);
        setIsLoadingNotaFiscal(false);
        console.log(convertResult);
      }, 1000);
    }
  }, [isLoadingNotafiscal]);

  const handleSubmitNotaFiscal = async (e) => {
    e.preventDefault();
  };

  return (
    <AddEstoqueContainerStyle>
      <AddEstoqueContentStyle isLoad={isLoadingNotafiscal}>
        {false ? (
          <IntroForm
            handleSubmitNotaFiscal={handleSubmitNotaFiscal}
            handleChangeNotaFiscal={handleChangeNotaFiscal}
            notaFiscal={notaFiscal}
            isLoadingNotafiscal={isLoadingNotafiscal}
          />
        ) : (
          <ValidateResponse />
        )}
      </AddEstoqueContentStyle>
    </AddEstoqueContainerStyle>
  );
}
