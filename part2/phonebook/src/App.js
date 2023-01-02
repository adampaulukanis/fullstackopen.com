import './App.css'
import { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([])
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
        <>
            <h1>Phonebook</h1>

            <label htmlFor="filter">filter shown with:</label>
            <input
                name="filter"
                onChange={handleFilterChange}
            />

            <h2>Add a new</h2>
            <form onSubmit={addName}>
                <div>
                        <label htmlFor="name">name:</label>
                        <input
                            id="name"
                            name="name"
                            value={newName}
                            onChange={handleNameChange}
                        />
                </div>
                <div>
                    <label htmlFor="number">number:</label>
                    <input
                        id="number"
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
                {personsToShow.map(p =>
                    <li key={p.name}>{p.name} : {p.number}</li>
                )}
            </ul>
        </>
    )
}

export default App
