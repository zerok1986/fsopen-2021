import React from 'react'

export const List = ({ country, handleClick }) => {
  return (
    <div>
      {country.name.common}
      <button onClick={() => handleClick(country)}>show</button>
    </div>
  )
}
