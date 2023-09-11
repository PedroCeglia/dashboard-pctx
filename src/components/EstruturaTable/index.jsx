import { useEffect, useState } from "react";
import {
  EstruturaTableStyled,
  TableHeaderStyle,
  TableBodyStyle,
} from "./style";

import ItemTableHeader from "./TableHeader/ItemTableHeader";
import { useThemeContext } from "../../contexts/ThemeContext";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function EstruturaTable({ tableList = [{}] }) {
  const { theme } = useThemeContext();
  const [filterQuery, setFilterQuery] = useState({ text: "", type: "" });

  const [headerTableList, setHeaderTableList] = useState([]);
  const [headerTablePropsList, setHeaderTablePropsList] = useState([]);

  //
  //

  const [filtersList, setFiltersList] = useState([])

  function addNewFilterItem(type, text){

    const newList = [...filtersList]
    if(text === ""){
      removeFilterItem(type)
      return
    }

    console.log(newList)
    console.log(filtersList)
    const newfilter = {type:type, text:text}
    const isFind = false
    // verificar se existe 
    newList.forEach((item, index) => {
      
      console.log(" Alterou ")
      console.log(" Item Type: " + item.type)
      console.log(" NewFilter Type: " + newfilter.type)
      if(newfilter.type == item.type){
        console.log(" Entrouu ^^ ")
        console.log(" Item Type: " + item.type)
        console.log(" NewFilter Type: " + newfilter.type)
        newList[index] = newfilter
      }
    })

    if(!isFind || newList == []){ newList.push(newfilter) }
    
    // se nao

    setFiltersList(newList)
  }

  function removeFilterItem(type){
    const newList = filtersList.filter((value) => { 
      if(value.type !== type){ 
        return value
      }
    })
    setFiltersList(newList)
  }

  const [ filterTableList, setFilterTableList ] = useState(tableList)
  useEffect(()=>{
    if(filtersList.length == 0){
      setFilterTableList(tableList)
      return
    }
    let filterListProps = tableList
    filtersList.map((item) => {
      console.log("to dentro!")
      console.log(item)
      filterListProps = getFilterList(item.type, item.text, filterListProps)
    })
    setFilterTableList(filterListProps)
  },[filtersList])



  //
  //

  // Filtra  a Lista Inicial
  //const filterTableList = getFilterList(filterQuery.type, filterQuery.text);

  function getFilterList(filterType, filterText, mainList = tableList) {
    const newTableList = [];
    if (filterType == "" || filterText == "" || filterText == null || filterType == null) return mainList;
    mainList.forEach((item) => {
      if (item[filterType] != null) {
        if (item[filterType].indexOf(filterText) != -1) newTableList.push(item);
      }
    });
    return newTableList;
  }
  const tableHashMap = createTableHashMap(filterTableList);
  function createTableHashMap(objectList) {
    if (objectList.length === 0) return headerTableList;

    let headerTableHash = {};
    objectList.forEach((item) => {
      verifyPropsInItem(item, headerTableHash);
    });

    return headerTableHash;
  }
  function verifyPropsInItem(item, hashTableProps) {
    for (const propsName in item) {
      if (hashTableProps[propsName] == null)
        hashTableProps[propsName] = filterPropsNames(propsName);
    }
  }
  function filterPropsNames(propsName) {
    let newWord = "";
    propsName.split("").map((propsLetter) => {
      if (propsLetter === "-" || propsLetter.toUpperCase() === propsLetter) {
        newWord += " " + propsLetter;
      } else {
        newWord += propsLetter;
      }
    });
    return newWord.toLowerCase();
  }

  useEffect(() => {
    convertHashMapTitleToList(tableHashMap);
    convertHashMapPropsToList(tableHashMap);
  }, []);
  // ex : Nota Fiscal
  function convertHashMapTitleToList(hashMap) {
    if (hashMap === headerTableList) {
      //setHeaderTableList(headerTableList)
    } else {
      const newList = [];
      for (const props in hashMap) {
        newList.push(hashMap[props]);
      }
      console.log("table Props List: ", newList);
      setHeaderTableList(newList);
    }
  }
  // ex : notaFiscal
  function convertHashMapPropsToList(hashMap) {
    const newList = [];
    console.log(hashMap);
    for (const props in hashMap) {
      newList.push(props);
    }
    console.log("table Header List: ", newList);
    setHeaderTablePropsList(newList);
  }

  return (
    <EstruturaTableStyled>
      <TableHeader
        headerTableList={headerTableList}
        headerTablePropsList={headerTablePropsList}
        theme={theme}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        addNewFilterItem={addNewFilterItem}
        removeFilterItem={removeFilterItem}
      />
      <TableBody
        filterTableList={filterTableList}
        headerTablePropsList={headerTablePropsList}
      />
    </EstruturaTableStyled>
  );
}
