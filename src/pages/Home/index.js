import EstruturaTable from "../../components/EstruturaTable";
import { getEstoque } from "../../api/database";
import { useState, useEffect } from "react";

export default function Home() {
  const [estoqueList, setEstoqueList] = useState([{}]);
  useEffect(()=>{
    getEstoque(setEstoqueList)
  },[])
  return (
    <>
      <EstruturaTable tableList={estoqueList} />
    </>
  );
}

