import Botao from '../../../components/Botao';
import './styles.css'
import mentor1 from './img/mentor1.png'
import mentor2 from './img/mentor2.png'
import mentor3 from './img/mentor3.png'

function Section1(){
    return(
        <section>
            <div id="imgs">
                <div className="img"><img src={mentor1} alt="Mentor" /></div>
                <div className="img"><img src={mentor2} alt="Mentor" /></div>
                <div className="img"><img src={mentor3} alt="Mentor" /></div>
            </div>
            <h1><span>Ensine</span> Com Facilidade</h1>
            <h3>Com o Mentorize, você cria, gerencia seus cursos e finanças com facilidade.</h3>
            <Botao url="/" text="Comece Agora"/>
        </section>
    )
}

export default Section1;