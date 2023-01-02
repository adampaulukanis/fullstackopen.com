import './App.css'
import { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
    ])
    const [ newName, setNewName ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        if (newName === '') {
            console.log('Trying to add empty string')
            return
        }
        // Check if the name already is added
        if (persons.some(p => p.name === newName)) {
            alert(`${newName} is already in the phonebook!`)
            setNewName('')
            return
        }
        // It's OK, so add a new name
        const nameObject = {
            name: newName,
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
    }

    const handleNameChange = (event) => {
        if (event.target.value === '') {
            return
        }
        setNewName(event.target.value)
    }

    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input 
                                value={newName}
                                onChange={handleNameChange}
                            />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul id="persons">
                {persons.map(p =>
                    <li key={p.name}>{p.name}</li>
                )}
            </ul>
        </>
    )
}

export default App
