import { TableHeaderStyle } from "./style";
import { useThemeContext } from "../../../contexts/ThemeContext";
import ItemTableHeader from "./ItemTableHeader";

export default function TableHeader({
  tableTextPropsList,
  tablePropsList,
  addNewFilterItem,
  removeFilterItem,
}) {
  const { theme } = useThemeContext();

  return (
    <TableHeaderStyle>
      <tr>
        {tableTextPropsList.map((item, id) => {
          return (
            <ItemTableHeader
              addNewFilterItem={addNewFilterItem}
              removeFilterItem={removeFilterItem}
              theme={theme}
              key={"th tableHeaderList " + id}
              itemName={item}
              propsName={tablePropsList[id]}
              
            />
          );
        })}
      </tr>
    </TableHeaderStyle>
  );
}
