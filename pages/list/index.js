import List from '../components/List'

const Index = ({ people} ) => {
  return (
      <List people={people} />
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/people`)
  
    const people = await res.json()
  
    return {
      props: {
        people
      }
    }
  }

export default Index