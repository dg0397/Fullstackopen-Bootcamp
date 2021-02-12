import React, { useState } from 'react'

const Person = ({name}) => {
    return(
        <p>{name}</p>
    )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();
      const person = {
          name: newName
      }
      setPersons(persons.concat(person))
      setNewName("")
  }

  const handleChange = (e) => {
      setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          name: <input  value = {newName} onChange = {handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
          persons.map(person => {
              return(
                  <Person key = {person.name} name = {person.name}/>
              )
          })
      }
    </div>
  )
}

export default App