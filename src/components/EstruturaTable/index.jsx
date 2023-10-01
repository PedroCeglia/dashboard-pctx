import { useEffect, useState } from "react";
import { EstruturaTableStyled } from "./style";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableCaption from "./TableCaption";

export default function EstruturaTable({ tableList }) {
  //
  const [filtersList, setFiltersList] = useState([]);
  function addItemFilter(type, text) {
    if (text === "") {
      removeItemFilter(type);
    }

    const newfilter = { type: type, text: text };
    const newFilterList = [...filtersList];

    let isFind = false;

    newFilterList.forEach((item, index) => {
      if (newfilter.type == item.type) {
        newFilterList[index] = newfilter;
        isFind = true;
      }
    });

    if (!isFind) {
      newFilterList.push(newfilter);
    }

    setFiltersList(newFilterList);
  }
  function removeItemFilter(type) {
    const newFilterList = filtersList.filter(
      (value) => value.type !== type && value
    );
    setFiltersList(newFilterList);
    return;
  }

  //
  const [uiTableList, setUiTableList] = useState([...tableList]);
  useEffect(() => {
    verifyIfHasFilter();
    getFilterList();
    console.log(filtersList)
  }, [filtersList, tableList]);

  function verifyIfHasFilter() {
    if (filtersList.length == 0) {
      setUiTableList(tableList);
      return;
    }
  }
  function getFilterList() {
    let filterListProps = tableList;

    filtersList.forEach((filterItem) => {
      filterListProps = filterListByType(
        filterItem.type,
        filterItem.text,
        filterListProps
      );
    });
    
    setUiTableList(filterListProps);
  }
  function filterListByType(filterType, filterText, mainList) {
    
    verifyIfHasFilterType(filterType, filterText, mainList)

    return mainList.filter((item) => {
      if (item[filterType] != null)
        if (item[filterType].indexOf(filterText) != -1) return item;
    });
  }
  function verifyIfHasFilterType(filterType, filterText, mainList) {
    if (filterType == "" || filterText == "" || filterText == null || filterType == null) return mainList;
  }

  //
  const tablePropsHashMap = createTableHashMap(tableList);
  function createTableHashMap(intitialTableList) {
    let tablePropsHash = {
      isChecked: "isChecked"
    };
    intitialTableList.forEach((item) => verifyPropsInItem(item, tablePropsHash));
    return tablePropsHash;
  }
  function verifyPropsInItem(item, hashTableProps) {
    for (const propsName in item) {
      hashTableProps[propsName] = filterPropsNames(propsName);
    }
  }
  function filterPropsNames(propsName) {
    let newWord = "";
    propsName.split("").map((propsLetter, index) => {
      if(index == 0){
        newWord = propsLetter.toUpperCase()
        return
      }

      if (propsLetter === "-" || propsLetter.toUpperCase() === propsLetter) {
        newWord += " " + propsLetter;
      } else {
        newWord += propsLetter;
      }
    });
    return newWord;
  }

  //

  const [matrizTabelaPagination, setMatrizTabelaPagination] = useState([]);
  const [indexPaginationActive, setIndexPaginationActive] = useState(0);
  const listaFinal = matrizTabelaPagination[indexPaginationActive] != null ? matrizTabelaPagination[indexPaginationActive] : []

  useEffect(() => {
    let matrizTabelaSection = [];
    uiTableList.map((item, key) => {
      if (key % 100 === 0) {
        // ADD new Section
        matrizTabelaSection[matrizTabelaSection.length] = [item];
      } else {
        // Add Item na lista antiga
        matrizTabelaSection[matrizTabelaSection.length - 1].push(item);
      }
    });
    setMatrizTabelaPagination(matrizTabelaSection);
  }, [uiTableList]);
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

  useEffect(()=>{
    console.log("Lista Final Index: " + indexPaginationActive)
    console.log(listaFinal)
  },[listaFinal])

  //

  const [tablePropsList, setTablePropsList] = useState([]);
  const [tableTextPropsList, setTableTextPropsList] = useState([]);

  useEffect(() => {
    convertHashMapToPropsList(tablePropsHashMap);
    convertHashMapToTextPropsList(tablePropsHashMap);
  }, [tableList]);
  // ex : Nota Fiscal
  function convertHashMapToTextPropsList(hashMap) {
    if (hashMap !== tablePropsList) {
      const newList = [];
      for (const props in hashMap) {
        newList.push(hashMap[props]);
      }
      setTablePropsList(newList);
    }
  }
  // ex : notaFiscal
  function convertHashMapToPropsList(hashMap) {
    const newList = [];
    for (const props in hashMap) {
      newList.push(props);
    }
    setTableTextPropsList(newList);
  }

  // Verify If Has More Than 2 Itens Seleceted
  const [itemsSelectedList, setItemsSelectedList] = useState([])
  useEffect(()=>{
    console.log(itemsSelectedList)
  },[itemsSelectedList])
  //const [isMoreThanTwoSelected, setIsMoreThanTwoSelected] = useState(false)
  


  return (
    <EstruturaTableStyled>
      <TableCaption
        itemsSelectedList={itemsSelectedList}
        setItemsSelectedList={setItemsSelectedList}
      />
      <TableHeader
        tableTextPropsList={tableTextPropsList}
        tablePropsList={tablePropsList}
        addNewFilterItem={addItemFilter}
        removeFilterItem={removeItemFilter}
      />
      <TableBody
        filterTableList={listaFinal}
        tableTextPropsList={tableTextPropsList}
        itemsSelectedList={itemsSelectedList}
        setItemsSelectedList={setItemsSelectedList}
      />
      <TableFooter
        indexPaginationActive={indexPaginationActive}
        setIndexPaginationActive={setIndexPaginationActive}
        matrizPaginationLength={matrizTabelaPagination.length}
        movePaginationActiveToBack={movePaginationActiveToBack}
        movePaginationActiveToNext={movePaginationActiveToNext}
      />
    </EstruturaTableStyled>
  );
}
