function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number, i) =>
        <ListItem key={i} value={number} />
    )

    return (
        <ul>{listItems}</ul>
    )
}

export default NumberList
