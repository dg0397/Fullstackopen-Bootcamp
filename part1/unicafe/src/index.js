import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({data}) => {
  const {title} = data;
  return(
    <h1>{title}</h1>
  )
}

const Button = ({handleClick,title}) => {
  return(
    <button onClick = {handleClick}>{title}</button>
  )
}

const Statistics = ({good,neutral,bad,average,positive,total}) => {
  return(
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad; 
  let averageScore = (good - bad)/total;//(good: 1, neutral: 0, bad: -1)
  let positive = (good/total) *100;

  if(!positive) positive = 0;
  if(!averageScore) averageScore = 0;

  const data = {
    title : "Give Feedback",
    category : ['good','neutral','bad']
  }

  const handlerClicks = (btnType) => {
    if(btnType === 'good'){
      return (() => setGood(good + 1))
    }else if(btnType === 'neutral'){
      return () => setNeutral(neutral + 1)
    }else{
      return () => setBad(bad + 1)
    }
  }

  return (
    <div>
      <Header data = {data}/>
      {
        data.category.map(btn =>{
          return(
            <Button key = {btn} title = {btn} handleClick = {handlerClicks(btn)} />
          )
        })
      }
      <Statistics
        good = {good} 
        neutral = {neutral} 
        bad = {bad} 
        total = {total}
        average = {averageScore}
        positive = {positive}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)