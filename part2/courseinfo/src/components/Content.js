import Part from './Part'

const Content = ({ parts }) => {
    return (
        <section>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercise={part.exercises}/>
            )}
        </section>
    )
}

export default Content
