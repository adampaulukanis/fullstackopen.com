console.log('App.js');

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old.</p>
        </div>
    );
}

const Footer = () => {
    return (
        <div>
            Greeting app created by <a href="abc">ABC</a>
        </div>
    );
}

const App = () => {
    const name = 'Peter';
    const age = 10;
    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
            <Hello name="kaszanka" age={2022-1985} />
            <Footer />
        </>
    );
}

export default App;
