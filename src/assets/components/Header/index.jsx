import './styles.css'
import logo from '../../images/logo-horizontal-transparente.png'
import { Link } from 'react-router-dom';
import Botao from '../Botao';
import { useEffect, useState } from 'react';

function Header(){
    const [menuAberto, setMenuAberto] = useState(false)
    const [largura, setLargura] = useState(window.innerWidth)

    useEffect(() => {
        const atualizarLargura = () => setLargura(window.innerWidth);
        window.addEventListener('resize', atualizarLargura);
        return () => window.removeEventListener('resize', atualizarLargura);
    }, [])

    const toggleMenu = () => {
        if (largura <= 800){
            setMenuAberto(!menuAberto);
        }
    }
    return(
        <header className={menuAberto? "menu-aberto": ""}>
            <Link to="/"><img src={logo} alt="Logotipo" id="logo"/></Link>
            <ul id="nav" className={menuAberto? "visivel": "oculto"}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/">Preços</Link></li>
                <li><Link to="/">Contato</Link></li>
            </ul>
            <Botao text="Entrar" url="/"/>
            <i id="toggle" onClick={toggleMenu} className="bi bi-list"></i>
        </header>
    )
}

export default Header;