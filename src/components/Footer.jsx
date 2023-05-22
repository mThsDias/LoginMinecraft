import styles from './Footer.module.css'
import imgController from '../img/game-controller.svg'
import imgKid from '../img/kid.svg'
import imgPower from '../img/power.svg'
import imgUser from '../img/user.svg'
import imgVibrate from '../img/vibrate.svg'

function Footer() {
    return(
        <div className={styles.divContainerFooter}>
            <div>
                <img src={imgPower} alt='img' />
                <h4>Jogue também offline</h4>
            </div>
            <div className={styles.user}>
                <img src={imgUser} alt='img' />
                <h4>67 jogadores</h4>
            </div>
            <div className={styles.controller}>
                <img src={imgController} alt='img' />
                <h4>Compatível com uso remoto</h4>
            </div>
            <div className={styles.vibrate}>
                <img src={imgVibrate} alt='img' />
                <h4>Vibração no controle</h4>
            </div>
            <div className={styles.kid}>
                <img src={imgKid} alt='img' />
                <h4>Vibração no controle</h4>
            </div>
        </div>
    )
}

export default Footer