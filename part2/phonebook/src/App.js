import React, { useState } from "react";

const Person = ({ person }) => {
  const { name, number } = person;
  return (
    <p>
      {name} {number}
    </p>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [peopleToShow, setPeopleToShow] = useState(persons);

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
      <form>
        <input value={searchValue} onChange={handleSearch} />
      </form>
      <h2>Add a New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map((person) => {
        return <Person key={person.name} person={person} />;
      })}
    </div>
  );
};

export default App;
