import { TableCaptionStyle } from "./style";

export default function TableCaption({itemsSelectedList = [], setItemsSelectedList}) {

  const disselectAllItens = () => setItemsSelectedList([])
  
  return (
    <TableCaptionStyle>
      <div>
        <h2>Estoque </h2>
        <div>
          {itemsSelectedList.length > 1 && <button onClick={disselectAllItens}>Disselect All</button>}
          <button>Add +</button>
          <button>Delete</button>
        </div>
      </div>
    </TableCaptionStyle>
  );
}
