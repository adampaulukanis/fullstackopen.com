function SearchForm(props) {
    return (
        <form className={props.nameClassStyle}>
            <label>find countries
                <input
                    id="input-country"
                    onChange={props.changeHandler}
                    value={props.value}
                />
            </label>
            <button onClick={props.clearHandler}>clear</button>
        </form>
    )
}

export default SearchForm
