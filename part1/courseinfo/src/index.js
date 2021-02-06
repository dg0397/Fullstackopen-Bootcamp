import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  const {name} = course;
  return(
    <h1>{name}</h1>
  )
}

const Content = ({course}) => {
  const {parts} = course;
  return(
    <div>
      {
        parts.map(partData => {
          return(
            <Part part = {partData} />
          )
        })
      }
    </div>
  )
}

const Part = ({part}) => {
  const {name,exercises} = part;
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({course}) => {
  const {parts} = course;
  const totalOfExercises = parts.map(part => part.exercises).reduce((a,b)=>a+b,0)
  return (
    <p>Number of exercises {totalOfExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course}/>
      <Content course = {course} />
      <Total course = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))