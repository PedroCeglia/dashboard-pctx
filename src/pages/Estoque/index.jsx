import Table from "../../components/Table";
import { EstoqueStyle } from "./style";
import { getEstoque } from "../../api/database";
import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import AddEstoqueProvider from "../../contexts/AddEstoque";

export default function Estoque() {
  const [estoqueList, setEstoqueList] = useState([{}]);
  useEffect(() => {
    getEstoque(setEstoqueList);
  }, []);

  const pathname = useLocation().pathname;
  const isAdding = pathname === "/estoque/add";

  return (
    <EstoqueStyle>

      {isAdding && 
        <AddEstoqueProvider>
          <Outlet />
        </AddEstoqueProvider>
      }
      <Table
        tableList={estoqueList}
        hasFooter={false}
        hasCaption={false}
        hasFilter={true}
        hasSelectItem={false}
        height={"100vh"}
      />
    </EstoqueStyle>
  );
}
