import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-grids/styles/material.css";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Filter, Group, Inject, Page, Sort 
} from "@syncfusion/ej2-react-grids";


export default function Estoque() {
  return (
    <GridComponent dataSource={[]} width={1000}  pageSettings={true}>
      <ColumnsDirective>
        <ColumnDirective field="NotaFiscal" width="100" textAlign="Right" />
        <ColumnDirective field="id" width="100" textAlign="Right" />
        <ColumnDirective field="NomeDoProduto" width="100" textAlign="Right" />
        <ColumnDirective field="ValorDoProduto" width="100" textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group]}/>
    </GridComponent>
  );
}
