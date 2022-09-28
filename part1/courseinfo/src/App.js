const Header = (props) => {
    console.log('Header', props);
    return <h1>{props.course}</h1>
}
const Content = (props) => {
    console.log('Content', props);
    return (
        <div>
            <Part part={props.part1} exercise={props.exercise1}/>
            <Part part={props.part2} exercise={props.exercise2}/>
            <Part part={props.part3} exercise={props.exercise3}/>
        </div>
    )
}
let counter = 0;
const Part = (props) => {
    console.log('Part', ++counter, props);
    return <p>{props.part} {props.exercise}</p>
}
const Total = (props) => {
    console.log('Total', props);
    return <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ],
    };

    return (
        <div>
            <Header course={course} />

            <Content parts={parts} />

            <Total parts={parts} />
        </div>
    );
}

export default App;
