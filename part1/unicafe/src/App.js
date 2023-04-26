import React, { useState } from 'react'

const Header = ({ headerText }) => <h1>{headerText}</h1>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, number, isPersent }) => {
  let persent = ''
  if (isPersent === true) persent = '%'
  return (
    <tr>
      <td>{text}:</td>
      <td>{number}{persent}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  let averange = 0
  let positive = 0

  if (all > 0) {
    averange = good / all - bad / all
    positive = good * 100 / all
  }

  if (all !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text='Good' number={good} />
            <StatisticLine text='Neutral' number={neutral} />
            <StatisticLine text='Bad' number={bad} />
            <StatisticLine text='All' number={all} />
            <StatisticLine text='Averange' number={averange} />
            <StatisticLine text='Positive' number={positive} isPersent={true} />
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given.</p>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  };

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header headerText={'Give Feedback'} />
      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App