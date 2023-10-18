import { useState, useContext, createContext } from "react";
import { useFilterContext } from "../Filter";

const PaginationContext = createContext();

export const usePaginationContext = () => useContext(PaginationContext);

export default function PaginationProvider({ children }) {
  const [indexPaginationActive, setIndexPaginationActive] = useState(0);
  
  const {uiTableList} = useFilterContext()

  const matrizTabelaPagination = getMatrizTabelaPagination();
  const matrizTabelaPaginationLength = matrizTabelaPagination.length;

  const listaFinal =
    matrizTabelaPagination[indexPaginationActive] != null
      ? matrizTabelaPagination[indexPaginationActive]
      : [];


  function getMatrizTabelaPagination() {
    const matrizTabelaSection = [];
    uiTableList.map((item, key) => {
      if (key % 100 === 0) {
        // ADD new Section
        matrizTabelaSection[matrizTabelaSection.length] = [item];
      } else {
        // Add Item na lista antiga
        matrizTabelaSection[matrizTabelaSection.length - 1].push(item);
      }
    });
    return matrizTabelaSection;
  }
  function movePaginationActiveToNext(nextToAll = false) {
    if (
      indexPaginationActive + 1 !== matrizTabelaPagination.length &&
      !nextToAll
    ) {
      console.log(indexPaginationActive);
      setIndexPaginationActive((state) => state + 1);
    } else {
      console.log("indexPaginationActive");
      setIndexPaginationActive(matrizTabelaPagination.lenght - 1);
    }
  }
  function movePaginationActiveToBack(backToAll = false) {
    if (backToAll || indexPaginationActive <= 0) {
      setIndexPaginationActive(0);
    } else {
      setIndexPaginationActive((state) => state - 1);
    }
  }

  return (
    <PaginationContext.Provider
      value={{
        movePaginationActiveToNext,
        movePaginationActiveToBack,
        listaFinal,
        indexPaginationActive,
        setIndexPaginationActive,
        matrizTabelaPaginationLength
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
