import Item from './Item'
import Link from 'next/link'

import styles from '../../styles/Home.module.css'

const List = ({ people }) => {

    return(
        <div className={styles.grid}>
            
            {people.map((person, index) => (
                <Item person={person} key={index} />
            ))}
        </div>
    )
}

export default List