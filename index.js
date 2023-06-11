const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
        response.json({ info: 'Node.js, Express, and Postgres API' })
    })
    //test
app.get('/geometry', db.getUsers)
app.get('/geometry/:id', db.getUserById)
app.post('/geometry', db.createUser)
app.put('/geometry/:id', db.updateUser)
app.delete('/geometry/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})