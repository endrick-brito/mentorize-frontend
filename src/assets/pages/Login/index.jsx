import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import Botao from '../../components/Botao'
import Logo from '../../images/logo-horizontal-transparente.png'

function Login() {
    return (
        <section className={styles.login}>
            <div className={styles.esquerda}>
                <Botao text={<i className="bi bi-arrow-left"></i>} url="/" />
                <img src={Logo} alt="" />
                <h1>Com o Mentorize, você cria, gerencia seus cursos e finanças com facilidade.</h1>
                <div className={styles.social}>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-linkedin"></i>
                </div>
            </div>
            <div className={styles.direita}>
                <form>
                    <div className={styles.titulo}>
                        <h1>Entrar na Conta</h1>
                        <p>Ainda nao possui uma conta? <Link to="/registro">Registrar</Link></p>
                    </div>
                    <div className={styles.campos}>
                        <div className={styles.campo}>
                            <input type="email" id='email' placeholder='Email' />
                        </div>
                        <div className={styles.campo}>
                            <input type="password" id='senha' placeholder='Senha' />
                        </div>
                        <div className={styles.campo}>
                            <input type="checkbox" name="termos" id="termos" />
                            <label htmlFor="termos">Salvar dados</label>
                        </div>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </section>
    );
}

export default Login;
