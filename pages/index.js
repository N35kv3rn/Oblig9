import Head from 'next/head'
import Image from 'next/image'
import List from './components/List'
import styles from '../styles/Home.module.css'

export default function Home({ people }) {

  return (
    <div>
      <p className={styles.homeText}>Marcus Neskvern</p>
    </div>
  )

}
