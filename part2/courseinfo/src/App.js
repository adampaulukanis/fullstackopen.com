import Course from './components/Course'

const App = ({ courses }) => {
    console.log(courses)
    return (
        <>
            <h1>Web Development Curriculum</h1>

        {courses.map(course =>
            <Course course={course}/>
        )}
        </>
    )
}

export default App
