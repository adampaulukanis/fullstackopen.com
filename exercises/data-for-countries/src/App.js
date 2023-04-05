import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"

const baseUrl = "https://restcountries.com/v3.1/all"

function DisplayCountries({ countries })
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
                <p>Languages:</p>
                <ul>{getLanguagesContent(country.languages)}</ul>
            </section>
        )
    } else {
        return (
            <pre>
                {countries.map(c => c.name.common + " " + c.flag + "\n")}
            </pre>
        )
    }
}

function App()
{
    const [ filtered, setFiltered ] = useState([])
    const [ initial, setInitial ] = useState([])

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(result => {
                setInitial(result.data)
                setFiltered(result.data)
            })
    }, []) // fire up only once

    function handleOnChange(event) {
        const value = event.target.value
        setFiltered(initial.filter(c => c.name.common.toUpperCase().includes(value.toUpperCase()) === true))
    }

    return (
        <div className="App">
            <form>
                <section className="input-zone">
                    <label>find countries
                        <input onChange={handleOnChange} />
                    </label>
                </section>
                <DisplayCountries countries={filtered} />
            </form>
        </div>
    )
}

export default App
