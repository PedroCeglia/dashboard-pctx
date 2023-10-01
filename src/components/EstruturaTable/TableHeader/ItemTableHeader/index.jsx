import { ItemTableHeaderStyle } from "./style";
import { filterImage, closeFilterImage } from "../../../../constants/images";
import { useState } from "react";

export default function ItemTableHeader({
  theme,
  propsName,
  addNewFilterItem,
  removeFilterItem,
}) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [filterField, setFilterField] = useState("");

  function handlerFilterIsOpen() {
    if(filterIsOpen) {
      // reset
      setFilterField("")
      removeFilterItem(propsName)
      setFilterIsOpen(false);
    } else{
      setFilterIsOpen(true)
    }
  }
  function handlerFilter(e) {
    addNewFilterItem( propsName, e.target.value )
    setFilterField(e.target.value);
  }

  if(propsName !== "isChecked"){
    return(
      <ItemTableHeaderStyle filterIsOpen={filterIsOpen}>
        <div>
          {propsName}
          <button onClick={handlerFilterIsOpen}>
            <img src={filterImage(theme)} alt={"Filter " + theme.type} title="filter" />
          </button>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder={"Busque pelo " + propsName}
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
