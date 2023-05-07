const persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    },
    {
        "id": 6,
        "name": "X Files",
        "number": "123-345-567"
    }
]

import express from "express"
const app = express()

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/info", (request, response) => {
    let timeOfThisEvent = new Date()
    console.log(timeOfThisEvent)
    response.send(`<html>
    <body>
    <p>Phonebook has info for <span style="">${persons.length}</span> people.</p>
    <p>${timeOfThisEvent}</p>
    `)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})
