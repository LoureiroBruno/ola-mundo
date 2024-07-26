import styles from './Menu.module.css'; 
import MenuLink from '../MenuLink';

export default function Menu () {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink className={styles.link} to="/">
                    Inicio
                </MenuLink>
                <MenuLink className={styles.link} to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}
