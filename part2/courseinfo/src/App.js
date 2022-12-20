import Course from './components/Course'

const App = ({ courses }) => {
    return (
        <>
            <h1>Web Development Curriculum</h1>

        {courses.map(course =>
            <Course key={course.id} course={course}/>
        )}
        </>
    )
}

export default App
