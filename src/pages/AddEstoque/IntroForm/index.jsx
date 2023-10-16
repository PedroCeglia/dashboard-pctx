import { IntroFormStyle } from "./style";
import Loading from "../../../components/Loading";

export default function IntroForm({
    handleSubmitNotaFiscal,
    handleChangeNotaFiscal,
    notaFiscal,
    isLoadingNotafiscal
}) {
  return (
      <IntroFormStyle>
        <h2>Adicione um novo produto no Estoque</h2>
        <form onSubmit={handleSubmitNotaFiscal}>
          <div>
            <label htmlFor="input-convert-xml-to-notafiscal">
              <span>Escolha um Arquivo</span>
            </label>
            <span>
              {notaFiscal ? notaFiscal.name : "Nenhum arquivo selecionado"}
            </span>
            <input
              id="input-convert-xml-to-notafiscal"
              type="file"
              accept="application/xml"
              onChange={handleChangeNotaFiscal}
            />
          </div>
          <Loading isLoading={isLoadingNotafiscal} />
          <button type="submit">Abrir Arquivo</button>
        </form>
      </IntroFormStyle>
  );
}
