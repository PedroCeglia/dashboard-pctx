import { useEffect } from "react";
import { ItemRowStyle, ButtonSelectStyle } from "../style";
import { useState } from "react";
import { useItemsSelectContext } from "../../Contexts/ItemsSelect";

export default function Item({
  children,
  itemRow,
  hasSelectItem = true
}) {
  const [buttonIsSelect, setButtonIsSelect] = useState(false);

  const {
    itemsSelectedList,
    verifyIfButtonIsActive, 
    handlerIsSelect
  } = useItemsSelectContext()

  useEffect(() => {
    verifyIfButtonIsActive(itemRow, setButtonIsSelect)
  }, [itemsSelectedList]);

  return (
    <ItemRowStyle isActive={buttonIsSelect}>
      {hasSelectItem && (
        <td>
          <ButtonSelectStyle
            isActive={buttonIsSelect}
            onClick={() => handlerIsSelect(
              buttonIsSelect,
              setButtonIsSelect,
              itemRow
            )}
          />
        </td>
      )}
      {children}
    </ItemRowStyle>
  );
}