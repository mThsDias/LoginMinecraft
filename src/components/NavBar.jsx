import styles from './NavBar.module.css'
import { GoThreeBars } from "react-icons/go";



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