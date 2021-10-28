import Link from 'next/link'
import List from '../components/List'
import styles from '../../styles/Home.module.css'

const Index = ({ people }) => {

  if (people.length == 0) {
    return (
      <div className={styles.container}>
        <h2>Ser ut som det ikke finnes noen personer enda</h2>
        <h3>Klikk på knappen for å opprette en person</h3>
        <Link href='/create'>
          <a className={styles.backButton}>Klikk her</a>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <List people={people} />
      </div>
      
    )
  }

  
}


export const getServerSideProps = async () => {
  
  const res = await fetch(`http://localhost:3000/api/people`)

  const people = await res.json()
  
  return {
    props: {
      people
    }
  }
}

export default Index