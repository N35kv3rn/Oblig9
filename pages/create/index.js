import {useState} from 'react'
import styles from '../../styles/Home.module.css'

const Create = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [gender, setGender] = useState('')
    const [room, setRoom] = useState('')

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const ageChange = (e) => {
        setAge(e.target.value)
    }

    const genderChange = (e) => {
        setGender(e.target.value)
    }

    const roomChange = (e) => {
        setRoom(e.target.value)
    }

    return(
        <div className={styles.container}>
            <h2>Create person:</h2>
            <p>Name:</p>
            <input onChange={nameChange}/>
            <p>Age:</p>
            <input onChange={ageChange}/>
            <p>Gender:</p>
            <input onChange={genderChange}/>
            <p>Room:</p>
            <input onChange={roomChange}/>
            <button>Submit</button>
        </div>
    )
}

export default Create