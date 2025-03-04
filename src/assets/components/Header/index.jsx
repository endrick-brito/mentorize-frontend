import './styles.css'
import logo from '../../images/logo-horizontal-transparente.png'
import { Link } from 'react-router-dom';
import Botao from '../Botao';

function Header(){
    return(
        <header>
            <Link to="/"><img src={logo} alt="Logotipo" id="logo"/></Link>
            <ul id="nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/">Preços</Link></li>
                <li><Link to="/">Contato</Link></li>
            </ul>
            <Botao text="Entrar" url="/"/>
        </header>
    )
}

export default Header;