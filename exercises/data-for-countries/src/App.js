import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"
import Country from "./components/Country"
import CountryNameFlag from "./components/CountryNameFlag"
import SearchForm from "./components/SearchForm"

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

    function weatherInCapital(lat, lon) {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(result => {
                console.log(result.data.weather[0])
                /* it dos not work like this */
                return "siiemammmm"
                return JSON.stringify(result.data.weather[0], null, 2)
            })
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

                <pre>{weatherInCapital(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])}</pre>

                <pre>
                    {
                        //JSON.stringify(country, null, 2)
                    }
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
    const [ value, setValue ] = useState("")
    const [ countries, setCountries ] = useState([])
    const [ showOnly, setShowOnly ] = useState("")

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(result => {
                setCountries(result.data)
            })
    }, [] /* runs only once */)

    function handleSearchFormChange(event) {
        const findThisCountry = event.target.value
        console.log({ findThisCountry })
        setShowOnly(findThisCountry)
        setValue(findThisCountry)
    }

    const countriesToShow = showOnly
        ? countries.filter(c => c.name.common.toUpperCase().includes(showOnly.toUpperCase()) === true)
        : countries

    function clearInput(event) {
        event.preventDefault()
        setShowOnly("")
        setValue("")
    }

    function pokaKraje(countriesToShow) {
        console.log(countriesToShow)
        if (countriesToShow.length === 1) {
            let country = countriesToShow[0]
            return (
                <Country
                    name={country.name.common}
                    flag={country.flag}
                    capital={country.capital}
                    languages={country.languages}
                    region={country.region}
                    area={country.area}
                />
            )
        } else {
            return (
                countriesToShow.map(country =>
                    <CountryNameFlag
                        name={country.name.common}
                        flag={country.flag}
                        pressShow={() => { setShowOnly(country.name.common); setValue(country.name.common) }}
                    />
                )
            )
        }
    }

    return (
        <div className="App">
            <SearchForm changeHandler={handleSearchFormChange} clearHandler={clearInput} value={value} />
            <ul className="countries">
                {
                    pokaKraje(countriesToShow)
                }
            </ul>
        </div>
    )
}

export default App
