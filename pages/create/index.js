import {useReducer, useState} from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'

const Create = () => {

    const [person, setPerson] = useState({
        name: "",
        age: 0,
        gender: "",
        room: ""
    })

    const clearState = () => {
        setPerson({
            name: '',
            age: 0,
            gender: '',
            room: ''
        })
    }

    const handleForm = e => {
        e.preventDefault();
        console.log(person)

        postPerson();
        clearState();
        Router.reload()
    }

    const postPerson = async () => {
        const config = {
            method: 'POST',
            body: JSON.stringify(person),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const fetchResponse = await fetch('http://localhost:3000/api/people', config)
        const data = await fetchResponse.json();

        return data;
        
    }

    const nameChange = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            name: e.target.value
        }))
    }

    const ageChange = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            age: e.target.value
        }))
    }

    const genderChange = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            gender: e.target.value
        }))
    }

    const roomChange = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            room: e.target.value
        }))
    }

    return(
        <div className={styles.container}>
            <form onSubmit={handleForm}>
                <h2>Create person:</h2>
                <p>Name:</p>
                <input onChange={nameChange} value={person.name} type="text"/>
                <p>Age:</p>
                <input onChange={ageChange} value={person.age} type="number"/>
                <p>Gender:</p>
                <input onChange={genderChange} value={person.gender} type="text"/>
                <p>Room:</p>
                <input onChange={roomChange} value={person.room} type="text"/>
                <br/>
                <button className={styles.backButton} type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Create