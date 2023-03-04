function SearchFilter(props) {
    return (
        <>
            <label htmlFor="filter">filter shown with:</label>
            <input
                name="filter"
                onChange={props.changeHandler}
            />
        </>
    )
}

export default SearchFilter
