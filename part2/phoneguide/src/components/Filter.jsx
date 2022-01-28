import React from 'react'

export const Filter = ({ filterText, handleFilter }) => {
  return (
    <div>
      filter shown with <input value={filterText} onChange={handleFilter} />
    </div>
  )
}
