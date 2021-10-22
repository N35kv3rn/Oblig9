import styles from '../../styles/Home.module.css'

const Item = ({ person }) => {
    return(
        <div className={styles.card}>
            <h2>{person.name}</h2>
            <p>{`Age: ${person.age}`}</p>
            <p>{ `Gender: ${person.gender}`}</p>
            <p>{`Room: ${person.romnummer}`}</p>
        </div>
    )
}

export default Item