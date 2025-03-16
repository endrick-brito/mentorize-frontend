import styles from './Registro.module.css';
import { Link } from 'react-router-dom';
import Botao from '../../components/Botao'
import Logo from '../../images/logo-horizontal-transparente.png'
import { useState } from "react";
import api from "../../../services/api.js";

function Registro() {
    const [instrutor, setInstrutor] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const handleChange = (e) => {
        setInstrutor({ ...instrutor, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (instrutor.senha !== instrutor.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await api.post("", {
                nome: instrutor.nome,
                sobrenome: instrutor.sobrenome,
                email: instrutor.email,
                senha: instrutor.senha, 
            });

            console.log("Instrutor cadastrado com sucesso:", response.data);
            alert("Cadastro realizado!");
            
            // Limpar os campos após o cadastro
            setInstrutor({
                nome: "",
                sobrenome: "",
                email: "",
                senha: "",
                confirmarSenha: "",
            });

        } catch (error) {
            console.error("Erro ao cadastrar instrutor email já utilizado:", error);
            alert("Erro ao cadastrar ou email já utilizado. Tente novamente!");
        }
    };


    return (
        <section className={styles.registro}>
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
                <form onSubmit={handleSubmit}>
                    <div className={styles.titulo}>
                        <h1>Criar Conta</h1>
                        <p>Ja possui uma conta? <Link to="/login">Entrar</Link></p>
                    </div>
                    <div className={styles.campos}>
                        <div className={styles.campo}>
                            <input type="text" id='nome' placeholder='Nome' name='nome' value={instrutor.nome} onChange={handleChange} required/>
                            <input type="text" id='sobrenome' placeholder='Sobrenome' name='sobrenome' value={instrutor.sobrenome} onChange={handleChange} required/>
                        </div>
                        <div className={styles.campo}>
                            <input type="email" id='email' placeholder='Email' name='email' value={instrutor.email} onChange={handleChange} required/>
                        </div>
                        <div className={styles.campo}>
                            <input type="password" id='senha' placeholder='Senha' name='senha' value={instrutor.senha} onChange={handleChange} required/>
                        </div>
                        <div className={styles.campo}>
                            <input type="password" id='confirmarSenha' placeholder='Repita a senha' name='confirmarSenha' value={instrutor.confirmarSenha} onChange={handleChange} required/>
                        </div>
                        <div className={styles.campo}>
                            <input type="checkbox" name="termos" id="termos" required/>
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
