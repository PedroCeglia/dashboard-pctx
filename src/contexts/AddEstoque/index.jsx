import { useState, useEffect, useContext, createContext } from "react";
import getXMLConverter from "../../api/xmlConverter";
import getNFeByJSON from "../../api/nfeByJSON";

const AddEstoqueContext = createContext();

export default function AddEstoqueProvider({ children }) {
  const [nfe, setNFe] = useState(null);
  const [isLoadingNFe, setIsLoadingNFe] = useState(false);

  const isLoadNFe = nfe !== null;

  function validateNFeXML(nfeXML) {
    setTimeout(async () => {
      const convertResult = await getXMLConverter(nfeXML);
      const NFeJson = await getNFeByJSON(convertResult);
      console.log(NFeJson)
      setIsLoadingNFe(false);
      setNFe(NFeJson)
    }, 1000);
  }

  const handleSubmitNotaFiscal = async (e) => {
    e.preventDefault();
  };
  const handleChangeNotaFiscal = (e) => {
    const NFeXML = e.target.files[0];
    setIsLoadingNFe(true);
    validateNFeXML(NFeXML);
  };

  return (
    <AddEstoqueContext.Provider
      value={{
        NFe: nfe,
        isLoadingNFe,
        isLoadNFe,
        handleSubmitNotaFiscal,
        handleChangeNotaFiscal,
      }}
    >
      {children}
    </AddEstoqueContext.Provider>
  );
}

export const useAddEstoqueContext = () => useContext(AddEstoqueContext);
