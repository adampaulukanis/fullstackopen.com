import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name}/>

            <Content parts={course.parts}/>

            <Total total={course.parts.map(p => p.exercises)}/>
        </>
    )
}

export default Course
