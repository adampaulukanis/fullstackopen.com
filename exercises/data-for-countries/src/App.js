import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"

const baseUrl = "https://restcountries.com/v3.1/all"

function DisplayCountries({ countries, clickMe })
{
    function getLanguagesContent(languagesObject){
        let content = []
        for (const [short, lang] of Object.entries(languagesObject)) {
            content.push(<li key={short}>{lang}</li>)
        }
        return content
    }

    if (countries.length === 1) {
        let country = countries[0]
        return (
            <section className="one-country">
                <h2>{country.name.common} {country.flag}</h2>
                <p>capital: {country.capital}</p>
                <p>area: {country.area}</p>
                <p>region: {country.region}</p>
                <p>Languages:</p>
                <ul>{getLanguagesContent(country.languages)}</ul>
                <pre>
                    {JSON.stringify(country, null, 2)}
                </pre>
            </section>
        )
    } else {
        return (
            <ul>
                {
                    countries.map(c =>
                        <li
                            key={c.name.common}
                        >
                            {c.flag}
                            <span> {c.name.common} </span>
                            <button
                                onClick={() => clickMe(c.name)}
                            >show</button>
                        </li>
                    )
                }
            </ul>
        )
    }
}

function App()
{
    const [ filtered, setFiltered ] = useState([])
    const [ initial, setInitial ] = useState([])
    const [ value, setValue ] = useState("")

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(result => {
                setInitial(result.data)
                setFiltered(result.data)
            })
    }, [] /* runs only once */)

    useEffect(() => {
        console.log({ value })
        setFiltered(initial.filter(c => c.name.common.toUpperCase().includes(value.toUpperCase()) === true))
    }, [value])

    function handleOnChange(event) {
        setValue(event.target.value)
    }

    function displayCountry(name) {
        console.log(`Country to be displayed is ${name.official}`)
        setFiltered(filtered.filter(c => c.name.official.toUpperCase().includes(name.official.toUpperCase()) === true))
        setValue(name.common)
    }

    function clearInputCountry(e) {
        e.preventDefault()
        setValue("")
    }

    return (
        <div className="App">
            <form>
                <section className="input-zone">
                    <label>find countries
                        <input onChange={handleOnChange} value={value} />
                    </label>
                    <button onClick={clearInputCountry}>clear</button>
                </section>
            </form>
            <DisplayCountries countries={filtered} clickMe={displayCountry} />
        </div>
    )
}

export default App
