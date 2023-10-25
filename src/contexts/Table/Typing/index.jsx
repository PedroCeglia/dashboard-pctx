import React, { createContext, useContext } from "react";

const TypingContext = createContext();

export const useTypingContext = () => useContext(TypingContext);

export default function TypingProvider({ children, tableList, hasSelectItem }) {
  //
  const tablePropsHashMap = createTableHashMap(tableList);
  function createTableHashMap(intitialTableList) {
    let tablePropsHash = hasSelectItem ? { isChecked: "isChecked" } : {};
    intitialTableList.forEach((item) =>
      verifyPropsInItem(item, tablePropsHash)
    );
    return tablePropsHash;
  }
  function verifyPropsInItem(item, hashTableProps) {
    for (const propsName in item) {
      hashTableProps[propsName] =
        propsName.length > 3
          ? filterPropsNames(propsName).toUpperCase()
          : propsName.toUpperCase();
    }
  }
  function filterPropsNames(propsName) {
    let newWord = "";
    propsName.split("").map((propsLetter, index) => {
      if (index == 0) {
        newWord = propsLetter.toUpperCase();
        return;
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
  const tablePropsList = convertHashMapToPropsList(tablePropsHashMap);
  const tableTextPropsList = convertHashMapToTextPropsList(tablePropsHashMap);

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
    <TypingContext.Provider value={{ tablePropsList, tableTextPropsList }}>
      {children}
    </TypingContext.Provider>
  );
}
