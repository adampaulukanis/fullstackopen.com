import { useState, useEffect } from "react"
import SearchFilter from "./components/SearchFilter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"
import communication from "./services/communication"
import Notification from "./components/Notification"

const App = () => {
    const notificationTime = 10000

    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState("")
    const [ newNumber, setNewNumber ] = useState("")
    const [ showOnly, setShowOnly ] = useState("")
    const [ notificationMessage, setNotificationMessage ] = useState(null)
    const [ notificationStatus, setNotificationStatus ] = useState("green")

    useEffect(() => {
        console.log("First render")
        communication
            .getAll()
            .then(initialData => {
                console.log("---------first Render----------------")
                console.log(initialData)
                console.log("---------first Render----------------")
                setPersons(initialData)
            })
            .catch(error => {
                console.error(error)
                setNotificationMessage("Error occurred while getAll", error)
                setNotificationStatus("red")
                setTimeout(() => {
                    setNotificationMessage(null)
                }, notificationTime)
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
            let personAlreadyIn = persons.filter(p => p.name === newName)[0]
            let updatedPerson = { ...personAlreadyIn, number: newNumber }
            if (window.confirm(`${personAlreadyIn.name} is already added to phonebook, replace the old number with the new one?`)) {
                console.log("Replaceing phone numbers for ", personAlreadyIn)
                communication
                    .update(updatedPerson)
                    .then(response  => {
                        console.log("---------replace phone number--------")
                        setPersons([ ...persons.filter(p => p.name !== updatedPerson.name), updatedPerson ]) // TODO: this is wrong!

                        setNotificationMessage(`${JSON.stringify(personAlreadyIn)} has changed the number and the new one is ${newNumber}`)
                        setNotificationStatus("green")
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, notificationTime)
                    })
                    .catch(error => {
                        console.error(error)
                        setNotificationMessage("Error occurred while update", error)
                        setNotificationStatus("red")
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, notificationTime)
                    })

                setNewName("")
                setNewNumber("")
            }
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

                setNotificationMessage(`New person (${JSON.stringify(returnedPersons)}) was added`)
                setNotificationStatus("green")
                setTimeout(() => {
                    setNotificationMessage(null)
                }, notificationTime)
            })
            .catch(error => {
                console.error(error)
                setNotificationMessage(`An error occurred  (${error})`)
                setNotificationStatus("red")
                console.error(error)
                setTimeout(() => {
                    setNotificationMessage(null)
                }, notificationTime)
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
        const personToBeDeleted = persons.filter(p => p.id === id)[0].name
        if (window.confirm(`Delete ${personToBeDeleted}?`)) {
            communication
                .remove(id)
                .then(response => {
                    console.log("---------deletePerson----------------")
                    console.log(response)
                    console.log(response.status)
                    console.log(response.status === 200)
                    console.log(persons)
                    console.log("Person " + personToBeDeleted + " deleted")
                    setPersons([ ...persons.filter(p => p.id !== id) ])
                    console.log("---------deletePerson----------------")
                    setNotificationMessage("Person " + personToBeDeleted + " deleted")
                    setNotificationStatus("green")
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, notificationTime)
                })
                .catch(error => {
                    setNotificationMessage(`An error occurred  (${error})`)
                    setNotificationStatus("red")
                    console.error(error)
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, notificationTime)
                })
        }
    }

    return (
        <div id="my-app">
            <h1>Phonebook</h1>

            <Notification message={notificationMessage} status={notificationStatus} />

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
