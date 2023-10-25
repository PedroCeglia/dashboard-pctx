import { ItemStyle } from "./style";
import { useState } from "react";

import { filterImage, closeFilterImage } from "../../../../constants/images";
import { useFilterContext } from "../../../../contexts/Table/Filter";

export default function ItemTableHeader({
  theme,
  propsName,
  itemName,
  hasFilter = true,
}) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [filterField, setFilterField] = useState("");

  const {addItemFilter, removeItemFilter} = useFilterContext()

  function handlerFilterIsOpen() {
    if (filterIsOpen) {
      // reset
      setFilterField("");
      removeItemFilter(propsName);
      setFilterIsOpen(false);
    } else {
      setFilterIsOpen(true);
    }
  }
  function handlerFilter(e) {
    addItemFilter(propsName, e.target.value);
    setFilterField(e.target.value);
  }

  if (itemName !== "isChecked") {
      return (
        <ItemStyle filterIsOpen={filterIsOpen}>
          <div>
            <span>{itemName}</span>
            {
              hasFilter && (
              <button onClick={handlerFilterIsOpen}>
                <img
                  src={filterImage(theme)}
                  alt={"Filter " + theme.type}
                  title="filter"
                />
              </button>                
              )
            }
          </div>
          {
            hasFilter && (
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
            )
          }
        </ItemStyle>
      );
  } else {
    return <ItemStyle></ItemStyle>;
  }
}