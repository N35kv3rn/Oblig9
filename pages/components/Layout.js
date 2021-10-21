import styles from '../../styles/Home.module.css'

const Layout = ({children}) => {
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Oblig 9</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout