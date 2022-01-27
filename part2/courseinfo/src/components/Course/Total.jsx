import React from 'react'

export const Total = ({ course }) => {
  // Function reduce() allowing us to easily sum each part exercises
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  )
}
