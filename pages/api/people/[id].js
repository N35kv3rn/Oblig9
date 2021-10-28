const people = require('../../../people.json')
const fs = require('fs')

export default function handler(req, res) {

    const idOfReq = req.query.id

    const filtered = people.filter(person =>
        person.id == req.query.id
    )

    if (req.method === 'GET') {
        if(filtered.length > 0) {
            res.status(200).json(filtered[0])
        } else {
            res.status(404).json({message: ` Person ${id} is not found`})
        }
    }

    if (req.method === 'PUT') {

        console.log('Put ran')
        console.log(req.body)

        req.body.id = (new Date()/1)

        const editPerson = people.find(
            (person) => person.id === parseInt(idOfReq)
        )

        const index = people.findIndex(
            (person) => person.id === parseInt(idOfReq)
        )

        people.splice(index, 1, req.body)
        fs.writeFileSync('people.json', JSON.stringify(people, null, 2))

        res.status(200).json(editPerson)

    }

    

    if (req.method === 'DELETE') {

        console.log("Delete ran")

        const deletedPerson = people.find(
          (person) => person.id === parseInt(idOfReq)
        )
    
        const index = people.findIndex(
          (person) => person.id === parseInt(idOfReq)
        )

        people.splice(index, 1)
        fs.writeFileSync('people.json', JSON.stringify(people, null, 2))
    
        res.status(200).json(deletedPerson)
    }
}