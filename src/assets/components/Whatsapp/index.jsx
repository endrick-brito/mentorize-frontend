import { Link } from 'react-router-dom';
import logo from './img/whatsapp.png'
import './styles.css'

function Whatsapp(){
    return(
        <>
            <Link to="https://web.whatsapp.com" id="btn_whatsapp"><img src={logo}/></Link>
        </>
    )
}

export default Whatsapp;