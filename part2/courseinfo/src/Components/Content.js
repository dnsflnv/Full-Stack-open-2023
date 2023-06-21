import Part from "./Part"

const Content = ({ parts }) => (
  <>
    {parts.map(element =>
      (<Part key={element.id} name={element.name} exercises={element.exercises} />)
    )}
  </>
)

export default Content