import React from 'react'
import { Part } from './Part'

export const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} numExercises={part.exercises} />
      ))}
    </div>
  )
}
