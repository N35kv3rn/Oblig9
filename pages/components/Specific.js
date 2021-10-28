import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
import { useState } from 'react'

const Specific = ({ person }) => {

    const [toggled, setToggled] = useState(false)

    const [personToChange, setPersonToChange] = useState({
        name: `${person.name}`,
        age: `${person.age}`,
        gender: `${person.gender}`,
        room: `${person.room}`
    })

    const editPage = () => {
        setToggled(true)
    }

    const abort = () => {
        setToggled(false)
    }

    const handleForm = e => {
        e.preventDefault()
        putPerson();
        setToggled(false)
        Router.push('/list')
    }

    const putPerson = async () => {
        const config = {
            method: 'PUT',
            body: JSON.stringify(personToChange),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const fetchResponse = await fetch(`http://localhost:3000/api/people/${person.id}`, config)
        const data = await fetchResponse.json();

        return data;
        
    }

    const deletePerson = async () => {
        const config = {
            method: 'DELETE',
        }

        const fetchResponse = await fetch(`http://localhost:3000/api/people/${person.id}`, config)
        const data = await fetchResponse.json();

        return data;
    }

    const nameChange = e => {
        setPersonToChange((prevState) => ({
            ...prevState,
            name: e.target.value
        }))
    }

    const ageChange = (e) => {
        setPersonToChange((prevState) => ({
            ...prevState,
            age: e.target.value
        }))
    }

    const genderChange = (e) => {
        setPersonToChange((prevState) => ({
            ...prevState,
            gender: e.target.value
        }))
    }

    const roomChange = (e) => {
        setPersonToChange((prevState) => ({
            ...prevState,
            room: e.target.value
        }))
    }

    if (toggled == false) {
        return(

            <div className={styles.container}>
                <h2>{person.name}</h2>
                <p>Alder: {person.age}</p>
                <p>Kjønn: {person.gender}</p>
                <p>Romnummer: {person.room}</p>
                <Link href="/list">
                    <a className={styles.backButton}>
                        Back
                    </a>
                </Link>
                <button onClick={editPage} className={styles.backButton}>
                    Edit
                </button>
                <Link href='/list'>
                    <a onClick={deletePerson} className={styles.backButton}>
                        Delete
                    </a>
                </Link>
            </div>
    
        )
    } else if (toggled == true) {
        return(
            <div>
                <form onSubmit={handleForm}>

                    <p>
                        Navn:
                    </p>
                    <input onChange={nameChange} placeholder={personToChange.name} type="text"/>
                    <br/>

                    <p>
                        Alder:
                    </p>
                    <input onChange={ageChange} placeholder={person.age}></input>
                    <br/>

                    <p>
                        Kjønn:
                    </p>
                    <input onChange={genderChange} placeholder={person.gender}></input>
                    <br/>

                    <p>
                        Romnummer:
                    </p>
                    <input onChange={roomChange} placeholder={person.room}></input>
                    <br/>

                    <button type='submit'>
                        Lagre
                    </button>
                    <button onClick={abort}>
                        Avbryt
                    </button>
                </form>
            </div>
        )
    }

}

export default Specific