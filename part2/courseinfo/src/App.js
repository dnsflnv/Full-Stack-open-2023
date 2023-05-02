const Header = ({ caption }) => {
  return (
    <h1>{caption}</h1>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((acc, item) => acc + item.exercises, 0)
  return <p><b>Number of exercises {total}</b></p>
}

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {parts.map(element =>
      (<Part key={element.id} name={element.name} exercises={element.exercises} />)
    )}
  </>
)

const Course = ({ course }) => (
  <>
    <Header caption={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App