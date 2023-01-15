import Person from './Person'

function Persons(props) {
    return (
        <ul id="persons">
            {props.personsToShow.map(p =>
                <Person key={p.name} name={p.name} number={p.number} />
            )}
        </ul>
    )
}

export default Persons
