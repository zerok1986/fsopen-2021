import { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './components/Button'
import { Vote } from './components/Vote'
import { Title } from './components/Title'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]
  const [selected, setSelected] = useState(anecdotes[0])

  const getRandomAnecdote = (list) => {
    let randomAnecdote = list[Math.floor(Math.random() * list.length)]
    setSelected(randomAnecdote)
  }

  const [votes, setVotes] = useState(new Array(7).fill(0))
  const votesCopy = [...votes]

  const handleVote = () => {
    votesCopy[anecdotes.indexOf(selected)] += 1
    setVotes(votesCopy)
  }

  let mostVoted = votes.indexOf(Math.max(...votes))

  // votes.reduce((acc, curr) => Math.max(acc, curr))

  return (
    <>
      <Title text={'Anecdote of the day'} />
      <p>{selected}</p>
      <p>has {votes[anecdotes.indexOf(selected)]} votes</p>
      <Vote handleVote={handleVote} />
      <Button anecdotes={anecdotes} handleClick={getRandomAnecdote} />
      <hr />
      <Title text={'Anecdote with the most votes'} />
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
