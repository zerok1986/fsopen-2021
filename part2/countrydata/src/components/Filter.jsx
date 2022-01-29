import React from 'react'

export const Filter = ({ filterText, handleFilter }) => {
  return (
    <div>
      find countries <input value={filterText} onChange={handleFilter} />
    </div>
  )
}
