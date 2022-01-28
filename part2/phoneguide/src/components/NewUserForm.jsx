import React from 'react'

export const NewUserForm = ({
  addUser,
  newName,
  newNumber,
  handleNameChange,
  handleNumChange,
}) => {
  return (
    <form onSubmit={addUser}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{' '}
        <input type="tel" value={newNumber} onChange={handleNumChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
