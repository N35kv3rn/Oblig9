import Item from './Item'
import Link from 'next/link'

import styles from '../../styles/Home.module.css'

const List = ({ people }) => {

    return(
        <div className={styles.grid}>
            
            {people.data.map((person) => (
                <Item person={person} />
            ))}
        </div>
    )
}

export default List