import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const max = anecdotes.length
   
  const [selected, setSelected] = useState(0)
  const rnum = () => {
    setSelected(Math.floor(Math.random()*max))
  }

  const [maxIndex, setMaxIndex] = useState(0)

  const [points, setPoints] = useState(new Array(max).fill(0))
  const vote = () => {
    const pointsCopy = {...points}
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
    
    let maxInd = 0; 
    for (let i = 1; i < max; i++) { 
          if (pointsCopy[i] > pointsCopy[maxInd]) { 
              maxInd = i; 
          } 
    } 
    setMaxIndex(maxInd)
   
  }
  


  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <Button onClick={rnum} text="next anecdote" />
      <Button onClick={vote} text="vote"/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxIndex]}</div>

     
    </div>
  )
}

export default App