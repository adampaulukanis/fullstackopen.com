import { useState } from 'react';

const Display = ({ counter }) => {
    return (
        <div>{counter}</div>
    );
}

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

const App = () => {
    const [ counter, setCounter ] = useState(0);

    const increaseByOne =       () => setCounter(counter + 1);
    const setToZero =           () => setCounter(0);
    const decreaseByOne =       () => setCounter(counter - 1);

    return (
        <div>
            <Display counter={counter}/>
            <Button
                onClick={decreaseByOne}
                text='minus'
            />
            <Button
                onClick={setToZero}
                text='reset'
            />
            <Button
                onClick={increaseByOne}
                text='plus'
            />
        </div>
    );
}

export default App;
