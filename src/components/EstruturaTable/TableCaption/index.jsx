import { TableCaptionStyle } from "./style";
import { Link } from "react-router-dom";

export default function TableCaption({itemsSelectedList = [], setItemsSelectedList}) {

  const disselectAllItens = () => setItemsSelectedList([])
  
  return (
    <TableCaptionStyle>
      <div>
        <h2>Estoque </h2>
        <div>
          {itemsSelectedList.length > 1 && <button onClick={disselectAllItens}>Disselect All</button>}
          <Link to="/estoque/add">Add +</Link>
          <button>Delete</button>
        </div>
      </div>
    </TableCaptionStyle>
  );
}
