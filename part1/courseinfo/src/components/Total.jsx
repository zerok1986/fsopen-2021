export const Total = ({ parts }) => {
  const totalExercises =
    parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p>Number of exercises {totalExercises}</p>
}
