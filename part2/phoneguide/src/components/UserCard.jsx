import React from 'react'

export const UserCard = ({ user }) => {
  return (
    <div>
      {user.name} {user.number}
    </div>
  )
}
