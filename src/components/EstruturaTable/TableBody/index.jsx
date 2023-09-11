import { TableBodyStyle } from "../style";

export default function TableBody({filterTableList, headerTablePropsList}){
    return(
        <TableBodyStyle>
            {filterTableList.map((item, id) => {
            return (
                <tr key={"tbody tableList " + id}>
                {headerTablePropsList.map((props, id) => {
                    return <td key={"td tableHeaderList " + id}>{item[props]}</td>;
                })}
                </tr>
            );
            })}
        </TableBodyStyle>
    )
}