import { TableFooterStyle, TablePaginationContainer } from "./style";
import {
  tablePaginationBackAll,
  tablePaginationBackOne,
  tablePaginationNextAll,
  tablePaginationNextOne,
} from "../../../constants/images";
import { useThemeContext } from "../../../contexts/ThemeContext";

export default function TableFooter({
  indexPaginationActive,
  matrizPaginationLength,
  movePaginationActiveToBack,
  movePaginationActiveToNext,
  setIndexPaginationActive
}) {
  const { theme } = useThemeContext();

  return (
    <TableFooterStyle>
      <tr>
        <td>
          <TablePaginationContainer>
            <button onClick={() => { movePaginationActiveToBack(true) }}>
              <img
                src={tablePaginationBackAll(theme)}
                alt="Table Pagination Back All"
              />
            </button>
            <button onClick={movePaginationActiveToBack}>
              <img
                src={tablePaginationBackOne(theme)}
                alt="Table Pagination Back One"
              />
            </button>

            { /* Has After */
              indexPaginationActive > 0 && (
                <button onClick={()=>{ setIndexPaginationActive(state => state - 1)}}>{indexPaginationActive}</button>
              ) 
            }

            <div>{++indexPaginationActive}</div>

            { /* Has Before */
              indexPaginationActive < matrizPaginationLength && (
                <button onClick={()=>{ setIndexPaginationActive(state => state + 1)}}>{indexPaginationActive + 1}</button>
              ) 
            }

            { /* has more than 2 */
              indexPaginationActive + 1 < matrizPaginationLength && (
                <>
                  <div>...</div>
                  <button onClick={()=>{ setIndexPaginationActive(matrizPaginationLength - 1)}}>{matrizPaginationLength}</button>
                </>
              ) 
            }
            <button
              onClick={movePaginationActiveToNext}
            >
              <img
                src={tablePaginationNextOne(theme)}
                alt="Table Pagination Next One"
              />
            </button>
            <button onClick={() => { movePaginationActiveToNext(true) }} >
              <img
                src={tablePaginationNextAll(theme)}
                alt="Table Pagination Next All"
              />
            </button>
          </TablePaginationContainer>
        </td>
      </tr>
    </TableFooterStyle>
  );
}
