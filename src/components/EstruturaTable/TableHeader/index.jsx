import { TableHeaderStyle } from "../style";
import ItemTableHeader from "./ItemTableHeader";

export default function TableHeader({
  headerTableList,
  headerTablePropsList,
  theme,
  filterQuery,
  setFilterQuery,
  addNewFilterItem,
  removeFilterItem,
}) {
  return (
    <TableHeaderStyle>
      <tr>
        {headerTableList.map((item, id) => {
          return (
            <ItemTableHeader
              filterQuery={filterQuery}
              addNewFilterItem={addNewFilterItem}
              removeFilterItem={removeFilterItem}
              theme={theme}
              key={"th tableHeaderList " + id}
              itemName={item}
              propsName={headerTablePropsList[id]}
            />
          );
        })}
      </tr>
    </TableHeaderStyle>
  );
}
