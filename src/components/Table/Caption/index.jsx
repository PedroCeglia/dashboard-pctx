import { TableCaptionStyle } from "./style";
import { Link } from "react-router-dom";
import { useItemsSelectContext } from "../Contexts/ItemsSelect";

export default function TableCaption({
  hasAddItem,
  hasRemoveItem,
  hasSelectItem,
}) {
  const { clearAllItemsInSelectList, itemsSelectedList } = useItemsSelectContext();

  return (
    <TableCaptionStyle>
      <div>
        <h2>Estoque </h2>
        {hasSelectItem && (
          <div>
            {itemsSelectedList.length > 1 && (
              <button onClick={clearAllItemsInSelectList}>Disselect All</button>
            )}
            {hasAddItem && <Link to="/estoque/add">Add +</Link>}
            {hasRemoveItem && <button>Delete</button>}
          </div>
        )}
      </div>
    </TableCaptionStyle>
  );
}
