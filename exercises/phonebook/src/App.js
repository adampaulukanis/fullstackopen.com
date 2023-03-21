import { useState, useEffect } from "react"
import SearchFilter from "./components/SearchFilter"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import axios from "axios"

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState("")
    const [ newNumber, setNewNumber ] = useState("")
    const [ showOnly, setShowOnly ] = useState("")

    useEffect(() => {
        console.log("Effect")
        axios
            .get("http://localhost:3001/persons")
            .then((response) => {
                console.log("Promise fullfilled")
                setPersons(response.data)
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

        axios
            .post("http://localhost:3001/persons", nameObject)
            .then(response => {
                setPersons(persons.concat(nameObject))
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
