function CountryNameFlag({ name, flag, pressShow }) {
    return (
        <li className="one-of-many">
            <span className="flag">{flag}</span>
            <span className="country-name">{name}</span>
            <button onClick={pressShow}>show</button>
        </li>
    )
}

export default CountryNameFlag
