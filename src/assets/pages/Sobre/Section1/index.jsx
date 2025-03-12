import styles from './Section1.module.css'
import logo from '../../../images/logo-horizontal-transparente.png'

function Section1(){
    return(
        <section className={styles.sobre}>
            <div className={styles.imagemMentorize}>
                <img src={logo} alt="logotipo da mentorize" />
            </div>
            <div className={styles.content}>
                <div>
                    <h1>Sobre Nós</h1>
                    <hr className={styles.titulo}/>
                    <p>A Mentorize é a plataforma ideal para instrutores que desejam gerenciar seus cursos de forma simples e eficiente. Criado para facilitar a vida de educadores, ele permite o gerenciamento completo de turmas, conteúdos e finanças em um só lugar.</p>
                </div>
                <div>
                    <h3>Quem somos?</h3>
                    <hr />
                    <p>O Mentorize foi criado por apaixonados por tecnologia e educação. Nossa equipe acredita que o ensino deve ser acessível e bem organizado, e é por isso que desenvolvemos essa plataforma para ajudar instrutores a focarem no que realmente importa: ensinar.</p>
                </div>
                <div>
                    <h3>Nossa missão</h3>
                    <hr />
                    <p>Nossa missão é tornar a gestão de cursos acessível para todos os instrutores, oferecendo ferramentas poderosas para criar, organizar e expandir seus conteúdos.</p>
                </div>
                <div>
                    <h3>Nossos valores</h3>
                    <hr />
                    <ul>
                        <li><i className="bi bi-lightbulb-fill"></i><strong>Inovação</strong> - Sempre buscando aprimorar a experiência educacional.</li>
                        <li><i className="bi bi-bullseye"></i><strong>Acessibilidade</strong> - Uma plataforma intuitiva para todos.</li>
                        <li><i className="bi bi-patch-check-fill"></i><strong>Compromisso</strong> - Suporte e melhorias contínuas.</li>
                        <li><i className="bi bi-eye-fill"></i><strong>Transparência</strong> - Relações honestas com nossos usuários.</li>
                    </ul>
                </div>
            </div>
    </section>
    )
}

export default Section1;