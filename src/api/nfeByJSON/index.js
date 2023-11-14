export default async function getNFeByJSON(originJson) {
  if (!originJson) return null;
  
  const { nfeProc } = originJson;
  if (!nfeProc || !nfeProc.NFe || !nfeProc.NFe.infNFe) return null;

  const { cobr, dest, emit, det, total } = nfeProc.NFe.infNFe;
  if (!cobr || !dest || !emit || !det) return null;

  if (cobr.fat && dest.enderDest && emit.enderEmit) {
    const fatura = getCobrancaByJSON(cobr);
    const emitente = getEmitenteByJSON(emit);
    const destinatario = getDestinatarioByJSON(dest);
    const productsList = getProductsList(det);
    const contaTotal = getContaTotal(total);
    
    return {
      fatura,
      emitente,
      destinatario,
      productsList,
      contaTotal,
    };
  }

  return null;
}


function getCobrancaByJSON(json) {
  return {
    numeroFatura: json.fat.nFat,
    descontoFatura: json.fat.vDesc,
    valorLiquido: json.fat.vLiq,
    valorOrigem: json.fat.vOrig,
  };
}

function getEnderecoInfo(json, endereco) {
  const typeOfEnterprise = json.CNPJ ? "CNPJ" : "Empresa Estrangeira";
  const enterpriseCode = json.CNPJ || json.idEstrangeiro;

  const { xLgr, nro, xBairro, cMun, xMun, UF, CEP, cPais } = endereco;

  return {
    tipoDeEmpresa: typeOfEnterprise,
    codigoDaEmpresa: enterpriseCode,
    logradouro: xLgr,
    bairro: xBairro,
    municipio: xMun,
    uf: UF,
    cep: CEP,
    pais: cPais,
  };
}
function getEmitenteByJSON(json) {
  return getEnderecoInfo(json, json.enderEmit);
}
function getDestinatarioByJSON(json) {
  return getEnderecoInfo(json, json.enderDest);
}


function getProductsList(json) {
  return json.map((item) => {
    const { vTotTrib } = item.imposto;
    const { cProd, xProd, qCom, vUnCom, vProd, vUnTrib, NCM } = item.prod;

    return {
      nomeDoProduto: xProd,
      codigoDoProduto: cProd,
      nCM: NCM,
      valorUnidade: parseFloat(vUnCom).toFixed(2),
      quantidadeComprada: parseFloat(qCom).toFixed(0),
      valorTotal: parseFloat(vProd).toFixed(2),
      tributosTotais: parseFloat(vTotTrib).toFixed(2),
      valorUnidadeTributos: parseFloat(vUnTrib).toFixed(2),
    };
  });
}

function getContaTotal(json) {
  const { vProd, vIPI, vNF, vTotTrib } = json.ICMSTot;
  return {
    valorTotal: parseFloat(vNF).toFixed(2),
    valorSemImposto: parseFloat(vProd).toFixed(2),
    valorIPI: parseFloat(vIPI).toFixed(2),
    valorTotalTributado: parseFloat(vTotTrib).toFixed(2),
  };
}
