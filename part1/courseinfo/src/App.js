const Header = (props) => {
  return (
    <h1>{props.caption}</h1>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
)

const Part = (props) => (
  <p>
    {props.part} {props.ex}
  </p>
)

const Content = (props) => {
  return (
    <>
      <Part part={props.part1.name} ex={props.part1.exercises} />
      <Part part={props.part2.name} ex={props.part2.exercises} />
      <Part part={props.part3.name} ex={props.part3.exercises} />

    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header caption={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App