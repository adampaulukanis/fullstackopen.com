import { useState } from 'react';

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons
            </div>
        );
    }

    return (
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    );
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const Display = (props) => <div>{props.value}</div>

const App = () => {
    const [ value, setValue ] = useState(17);
    const [ left, setLeft ] = useState(0);
    const [ right, setRight ] = useState(0);
    const [ allClicks, setAll] = useState([]);

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1);
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
            {right}

            <Display value={value}/>
            <History allClicks={allClicks}/>
        </div>
    );
}

export default App;
