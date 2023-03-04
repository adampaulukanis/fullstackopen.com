import { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ showOnly, setShowOnly ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        if (newName === '' || newNumber === '') {
            alert('Trying to add empty string')
            setNewName('')
            setNewNumber('')
            return
        }
        // Check if the name already is added
        if (persons.some(p => p.name === newName)) {
            alert(`${newName} is already in the phonebook!`)
            setNewName('')
            setNewNumber('')
            return
        }
        // It's OK, so add a new name
        const nameObject = {
            name: newName.trim(),
            number: newNumber.trim(),
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')

        document.querySelector('#name').focus()
    }

    const handleNameChange = (event) => {
        if (event.target.value === '') {
            setNewName('')
            return
        }
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        const number = event.target.value
        if (number === '') {
            setNewNumber('')
            return
        }
        setNewNumber(number)
    }
    const handleFilterChange = (event) => {
        const findThisName = event.target.value
        setShowOnly(findThisName)
    }

    const personsToShow = showOnly
        ? persons.filter(p => p.name.toLowerCase().includes(showOnly.toLowerCase()))
        : persons

    return (
        <div id="my-app">
            <h1>Phonebook</h1>

            <SearchFilter changeHandler={handleFilterChange} />

            <div className="PersonFarm">
                <h2>Add a new</h2>

                <PersonForm
                    handleSubmit={addName}
                    newNameValue={newName}
                    handleNameChange={handleNameChange}
                    newNumberValue={newNumber}
                    handleNumberChange={handleNumberChange}
                />
            </div>

            <h2>Numbers</h2>

            <Persons personsToShow={personsToShow} />
        </div>
    )
}

export default App
