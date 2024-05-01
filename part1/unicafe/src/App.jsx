import { useState } from 'react'

const StatisticLine = ({text, stat, text2}) => {
  return (
    <tr>
      <td>{text}: </td>
      <td> {stat}{text2} </td>
    </tr>
  )
}
const Statistics = ({good, neutral, bad, total, avg, positive}) => {

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    
    <table>
       <tbody>
        <StatisticLine text="Good" stat ={good} />
        <StatisticLine text="Neutral" stat ={neutral} />
        <StatisticLine text="Bad" stat ={bad} />
        <StatisticLine text="All" stat ={total} />
        <StatisticLine text="Average" stat ={avg} />
        <StatisticLine text="Positive" stat ={positive} text2 = "%"/>
        </tbody>
    
    </table>
  
  )

}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)
  const avg = sum/total
  const pos = good/total*100

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total+1)
    setSum(sum+1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total+1)
    setSum(sum-1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGood} text = "Good" />
      <Button handleClick={handleNeutral} text = "Neutral" />
      <Button handleClick={handleBad} text = "Bad" />

      <h1>Statistics</h1>    
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} avg = {avg} positive = {pos} />

     

    </div>
  )
}

export default App