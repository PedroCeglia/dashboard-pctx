import { TableBodyStyle } from "./style";
import { usePaginationContext } from "../../../contexts/Table/Pagination";
import { useTypingContext } from "../../../contexts/Table/Typing";

import ItemRow from "./ItemRow";

export default function TableBody({ hasSelectItem }) {
  const { listaFinal } = usePaginationContext();
  const { tablePropsList } = useTypingContext();
  return (
    <TableBodyStyle>
      {listaFinal.map((item, id) => {
        return (
          <ItemRow
            key={"tbody tableList " + id}
            itemRow={item}
            hasSelectItem={hasSelectItem}
          >
            {tablePropsList.map((props, id) => {
              if (props !== "isChecked")
                return (
                  <td key={"td tableHeaderList " + id}>
                    <p>{item[props]}</p>
                  </td>
                );
            })}
          </ItemRow>
        );
      })}
    </TableBodyStyle>
  );
}
