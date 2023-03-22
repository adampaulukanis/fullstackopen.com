import { useState, useEffect } from "react"
import SearchFilter from "./components/SearchFilter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"
import communication from "./services/communication"

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState("")
    const [ newNumber, setNewNumber ] = useState("")
    const [ showOnly, setShowOnly ] = useState("")

    useEffect(() => {
        console.log("First render")
        communication
            .getAll()
            .then(initialData => {
                console.log(initialData)
                setPersons(initialData)
            })
    }, [] /* The effect is only run along with the first render of the component, because of [] */)

    const addName = (event) => {
        event.preventDefault()
        if (newName === "" || newNumber === "") {
            alert("Trying to add empty string")
            setNewName("")
            setNewNumber("")
            return
        }

        // Check if the name already is added
        if (persons.some(p => p.name === newName)) {
            alert(`${newName} is already in the phonebook!`)
            setNewName("")
            setNewNumber("")
            return
        }

        // It's OK, so add a new name
        const nameObject = {
            name: newName.trim(),
            number: newNumber.trim(),
        }

        console.log("------ Will add the new person ------")
        console.log(nameObject)
        console.log("-------------------------------------")

        communication
            .create(nameObject)
            .then(returnedPersons => {
                setPersons(persons.concat(returnedPersons))
                setNewName("")
                setNewNumber("")
            })

        document.querySelector("#name").focus()
    }

    const handleNameChange = (event) => {
        if (event.target.value === "") {
            setNewName("")
            return
        }
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        const number = event.target.value
        if (number === "") {
            setNewNumber("")
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

    const deletePerson = (id) => {
        console.log(`deleting ${id}............`)
        communication
            .remove(id)
           .then(data => {
                console.log(data)
                setPersons(data)
            })
    }

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

            <ul id="persons">
                {personsToShow.map(p =>
                    <Person
                        key={p.id}
                        name={p.name}
                        number={p.number}
                        removeMe={() => deletePerson(p.id)}
                    />
                )}
            </ul>
        </div>
    )
}

export default App
