function PersonForm(props) {
    return (
        <div id="PersonForm">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="name">name:</label>
                    <input
                        id="name"
                        name="name"
                        value={props.newNameValue}
                        onChange={props.handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="number">number:</label>
                    <input
                        id="number"
                        name="number"
                        value={props.newNumberValue}
                        onChange={props.handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
