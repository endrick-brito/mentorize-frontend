import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Whatsapp from './img/whatsapp.png'
import './styles.css'
import Section1 from './Section1';
import Section2 from './Section2';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
            <Header/>
                <Section1/>
                <Section2/>
                <Link to="https://web.whatsapp.com" id="btn_whatsapp"><img src={Whatsapp}/></Link>
            <Footer/>
        </>
    )
}

export default Home;