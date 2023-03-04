import { useState, useEffect } from "react"
import Note from "./components/Note"
import axios from "axios"

const App = () => {
    const [ notes, setNotes ] = useState([])
    const [ newNote, setNewNote ] = useState("")
    const [ showAll, setShowAll ] = useState(true)

    useEffect(() => {
        console.log("Effect")
        axios
            .get("http://localhost:3001/notes/")
            .then((response) => {
                console.log("Promise fulfilled")
                setNotes(response.data)
            })
    }, [] /* The effect is only run along with the first render of the component, because of [] */)
    console.log("Render", notes.length, "notes")

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }

        setNotes(notes.concat(noteObject))
        setNewNote("")
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? "important" : "all"}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note}/>
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App
