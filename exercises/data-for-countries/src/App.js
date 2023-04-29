import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"
import SearchForm from "./components/SearchForm"

const baseUrl = "https://restcountries.com/v3.1/all"

function App()
{
    const [ value, setValue ] = useState("")
    const [ countries, setCountries ] = useState([])
    const [ showOnly, setShowOnly ] = useState("")
    const [ weather, setWeather ] = useState("pogoda")

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(result => {
                setCountries(result.data)
            })
    }, [] /* run only once */)

    useEffect(() => {
        console.log("odpala sie efekt showOnly: ", showOnly)

        if(countriesToShow.length === 1) {
            countries.filter(c => {
                if (c.name.common.toUpperCase().includes(showOnly.toUpperCase()) === true) {
                    getWeather(c.capitalInfo.latlng)
                    setWeather("kaszana w " + c.name.common)
                }
                return true
            })
        }
    }, [showOnly])

    function getWeather([lat, lng]) {
        console.log("fetching weather for ", lat, lng)
        /*
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(result => {
                console.log(result.data.weather)
            })
        */
    }

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

    function getLanguagesContent(languagesObject){
        let content = []
        for (const [short, lang] of Object.entries(languagesObject)) {
            content.push(<li key={short}>{lang}</li>)
        }
        return content
    }

    return (
        <div className="App">
            <SearchForm changeHandler={handleSearchFormChange} clearHandler={clearInput} value={value} />
            <ul className="countries">
                {
                    countriesToShow.length === 1 &&
                        <li style={{flexDirection:"column"}}>
                            <h2><span className="flag">{countriesToShow[0].flag}</span> {countriesToShow[0].name.common}</h2>
                            <p>Capital: {countriesToShow[0].capital}</p>
                            <p>Region: {countriesToShow[0].region}</p>
                            <p>Capital: {countriesToShow[0].capital}</p>
                            <p>Area: {countriesToShow[0].area} km<sup>2</sup></p>
                            <ul className="languages">Languages:
                                {getLanguagesContent(countriesToShow[0].languages)}
                            </ul>
                            <p>Weather in Capital: {JSON.stringify(weather, null, 2)}</p>
                        </li>
                }

                {countriesToShow.length > 1 && countriesToShow.map(country =>
                    <li key={country.name.official}>
                        <span className="flag">{country.flag}</span>
                        <h2 className="country-name">{country.name.common}</h2>
                        <button onClick={() => { setShowOnly(country.name.common); setValue(country.name.common) }}>show</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default App
