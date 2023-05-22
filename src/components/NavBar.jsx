import styles from './NavBar.module.css'

function NavBar () {
    return (
        <div>
            <nav className={styles.navBar}>
                <a href="/">ENTRAR</a>
                <a href="/">FORUM</a>
                <a href="/">SOBRE</a>
                <a href="/">MOJANG</a>
                <a href="/">PERGUNTAS</a>
            </nav>
        </div>
    )
}

export default NavBar