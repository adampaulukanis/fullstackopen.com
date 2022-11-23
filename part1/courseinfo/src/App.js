const Header = ({ course }) => {
    return <h1>{course}</h1>
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercise={props.exercise1}/>
            <Part part={props.part2} exercise={props.exercise2}/>
            <Part part={props.part3} exercise={props.exercise3}/>
        </div>
    )
}
const Part = (props) => {
    return <p>{props.part} {props.exercise}</p>
}
const Total = (props) => {
    return <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
}
const App = (props) => {
    const { counter } = props;
    return <div>{counter}</div>;
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
            <Header course={course.name} />

            <Content parts={course.parts} />

            <Total parts={course.parts} />
        </div>
    );
}

export default App;
