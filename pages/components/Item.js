import Link from 'next/link'
import Router from 'next/router'
import styles from '../../styles/Home.module.css'
import list from '../list/index'

const Item = ({ person }) => {

    const deletePerson = async () => {
        const config = {
            method: 'DELETE',
        }

        const fetchResponse = await fetch(`http://localhost:3000/api/people/${person.id}`, config)
        const data = await fetchResponse.json();

        Router.reload()

        return data;
    }

    return(
        <div className={styles.card}>
            <Link href="/people/[id]" as={`/people/${person.id}`}>
                <a>
                    <h2>{person.name} &rarr;</h2>
                    <p>{`Age: ${person.age}`}</p>
                    <p>{ `Gender: ${person.gender}`}</p>
                    <p>{`Room: ${person.room}`}</p>
                </a>
            </Link>
            <button className={styles.backButton} onClick={deletePerson} >Delete</button>
        </div>
    )
}

export default Item