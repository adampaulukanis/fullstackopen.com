function Person(props) {
    const name = props.name
    const number = props.number
    return (
        <li>{name} ☎ {number}</li>
    )
}

export default Person
