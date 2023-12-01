export default async function getXMLConverter(xmlFile){
    if(xmlFile){

        if(xmlFile.type != "text/xml"){
          return {erroXmlConveter: `O Arquivo precisa ser ( test/xml ) !, seu arquivo é ${xmlFile.type}`}
        }
        console.log(xmlFile.type)

        const formData = new FormData()
        formData.append("xmlFile", xmlFile)
  
        try{
  
          const response = await fetch("http://localhost:5001/xml-converter", {
            method: "POST",
            body: formData
          })

          if(response.ok){
            
            const newNotaFiscal = await response.json()

            console.log("Resposta do Servidor")
            return newNotaFiscal    
                
          } else {
            
            console.error("Erro ao recuperar o conteudo do Servidor!")
            console.error(response.statusText)

            return response.status
          }
  
        } catch (error) { console.error(error) }
        
      }
}