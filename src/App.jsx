import {Route, Routes} from 'react-router-dom'
import {ScrollToTop} from '@/components/scroll-to-top'
import HomePage from './pages/HomePage.jsx'
import TiposCuidado from './pages/TiposCuidadoPage.jsx'
import EncontrarCuidador from './pages/EncontrarCuidadorPage.jsx'
import ComoFunciona from './pages/ComoFuncionaPage.jsx'
import SejaCuidador from './pages/SejaCuidadorPage.jsx'
import EntrarPage from './pages/EntrarPage.jsx'
import RecuperarSenhaPage from './pages/RecuperarSenhaPage.jsx'
import TermosPage from './pages/TermosPage.jsx'
import PrivacidadePage from './pages/PrivacidadePage.jsx'
import PlanosPage from './pages/PlanosPage.jsx'

function App() {
    return (
        <div className="min-h-screen bg-slate-50">
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/tipos-de-cuidado" element={<TiposCuidado/>}/>
                <Route path="/encontrar-cuidador" element={<EncontrarCuidador/>}/>
                <Route path="/como-funciona" element={<ComoFunciona/>}/>
                <Route path="/seja-um-cuidador" element={<SejaCuidador/>}/>
                <Route path="/entrar" element={<EntrarPage/>}/>
                <Route path="/recuperar-senha" element={<RecuperarSenhaPage/>}/>
                <Route path="/termos" element={<TermosPage/>}/>
                <Route path="/privacidade" element={<PrivacidadePage/>}/>
                <Route path="/planos" element={<PlanosPage/>}/>
            </Routes>
        </div>
    )
}

export default App
