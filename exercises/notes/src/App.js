import { useState, useEffect } from "react"
import Note from "./components/Note"
import Notification from "./components/Notification"
import noteService from "./services/notes"
import "./index.css"

const Footer = () => {
    const footerStyle = {
        color: "green",
        fontStyle: "italic",
        fontSize: 16
    }

    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, pokój Adama 2023</em>
        </div>
    )
}

const App = () => {
    const [ notes, setNotes ] = useState([])
    const [ newNote, setNewNote ] = useState("")
    const [ showAll, setShowAll ] = useState(true)
    const [ errorMessage, setErrorMessage ] = useState(null)

    useEffect(() => {
        console.log("useEffect starts")
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [] /* The effect is only run along with the first render of the component, because of [] */)

    const addNote = (event) => {
        console.log("form submit starts")
        event.preventDefault()

        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
        }
        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote("")
            })
    }

    const handleNoteChange = (event) => {
        /* This function fires up every time when the input receives change event */
        console.log("handleNoteChange:", event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const toggleImportanceOf = (id) => {
        console.log("toggleImportanceOf", id)
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                console.log({ returnedNote })
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })
            .catch(error => {
                setErrorMessage(
                    `the note "${note.content}" was already deleted from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    return (
        <div className="apka">
            <h1>Notes</h1>

            <Notification message={errorMessage} />

            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? "important" : "all"}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                <Note
                    key={note.id}
                    note={note}
                    toggleImportance={() => toggleImportanceOf(note.id)}
                />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>

            <Footer />
        </div>
    )
}

export default App
