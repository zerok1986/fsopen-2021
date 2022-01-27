export const Button = ({ anecdotes, handleClick }) => {
  return <button onClick={() => handleClick(anecdotes)}>next anecdote</button>
}
