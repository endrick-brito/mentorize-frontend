import './styles.css'
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'
import setaDireita from './img/seta_direita.png'
import setaEsquerda from './img/seta_esquerda.png'

function Section2(){
    return (
        <section id="section2">
            <h3 className='titulo'>
                <span><img src={setaEsquerda} width={100}/></span>
                <span className="text">Por que Nos Escolher ?</span>
                <span><img src={setaDireita} width={100}/></span>
            </h3>

            <h1>Principais Recursos</h1>
            <h3>O Mentorize simplifica o ensino, oferecendo ferramentas para criar e gerenciar cursos de forma profissional e intuitiva.</h3>
            <div id="cards">
                <div className="card">
                    <img src={card1} alt="Imagem card 1" />
                    <h2>Gestão de Cursos</h2>
                    <p>Crie e organize seus cursos de maneira simples e intuitiva.</p>
                </div>

                <div className="card">
                    <img src={card2} alt="Imagem card 2" />
                    <h2>Acompanhamento de Alunos</h2>
                    <p>Veja o progresso dos seus alunos e ajude-os a alcançar seus objetivos.</p>
                </div>

                <div className="card">
                    <img src={card3} alt="Imagem card 3" />
                    <h2>Controle Financeiro</h2>
                    <p>Gerencie as finanças do seu curso com relatórios detalhados e fáceis de entender.</p>
                </div>
            </div>
        </section>
    )
}

export default Section2;