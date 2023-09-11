import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EstruturaPagina from '../components/EstruturaPagina'

// import Pages
import Home from '../pages/Home'

export default function Rotas(){
    return(
        <BrowserRouter>
            <EstruturaPagina>
                <Routes>
                    <Route path='*' element={<h1>Not Found</h1>}/>

                    <Route index element={<Home/>}/>
                    <Route path='/calendario' element={<h1>calendario</h1>}/>
                    <Route path='/help' element={<h1>Help</h1>}/>
                    <Route path='/suporte' element={<h1>Suporte</h1>}/>

                    <Route path='/estoque' element={<h1>Etoque</h1>}>
                        <Route path='/estoque/add' element={<h1>Adicionar</h1>}/>
                    </Route>
                    
                    <Route path='/registros' element={<h1>Registro</h1>}>
                        <Route path='/registros/vendas' element={<h1>Vendas</h1>}/>
                        <Route path='/registros/compras' element={<h1>Compras</h1>}/>
                    </Route>
                    
                </Routes>                
            </EstruturaPagina>
        </BrowserRouter>
    )
}