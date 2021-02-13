import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [peopleToShow, setPeopleToShow] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/persons")
          .then(({data}) =>{
            setPersons(data);
            setPeopleToShow(data)
          })
  },[])

  const handleSearch = (e) => {
    if (searchValue === "") {
      setPeopleToShow(persons);
    } else {
      setPeopleToShow(() =>
        persons.filter((person) => {
          const regex = new RegExp(searchValue, "gi");
          return regex.test(person.name);
        })
      );
    }
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const person = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(person));
      setPeopleToShow(persons.concat(person));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter searchValue={searchValue} handleSearch={handleSearch} />
      <h2>Add a New</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNumberInput={handleNumberInput}
        handleNameInput={handleNameInput}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow} />
    </div>
  );
};

export default App;
