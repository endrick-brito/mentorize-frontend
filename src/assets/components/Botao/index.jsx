import { Link } from 'react-router-dom';
import styles from './Botao.module.css'

function Botao({text, url, classe}){
    return(
        <Link to={url}><button className={styles.botao}>{text}</button></Link>
    )
}

export default Botao;