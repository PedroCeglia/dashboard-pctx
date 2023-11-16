import GeneralFields from './GeneralFields'
import EmitenteFields from './EmitenteFields'
import DestinatarioFields from './DestinatarioFields/index.jsx'

import { FormNFeStyle } from './style.js'
import ItensFields from './ItensFields/index.jsx'

export default function FormNFe(){
    const handleFormSubmmit = e => {
        e.preventDefault()
    }
    return(
        <FormNFeStyle onSubmit={handleFormSubmmit}>
            <GeneralFields/>
            <EmitenteFields/>
            <DestinatarioFields/>
            <ItensFields/>
        </FormNFeStyle>
    )
}