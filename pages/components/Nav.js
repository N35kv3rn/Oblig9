import styles from '../../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/list">People</Link>
                </li>
                <li>
                    <Link href="/create">Create Person</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav