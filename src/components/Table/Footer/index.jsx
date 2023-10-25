import { TableFooterStyle, TablePaginationContainer } from "./style";
import {
  tablePaginationBackAll,
  tablePaginationBackOne,
  tablePaginationNextAll,
  tablePaginationNextOne,
} from "../../../constants/images";
import { useThemeContext } from "../../../contexts/Theme";
import { usePaginationContext } from "../../../contexts/Table/Pagination";

export default function TableFooter({ hasPagination = true }) {
  const { theme } = useThemeContext();
  const {
    matrizTabelaPaginationLength,
    movePaginationActiveToNext,
    movePaginationActiveToBack,
    indexPaginationActive,
    setIndexPaginationActive,
  } = usePaginationContext();

  return (
    <TableFooterStyle>
      <tr>
        {matrizTabelaPaginationLength > 3 && <> Ola Mundo </>}
        {matrizTabelaPaginationLength < 2 && <> Ola Mundo 22</>}
        {matrizTabelaPaginationLength <= 3 &&
          matrizTabelaPaginationLength > 1 && <> Ola Mundo 33</>}

        {hasPagination && (
          <td>
            <TablePaginationContainer>
              <button
                onClick={() => {
                  movePaginationActiveToBack(true);
                }}
              >
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

              {
                /* Has After */
                indexPaginationActive > 0 && (
                  <button
                    onClick={() => {
                      setIndexPaginationActive((state) => state - 1);
                    }}
                  >
                    {indexPaginationActive}
                  </button>
                )
              }

              <div>{indexPaginationActive + 1}</div>

              {
                /* Has Before */
                indexPaginationActive < matrizTabelaPaginationLength && (
                  <button
                    onClick={() => {
                      setIndexPaginationActive((state) => state + 1);
                    }}
                  >
                    {indexPaginationActive + 1}
                  </button>
                )
              }

              {
                /* has more than 2 */
                indexPaginationActive + 1 < matrizTabelaPaginationLength && (
                  <>
                    <div>...</div>
                    <button
                      onClick={() => {
                        setIndexPaginationActive(
                          matrizTabelaPaginationLength - 1
                        );
                      }}
                    >
                      {matrizTabelaPaginationLength}
                    </button>
                  </>
                )
              }
              <button onClick={movePaginationActiveToNext}>
                <img
                  src={tablePaginationNextOne(theme)}
                  alt="Table Pagination Next One"
                />
              </button>
              <button
                onClick={() => {
                  movePaginationActiveToNext(true);
                }}
              >
                <img
                  src={tablePaginationNextAll(theme)}
                  alt="Table Pagination Next All"
                />
              </button>
            </TablePaginationContainer>
          </td>
        )}
      </tr>
    </TableFooterStyle>
  );
}
