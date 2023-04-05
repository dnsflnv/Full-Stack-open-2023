const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {
  let total = 0;
  props.parts.forEach((val) => {
    total += val.exercises
  })

  return <p>Number of exercises {total}</p>
}

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Content = (props) => {
  let out = []

  console.log(out)
  return (
    <>
      {props.parts.map(element =>
        (<Part key={element.name} name={element.name} exercises={element.exercises} />)
      )}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App