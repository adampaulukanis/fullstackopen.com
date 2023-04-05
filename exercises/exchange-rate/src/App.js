import "./App.css"

import { useState, useEffect } from "react"
import axios from "axios"

function App()
{
    const [ value, setValue ] = useState("")
    const [ rates, setRates ] = useState({})
    const [ currency, setCurrency ] = useState(null)

    console.log("----start--------------")
    console.log({ value, rates, currency })

    useEffect(() => {
        console.log("effect run, currency is now ", currency)

        // skip if currency is not defined
        if (currency) {
            console.log("fetching exchange rates...")
            axios
                .get(`https://open.er-api.com/v6/latest/${currency}`)
                .then(response => {
                    setRates(response.data.rates)
                })
        }
    }, [currency])

    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }

    const onSearch = (event) => {
        event.preventDefault()
        setCurrency(value)
    }

    return (
        <div className="App">
            <form onSubmit={onSearch}>
                <label>currency: <input value={value} onChange={handleChange} /></label> 
                <button type="submit">exchange rate</button>
            </form>
            <pre>
                {JSON.stringify(rates, null, 2)}
            </pre>
        </div>
    );
}

export default App
