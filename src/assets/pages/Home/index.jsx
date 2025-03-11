import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css'
import Section1 from './Section1';
import Section2 from './Section2';
import Whatsapp from '../../components/Whatsapp';

function Home(){
    return(
        <>
            <Header/>
                <Section1/>
                <Section2/>
                <Whatsapp/>
            <Footer/>
        </>
    )
}

export default Home;