function Persons(props) {
    return (
        <ul id="persons">
            {props.personsToShow.map(p =>
                <li key={p.name}>{p.name} : {p.number}</li>
            )}
        </ul>
    )
}

export default Persons
