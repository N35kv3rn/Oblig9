import Nav from './components/Nav'
import Layout from './components/Layout'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Layout>
        <h1 className={styles.title}>Oblig 9</h1>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
