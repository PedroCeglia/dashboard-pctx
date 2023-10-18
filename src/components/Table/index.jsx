import { TableStyled } from "./style";

import TableContexts from "./Contexts";

import Caption from "./Caption";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

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
          <Caption
            hasSelectItem={hasSelectItem}
            hasAddItem={hasAddItem}
            hasRemoveItem={hasRemoveItem}
          />
        )}

        <Header hasFilter={hasFilter} hasCaption={hasCaption} />

        <Body hasSelectItem={hasSelectItem} />

        {hasFooter && <Footer hasPagination={hasPagination} />}
      </TableContexts>
    </TableStyled>
  );
}
