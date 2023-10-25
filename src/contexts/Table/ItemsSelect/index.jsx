import { useState, useContext, createContext } from "react";

const ItemsSelectContext = createContext();

export const useItemsSelectContext = () => useContext(ItemsSelectContext);

export default function ItemsSelectProvider({ children }) {
  const [itemsSelectedList, setItemsSelectedList] = useState([]);

  const clearAllItemsInSelectList = () => setItemsSelectedList([]);

  const verifyIfButtonIsActive = (itemRow, setButtonIsSelect) => {
    let hasFind = false;
    itemsSelectedList.forEach((item, ) => {
      if (item.id === itemRow.id) {
        hasFind = true;
        setButtonIsSelect(true);
      }
    });
    if (!hasFind) {
      setButtonIsSelect(false);
    }
  };

  const handlerIsSelect = (buttonIsSelect, setButtonIsSelect, itemRow) => {
    let newList = [];
    buttonIsSelect
      ? removeSelectedItemRow(newList, itemRow)
      : (newList = [...itemsSelectedList, itemRow]);

    setItemsSelectedList(newList);
    setButtonIsSelect((state) => !state);
  };

  function removeSelectedItemRow(newList, itemRow) {
    itemsSelectedList.forEach((item) => {
      if (item.id !== itemRow.id) {
        newList.push(item);
      } else {
        console.log("isEquals");
      }
    });
    console.log(newList);
  }

  return (
    <ItemsSelectContext.Provider
      value={{
        handlerIsSelect,
        clearAllItemsInSelectList,
        verifyIfButtonIsActive,
        itemsSelectedList,
      }}
    >
      {children}
    </ItemsSelectContext.Provider>
  );
}
