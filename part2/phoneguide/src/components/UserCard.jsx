import React from 'react'

export const UserCard = ({ user, deleteUser }) => {
  return (
    <div>
      {user.name} {user.number}
      <button onClick={deleteUser}>delete</button>
    </div>
  )
}
