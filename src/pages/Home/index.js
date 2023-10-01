import EstruturaTable from "../../components/EstruturaTable";
import { tableList } from "../../constants/tableList";
import { getEstoque } from "../../api/database";
import { useState, useEffect } from "react";

export default function Home() {
  const [estoqueList, setEstoqueList] = useState([{}]);
  /*useEffect(()=>{
    console.log(estoqueList)
  },[estoqueList])
  
  useEffect(() => {
    // Chame a função getEstoque e, em seguida, defina a lista de estoque
    getEstoque()
      .then((res) => {
        //console.log(res)
        setEstoqueList(res); // Defina a lista de estoque com os dados recebidos
      })
      .catch((error) => {
        console.error("Erro ao buscar estoque:", error);
      });
  }, []); // Esta função useEffect será executada apenas uma vez, quando o componente for montado
*/
  useEffect(()=>{
    getEstoque(setEstoqueList)
  },[])
  return (
    <>
      <EstruturaTable tableList={estoqueList} />
    </>
  );
}

