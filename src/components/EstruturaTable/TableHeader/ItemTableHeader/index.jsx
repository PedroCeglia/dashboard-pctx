import { ItemTableHeaderStyle } from "./style";
import { useState } from "react";

export default function ItemTableHeader({
  theme,
  propsName,
  addNewFilterItem,
  removeFilterItem,
  filterQuery,
}) {
  const filterImage = `/assets/icons/filter-${
    theme.type === "dark" ? "dark" : "light"
  }.png`;
  const closeFilterImage = `/assets/icons/close-${
    theme.type === "dark" ? "dark" : "light"
  }.png`;
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
    console.log("eeee")
    addNewFilterItem( propsName, e.target.value )
    setFilterField(e.target.value);
  }

  return (
    <ItemTableHeaderStyle filterIsOpen={filterIsOpen}>
      <div>
        {propsName}
        <button onClick={handlerFilterIsOpen}>
          <img src={filterImage} alt={"Filter " + theme.type} title="filter" />
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
            src={closeFilterImage}
            alt={"Close Filter " + theme.type}
            title="close"
          />
        </button>
      </div>
    </ItemTableHeaderStyle>
  );
}
