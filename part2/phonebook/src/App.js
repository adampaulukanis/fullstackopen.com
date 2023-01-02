import './App.css'
import { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        if (newName === '' || newNumber === '') {
            alert('Trying to add empty string')
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
            name: newName,
            number: newNumber,
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        if (event.target.value === '') {
            return
        }
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        const number = event.target.value
        if (number === '') {
            return
        }
        setNewNumber(number)
    }

    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                        <label htmlFor="name">name:</label>
                        <input
                            name="name"
                            value={newName}
                            onChange={handleNameChange}
                        />
                </div>
                <div>
                    <label htmlFor="number">number:</label>
                    <input
                        name="number"
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul id="persons">
                {persons.map(p =>
                    <li key={p.name}>{p.name} : {p.number}</li>
                )}
            </ul>
        </>
    )
}

export default App
