import { TableHeaderStyle } from "./style";
import { useThemeContext } from "../../../contexts/Theme";
import { useTypingContext } from "../../../contexts/Table/Typing";

import ItemHeader from "./Item";

export default function TableHeader({ hasFilter = true, hasCaption = true }) {
  const { theme } = useThemeContext();
  const { tableTextPropsList, tablePropsList } = useTypingContext();

  return (
    <TableHeaderStyle hasCaption={hasCaption}>
      <tr>
        {tableTextPropsList.map((item, id) => {
          return (
            <ItemHeader
              theme={theme}
              key={"th tableHeaderList " + id}
              itemName={item}
              propsName={tablePropsList[id]}
              hasFilter={hasFilter}
            />
          );
        })}
      </tr>
    </TableHeaderStyle>
  );
}
