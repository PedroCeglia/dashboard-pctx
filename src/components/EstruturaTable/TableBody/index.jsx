import { TableBodyStyle } from "./style";
import ItemTableRow from "./ItemTableRow";

export default function TableBody({
  filterTableList,
  tableTextPropsList,
  itemsSelectedList,
  setItemsSelectedList,
}) {
  return (
    <TableBodyStyle>
      {filterTableList.map((item, id) => {
        return (
          <ItemTableRow
            key={"tbody tableList " + id}
            itemRow={item}
            itemsSelectedList={itemsSelectedList}
            setItemsSelectedList={setItemsSelectedList}
          >
            {tableTextPropsList.map((props, id) => {
              if (props !== "isChecked")
                return (
                  <td key={"td tableHeaderList " + id}> {item[props]} </td>
                );
            })}
          </ItemTableRow>
        );
      })}
    </TableBodyStyle>
  );
}
