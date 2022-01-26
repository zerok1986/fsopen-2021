import { Stat } from './Stat'

export const Stats = ({ countGood, countNeutral, countBad }) => {
  const sum = (...nums) => nums.reduce((prev, curr) => prev + curr)

  const average = (...nums) => nums.reduce((a, b) => a + b) / nums.length

  const positiveAvg = (countGood, totalNums) => countGood / totalNums + '%'

  const total = sum(countGood, countNeutral, countBad)

  return (
    <table>
      <tbody>
        <Stat text="good" value={countGood} />
        <Stat text="neutral" value={countNeutral} />
        <Stat text="bad" value={countBad} />
        <Stat text="total" value={total} />
        <Stat
          text="average"
          value={average(countGood, countNeutral, countBad)}
        />
        <Stat text="positive" value={total && positiveAvg(countGood, total)} />
      </tbody>
    </table>
  )
}
