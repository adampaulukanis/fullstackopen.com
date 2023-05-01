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
        // TODO: 4dd
        console.log("odpala sie efekt showOnly: ", showOnly)
        console.log({ countriesToShow })

        if(countriesToShow.length === 1) {
            countries.forEach(c => {
                if (c.name.official.toUpperCase().includes(showOnly.toUpperCase()) === true) {
                    // some countries / territories do not have capitals? Ex.: United States Minor Outlying Islands
                    // or OpenWeather API does not provide coordinates for the capital
                    if (Object.keys(c.capitalInfo).length === 0) {
                        console.log("This is the case where .capitalInfo looks different: capitalInfo=", c.capitalInfo)
                        c.capitalInfo = {}
                        c.capitalInfo.latlng = [
                            c.latlng[0],
                            c.latlng[1]
                        ]
                    }

                    let lat = c.capitalInfo.latlng[0]
                    let lng = c.capitalInfo.latlng[1]
                    axios
                        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
                        .then(result => {
                            let content = []
                            let weatherObj = result.data
                            console.log({ weatherObj })
                            let iconUrl = `https://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`
                            content.push(<li key="temp">temperature: {weatherObj?.main?.temp}°C</li>)
                            content.push(<li key="icon"><img src={iconUrl} alt="The icon representing the actual weather in the capital city." /></li>)
                            content.push(<li key="wind">wind: {weatherObj?.wind?.speed}</li>)

                            setWeather(content)
                        })
                }
            })
        }
    }, [showOnly])

    function handleSearchFormChange(event) {
        const findThisCountry = event.target.value
        console.log({ findThisCountry })
        setShowOnly(findThisCountry)
        setValue(findThisCountry)
        event.preventDefault()
    }

    let countriesToShow = showOnly
        ? countries.filter(c => c.name.official.toUpperCase().includes(showOnly.toUpperCase()) === true)
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
            <SearchForm nameClassStyle="find-country" changeHandler={handleSearchFormChange} clearHandler={clearInput} value={value} />
            <ul className="countries">
                {
                    countriesToShow.length === 1 &&
                        <li style={{flexDirection:"column"}}>
                            <h2><span className="flag">{countriesToShow[0].flag}</span> {countriesToShow[0].name.common}</h2>
                            <p>Official: {countriesToShow[0].name.official}</p>
                            <p>Capital: {countriesToShow[0].capital}</p>
                            <p>Region: {countriesToShow[0].region}</p>
                            <p>Area: {countriesToShow[0].area} km<sup>2</sup></p>

                            <h3>Languages:</h3>
                            <ul className="languages">
                                {getLanguagesContent(countriesToShow[0].languages)}
                            </ul>

                            <h3>Weather in {countriesToShow[0].capital}</h3>
                            <pre className="weather">
                                {weather}
                            </pre>
                        </li>
                }

                {countriesToShow.length > 1 && countriesToShow.map(country =>
                    <li key={country.name.official}>
                        <span className="flag">{country.flag}</span>
                        <h2 className="country-name">{country.name.common}</h2>
                        <button onClick={() => { setShowOnly(country.name.official); setValue(country.name.common) }}>show</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default App
