import { Link } from 'react-router-dom';
import logo from './img/whatsapp.png'
import styles from './Whatsapp.module.css'

function Whatsapp(){
    return(
        <>
            <Link to="https://web.whatsapp.com" className={styles.btn_whatsapp}><img src={logo}/></Link>
        </>
    )
}

export default Whatsapp;