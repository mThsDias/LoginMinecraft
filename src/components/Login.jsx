import styles from './Login.module.css'
import img from '../img/logo.svg'

function Login() {
    return(
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <div>
                   <img src={img} alt='img' />
                </div>
                <div className={styles.containerEmail}>
                    <h4>E-mail</h4>
                    <input placeholder='Digite seu e-mail' type="text" />
                </div>
                <div className={styles.containerPassword}>
                    <h4>Senha</h4>
                    <input placeholder='Digite sua senha' type="password" />
                </div>
                <div className={styles.relembrarSenhaContainer}>
                    <input type="checkbox" />
                    <h4>Lembrar minha senha</h4>
                </div>
                <div>
                    <button>Entrar na conta</button>
                </div>
                <div>
                    <a href='/'>Esqueceu a senha?</a>
                </div>
            </div>
        </div>
    )
}

export default Login