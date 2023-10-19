import { ProductsToAddStyle } from "./style";
import Table from "../../../../components/Table";

export default function ProductsToAdd() {
  const tableList = [
    {
      NCM: "8306.29.00",
      cProd: "13858",
      qCom: "20",
      vIPI: "1.97",
      vProd: "600.65",
      vUnCom: "30.03",
      xProd: "RAW MAGNETIC TRAY DISPLAY",
    },
    {
      NCM: "8306.29.00",
      cProd: "13858",
      qCom: "20",
      vIPI: "1.97",
      vProd: "600.65",
      vUnCom: "30.03",
      xProd: "RAW TRAY DISPLAY",
    },
    {
      NCM: "8306.29.00",
      cProd: "13858",
      qCom: "20",
      vIPI: "1.97",
      vProd: "600.65",
      vUnCom: "30.03",
      xProd: "RAW MAGNETIC TRAY DISPLAY",
    },
    {
      NCM: "8306.29.00",
      cProd: "13858",
      qCom: "20",
      vIPI: "1.97",
      vProd: "600.65",
      vUnCom: "30.03",
      xProd: "RAW MAGNETIC TRAY DISPLAY",
    },
    {
      cProd: "14295",
      xProd: "RAW SIX SHOOTER BAMBOO KS",
      NCM: "4419.19.00",
      qCom: "3",
      vUnCom: "140.42",
      vProd: "421.27",
      vIPI: "0.00",
    },
    {
      cProd: "13858",
      xProd: "RAW MAGNETIC TRAY DISPLAY",
      NCM: "8306.29.00",
      qCom: "20",
      vUnCom: "30.03",
      vProd: "600.65",
      vIPI: "1.97",
    },
    {
      cProd: "13858",
      xProd: "RAW MAGNETIC TRAY DISPLAY",
      NCM: "8306.29.00",
      qCom: "20",
      vUnCom: "30.03",
      vProd: "600.65",
      vIPI: "1.97",
    },
    {
      cProd: "13858",
      xProd: "RAW MAGNETIC TRAY DISPLAY",
      NCM: "8306.29.00",
      qCom: "20",
      vUnCom: "30.03",
      vProd: "600.65",
      vIPI: "1.97",
    },
    {
      cProd: "13858",
      xProd: "RAW MAGNETIC TRAY DISPLAY",
      NCM: "8306.29.00",
      qCom: "20",
      vUnCom: "30.03",
      vProd: "600.65",
      vIPI: "1.97",
    },
    {
      cProd: "14295",
      xProd: "RAW SIX SHOOTER BAMBOO KS",
      NCM: "4419.19.00",
      qCom: "3",
      vUnCom: "140.42",
      vProd: "421.27",
      vIPI: "0.00",
    },
  ];
  return (
    <ProductsToAddStyle>
      <Table tableList={tableList}/>
    </ProductsToAddStyle>
  );
}
