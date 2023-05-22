import styles from './Login.module.css'
import img from '../img/logo.svg'


import { useState } from 'react'

function Login() {

    function cadastroUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div className={styles.loginContainer}>
                <form className={styles.login} onSubmit={cadastroUsuario}>
                    <div>
                       <img src={img} alt='img' />
                    </div>
                    <div className={styles.containerEmail}>
                        <h4>E-mail</h4>
                        <label htmlFor='name'></label>
                        <input placeholder='Digite seu e-mail' type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className={styles.containerPassword}>
                        <h4>Senha</h4>
                        <label htmlFor='name'></label>
                        <input placeholder='Digite sua senha' type="password" id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.relembrarSenhaContainer}>
                        <input type="checkbox" />
                        <h4>Lembrar minha senha</h4>
                    </div>
                    <div>
                        <button type='submit' value='Cadastrar'>Entrar na conta</button>
                    </div>
                    <div>
                        <a href='/'>Esqueceu a senha?</a>
                    </div>
                </form>
        </div>
    )
}

export default Login