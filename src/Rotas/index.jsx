import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EstruturaPagina from '../components/EstruturaPagina'

// import Pages
import Home from '../pages/Home'
import AuthPage from '../pages/AuthPage'
import AddEstoque from '../pages/AddEstoque'
import Estoque from '../pages/Estoque'
import CriandoNFe from '../pages/CreateNFe'

export default function Rotas(){
    return(
        <BrowserRouter>
            <EstruturaPagina>
                <Routes>
                    <Route path='*' element={<h1>Not Found</h1>}/>
                    <Route path='/auth/*' element={<AuthPage/>}/>

                    <Route index element={<Home/>}/>
                    <Route path='/calendario' element={<h1>calendario</h1>}/>
                    <Route path='/help' element={<h1>Help</h1>}/>
                    <Route path='/suporte' element={<h1>Suporte</h1>}/>

                    <Route path='/estoque' element={<Estoque/>}>
                        <Route path='add' element={<AddEstoque/>}/>
                    </Route>

                    <Route path='/create-nfe' element={<CriandoNFe/>} />
                    
                    <Route path='/registros' element={<h1>Registro</h1>}>
                        <Route path='/registros/vendas' element={<h1>Vendas</h1>}/>
                        <Route path='/registros/compras' element={<h1>Compras</h1>}/>
                    </Route>
                    
                </Routes>                
            </EstruturaPagina>
        </BrowserRouter>
    )
}