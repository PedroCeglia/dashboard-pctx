import FilterProvider from "./Filter";
import TypingProvider from "./Typing";
import PaginationProvider from "./Pagination";
import ItemsSelectProvider from "./ItemsSelect";

export default function TableContexts({ children, tableList, hasSelectItem }) {
  return (
    <TypingProvider tableList={tableList} hasSelectItem={hasSelectItem}>
      <FilterProvider tableList={tableList}>
        <PaginationProvider>
          <ItemsSelectProvider>
            {children}
          </ItemsSelectProvider>
        </PaginationProvider>
      </FilterProvider>
    </TypingProvider>
  );
}
