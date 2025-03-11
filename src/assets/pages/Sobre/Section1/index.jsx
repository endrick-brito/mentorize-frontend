import './styles.css'
import logo from '../../../images/logo-horizontal-transparente.png'

function Section1(){
    return(
        <section id="sobre">
        <div>
            <h2>Sobre a Mentorize</h2>
            <div className="imagemMentorize">
                <img src={logo} alt="logotipo da mentorize" />
            </div>
            <p>A Mentorize é a plataforma ideal para instrutores que desejam gerenciar seus cursos de forma simples e eficiente. Criado para facilitar a vida de educadores, ele permite o gerenciamento completo de turmas, conteúdos e finanças em um só lugar.</p>
            <h3>Quem somos?</h3>
            <p>O Mentorize foi criado por apaixonados por tecnologia e educação. Nossa equipe acredita que o ensino deve ser acessível e bem organizado, e é por isso que desenvolvemos essa plataforma para ajudar instrutores a focarem no que realmente importa: ensinar.</p>
            <h3>Nossa missão</h3>
            <p>Nossa missão é tornar a gestão de cursos acessível para todos os instrutores, oferecendo ferramentas poderosas para criar, organizar e expandir seus conteúdos.</p>
            <h3>Nossos valores</h3>
            <ul>
                <li><strong>Inovação</strong> - Sempre buscando aprimorar a experiência educacional.</li>
                <li><strong>Acessibilidade</strong> - Uma plataforma intuitiva para todos.</li>
                <li><strong>Compromisso</strong> - Suporte e melhorias contínuas.</li>
                <li><strong>Transparência</strong> - Relações honestas com nossos usuários.</li>
            </ul>
        </div>
    </section>
    )
}

export default Section1;