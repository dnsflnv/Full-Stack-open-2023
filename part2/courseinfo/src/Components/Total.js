const Total = ({ parts }) => {
  const total = parts.reduce((acc, item) => acc + item.exercises, 0)
  return <p><b>Number of exercises {total}</b></p>
}

export default Total