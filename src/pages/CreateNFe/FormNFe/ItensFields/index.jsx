import { FormFieldsContainerStyle } from "../style"
import AddItem from "./AddItem"
import ItensList from "./ItensList"
export default function ItensFields(){
    return(
        <FormFieldsContainerStyle>
            <ItensList/>
            <AddItem/>
        </FormFieldsContainerStyle>
    )
}