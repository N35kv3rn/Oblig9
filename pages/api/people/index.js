import person from '../../people/[id]'

const users = require('../../../people.json')
const fs = require('fs')

export default function handler(req, res) {
  if(req.method === 'GET') {
    console.log(users)
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    req.body.id = (new Date()/1)
    users.push(req.body)
    console.log(req.body)
    fs.writeFileSync('people.json', JSON.stringify(users, null, 2))
  }
  
}
