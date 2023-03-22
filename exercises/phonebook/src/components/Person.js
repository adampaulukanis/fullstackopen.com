function Person({ name, number, removeMe }) {
    return (
        <li>
            {name} ☎ {number}
            <button onClick={removeMe}>del</button>
        </li>
    )
}

export default Person
