import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './components/Button'
import { Stats } from './components/Stats'

const App = () => {
  const handleClick = (text) => {
    if (text === 'good') {
      setGood(good + 1)
    } else if (text === 'neutral') {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <section>
      <h2>give feedback</h2>
      <Button text={'good'} handleClick={handleClick} />
      <Button text={'neutral'} handleClick={handleClick} />
      <Button text={'bad'} handleClick={handleClick} />
      <h2>statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Stats countGood={good} countNeutral={neutral} countBad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
