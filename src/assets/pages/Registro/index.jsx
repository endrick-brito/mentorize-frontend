import styles from './Registro.module.css';
import { Link } from 'react-router-dom';

function Registro() {
    return (
        <section className={styles.registro}>
            <div className={styles.esquerda}>
                
            </div>
            <div className={styles.direita}>
                <form>
                    <div className={styles.titulo}>
                        <h1>Criar Conta</h1>
                        <p>Ja possui uma conta? <Link to="#">Entrar</Link></p>
                    </div>
                    <div className={styles.campos}>
                        <div className={styles.campo}>
                            <input type="text" id='nome' placeholder='Nome'/>
                            <input type="text" id='sobrenome' placeholder='Sobrenome'/>
                        </div>
                        <div className={styles.campo}>
                            <input type="email" id='email' placeholder='Email'/>
                        </div>
                        <div className={styles.campo}>
                            <input type="password" id='senha' placeholder='Senha'/>
                        </div>
                        <div className={styles.campo}>
                            <input type="password" id='confirma_senha' placeholder='Repita a senha'/>
                        </div>
                        <div className={styles.campo}>
                            <input type="checkbox" name="termos" id="termos" />
                            <label htmlFor="termos">Eu aceito os <Link to="#">Termos e Condições</Link></label>
                        </div>
                    </div>
                    <button type="submit">Criar Conta</button>
                </form>
            </div>
        </section>
    );
}

export default Registro;
