import { ItemTableHeaderStyle } from "./style";
import { filterImage, closeFilterImage } from "../../../../constants/images";
import { useState } from "react";

export default function ItemTableHeader({
  theme,
  propsName,
  itemName,
  addNewFilterItem,
  removeFilterItem,
}) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [filterField, setFilterField] = useState("");

  function handlerFilterIsOpen() {
    if(filterIsOpen) {
      // reset
      setFilterField("")
      removeFilterItem(itemName)
      setFilterIsOpen(false);
    } else{
      setFilterIsOpen(true)
    }
  }
  function handlerFilter(e) {
    addNewFilterItem( propsName, e.target.value )
    setFilterField(e.target.value);
  }

  if(itemName !== "isChecked"){
    return(
      <ItemTableHeaderStyle filterIsOpen={filterIsOpen}>
        <div>
          {itemName}
          <button onClick={handlerFilterIsOpen}>
            <img src={filterImage(theme)} alt={"Filter " + theme.type} title="filter" />
          </button>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder={"Busque pelo " + itemName}
            onChange={handlerFilter}
            value={filterField}
          />
          <button onClick={handlerFilterIsOpen}>
            <img
              src={closeFilterImage(theme)}
              alt={"Close Filter " + theme.type}
              title="close"
            />
          </button>
        </div>
      </ItemTableHeaderStyle>
    )
  } else {
    return(
      <ItemTableHeaderStyle>
        
      </ItemTableHeaderStyle>
    )
  }
}
