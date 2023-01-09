function Form() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log('You clicked submit')
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form
