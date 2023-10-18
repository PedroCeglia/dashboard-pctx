import { TableBodyStyle } from "./style";
import ItemRow from "./ItemRow";
import { usePaginationContext } from "../Contexts/Pagination";
import { useTypingContext } from "../Contexts/Typing";

export default function TableBody({ hasSelectItem }) {
  const { listaFinal } = usePaginationContext();
  const { tablePropsList } = useTypingContext();
  console.log(tablePropsList);
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
