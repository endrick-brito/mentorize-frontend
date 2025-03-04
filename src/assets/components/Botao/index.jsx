import { Link } from 'react-router-dom';
import './styles.css'

function Botao({text, url}){
    return(
        <Link to={url}><button>{text}</button></Link>
    )
}

export default Botao;