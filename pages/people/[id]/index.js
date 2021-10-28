import Link from 'next/link'
import {useRouter} from 'next/router'
import Specific from '../../components/Specific'
import styles from '../../../styles/Home.module.css'

const person = ({ person }) => {

    const router = useRouter()
    const {id} = router.query

    return(
        <Specific person={person}/>
    )
}

export const getServerSideProps = async (context) => {
    const config = {
        method: 'GET',
    }
    const res = await fetch(`http://localhost:3000/api/people/${context.params.id}`, config)
    const person = await res.json()

    return {
        props: {
            person
        }
    }
}

export default person