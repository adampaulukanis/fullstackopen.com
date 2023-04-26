function Country({ name, flag, languages=null, region=null, area=null, capital=null }) {
    function getLanguagesContent(languagesObject){
        let content = []
        for (const [short, lang] of Object.entries(languagesObject)) {
            content.push(<li key={short}>{lang}</li>)
        }
        return content
    }
    getLanguagesContent(languages)
    return (
        <li>
            <h1 className="country-name">{name}</h1>
            <p className="flag">{flag}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <ul className="languages">Languages:{getLanguagesContent(languages)}</ul>
        </li>
    )
}

export default Country
