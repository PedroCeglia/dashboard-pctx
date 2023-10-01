export async function getEstoque(setEstoqueList) {
    try {
      const response = await fetch("http://localhost:5000/estoque");
  
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.status);
      }
  
      const data = await response.json();
      setEstoqueList(data); // Retorna os dados, não a resposta
  
    } catch (error) {
      // Trate os erros aqui de acordo com as necessidades do seu aplicativo.
      console.error("Error: " + error.message);
      throw error; // Re-lança o erro para que ele possa ser tratado no componente Home
    }
}
  