import EstruturaTable from "../../components/EstruturaTable";
import { getEstoque } from "../../api/database";
import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

export default function Estoque() {

  const [estoqueList, setEstoqueList] = useState([{}]);
  useEffect(() => { getEstoque(setEstoqueList) }, []);

  const pathname = useLocation().pathname
  const isAdding = pathname === "/estoque/add"
  
  return (
    <>
      { isAdding && <Outlet/> }
      <EstruturaTable tableList={estoqueList} />
    </>
  );
}
