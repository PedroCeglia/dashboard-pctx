import Table from "../../components/Table";
import { getEstoque } from "../../api/database";
import { useState, useEffect } from "react";

export default function Home() {
  const [estoqueList, setEstoqueList] = useState([{}]);
  useEffect(()=>{
    getEstoque(setEstoqueList)
  },[])
  return (
    <>
      <Table tableList={estoqueList} hasPagination={false}/>
    </>
  );
}

