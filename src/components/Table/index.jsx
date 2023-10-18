import { TableStyled } from "./style";

import TableContexts from "./Contexts";

import TableCaption from "./Caption";
import TableHeader from "./Header";
import TableBody from "./Body";
import TableFooter from "./Footer";

export default function TesteTable({
  tableList,
  hasPagination = false,
  hasFilter = false,
  hasFooter = false,
  hasCaption = false,
  hasSelectItem = false,
  hasAddItem = false,
  hasRemoveItem = false,
  height = "100%",
}) {
  console.log("Tabela Renderizou");

  return (
    <TableStyled height={height}>
      <TableContexts tableList={tableList} hasSelectItem={hasSelectItem}>
        {hasCaption && (
          <TableCaption
            hasSelectItem={hasSelectItem}
            hasAddItem={hasAddItem}
            hasRemoveItem={hasRemoveItem}
          />
        )}

        <TableHeader hasFilter={hasFilter} hasCaption={hasCaption} />
        <TableBody hasSelectItem={hasSelectItem} />

        {hasFooter && <TableFooter hasPagination={hasPagination} />}
      </TableContexts>
    </TableStyled>
  );
}
