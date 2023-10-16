import { useState } from "react";
import Typing from "../Typing";

export default function Filter({ tableList }) {
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
    verifyIfHasFilterType(filterType, filterText, mainList);

    return mainList.filter((item) => {
      if (item[filterType] != null)
        if (item[filterType].indexOf(filterText) != -1) return item;
    });
  }
  function verifyIfHasFilterType(filterType, filterText, mainList) {
    if (
      filterType == "" ||
      filterText == "" ||
      filterText == null ||
      filterType == null
    )
      return mainList;
  }
  
  return (
    <Typing
      uiTableList={uiTableList}
      addItemFilter={addItemFilter}
      removeItemFilter={removeItemFilter}
    />
  );
}
