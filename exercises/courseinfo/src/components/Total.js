const Total = ({ total }) => {
    return <b>Total of {total.reduce((acc, curr) => acc + curr, 0)} exercises</b>
}

export default Total
