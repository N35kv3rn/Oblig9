import styles from '../../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="../">Haome</Link>
                </li>
                <li>
                    <Link href="/list">Laome</Link>
                </li>
                <li>
                    <Link href="/create">Craome</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav