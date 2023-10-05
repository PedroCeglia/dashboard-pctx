import { useEffect, useState } from "react";
import { EstruturaTableStyled } from "./style";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableCaption from "./TableCaption";

export default function EstruturaTable({ tableList }) {

  console.log("Tabela Renderizou")

  //
  const [itemsSelectedList, setItemsSelectedList] = useState([])
  
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
  const uiTableList = filtersList.length == 0 ? tableList : getFilterList();

  function getFilterList() {
    let filterListProps = tableList;

    filtersList.forEach((filterItem) => {
      filterListProps = filterListByType(
        filterItem.type,
        filterItem.text,
        filterListProps
      );
    });
    
    return filterListProps;
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

  const [indexPaginationActive, setIndexPaginationActive] = useState(0);

  const matrizTabelaPagination = getMatrizTabelaPagination();  
  const listaFinal = matrizTabelaPagination[indexPaginationActive] != null ? matrizTabelaPagination[indexPaginationActive] : []

  function getMatrizTabelaPagination(){
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

  //

  const tablePropsList = convertHashMapToPropsList(tablePropsHashMap)
  const tableTextPropsList = convertHashMapToTextPropsList(tablePropsHashMap)
 
  function convertHashMapToTextPropsList(hashMap) {
      const newList = [];
      for (const props in hashMap) {
        newList.push(hashMap[props]);
      }
      return newList;
  }
  function convertHashMapToPropsList(hashMap) {
    const newList = [];
    for (const props in hashMap) {
      newList.push(props);
    }
    return newList;
  }


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
        tableTextPropsList={tablePropsList}
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
