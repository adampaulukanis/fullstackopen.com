let counter = 17

const Note = ({ note }) => {
    return (
        <li value={++counter}>{note.content}</li>
    )
}

export default Note
