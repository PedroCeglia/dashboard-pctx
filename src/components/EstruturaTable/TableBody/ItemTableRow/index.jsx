import { useEffect } from "react";
import { ItemTableRowStyle, ButtonSelectStyle } from "../style";
import { useState } from "react";

export default function ItemTableRow({
  children,
  itemsSelectedList,
  setItemsSelectedList,
  itemRow,
}) {
  const [buttonIsSelect, setButtonIsSelect] = useState(false);
  
  useEffect(()=>{
    let hasFind = false
    itemsSelectedList.forEach((item)=>{
        if(item.id === itemRow.id){
          hasFind = true
          setButtonIsSelect(true)
        }
    })
    if(!hasFind){
      setButtonIsSelect(false)
    }
  },[itemsSelectedList])

  const handlerIsSelect = () => {

    let newList = [];
    buttonIsSelect ? removeSelectedItemRow(newList) : newList = [...itemsSelectedList ,itemRow] ;

    setItemsSelectedList(newList);
    setButtonIsSelect((state) => !state);
  };

  function removeSelectedItemRow(newList) {

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
    <ItemTableRowStyle isActive={buttonIsSelect}>
      <td>
        <ButtonSelectStyle
          isActive={buttonIsSelect}
          onClick={handlerIsSelect}
        />
      </td>
      {children}
    </ItemTableRowStyle>
  );
}
