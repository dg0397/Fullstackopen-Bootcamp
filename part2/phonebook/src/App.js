import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

import personService from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [peopleToShow, setPeopleToShow] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    //Get all the persons from the server
    personService.getAll().then((data) => {
      setPersons(data);
      setPeopleToShow(data);
    });
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setPeopleToShow(persons);
    } else {
      setPeopleToShow(() =>
        persons.filter((person) => {
          const regex = new RegExp(e.target.value, "gi");
          return regex.test(person.name);
        })
      );
    }
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      persons.map((person) => person.name).includes(newName) &&
      persons.map((person) => person.number).includes(newNumber)
    ) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        //updating a person number
        const person = persons.find((person) => person.name === newName);
        const changedPerson = { ...person, number: newNumber };
        personService
          .update(changedPerson.id, changedPerson)
          .then((retornedPerson) => {
            setNotification(`Updated ${newName} number`);
            setTimeout(() => {
              setNotification("");
            }, 5000);
            setPersons(
              persons.map((person) =>
                person.id !== retornedPerson.id ? person : retornedPerson
              )
            );
            setPeopleToShow(
              persons.map((person) =>
                person.id !== retornedPerson.id ? person : retornedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      const person = {
        name: newName,
        number: newNumber,
      };
      //create a new Person and send the data to the server
      personService.create(person).then((retornedPerson) => {
        setNotification(`Added ${newName}`);
        setTimeout(() => {
          setNotification("");
        }, 5000);
        setPersons(persons.concat(retornedPerson));
        setPeopleToShow(persons.concat(retornedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDeletePerson = (id) => {
    if (
      window.confirm(
        `Delete ${peopleToShow.find((person) => person.id === id).name}`
      )
    ) {
      //delete a person
      personService
        .deletePerson(id)
        .then((response) => {
          console.log(response);
          setPersons(persons.filter((person) => person.id !== id));
          setPeopleToShow(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setNotification(
            `${
              peopleToShow.find((person) => person.id === id).name
            } was already deleted from the server`
          );
          setTimeout(() => {
            setNotification("");
          }, 5000);
          setPersons(persons.filter((person) => person.id !== id));
          setPeopleToShow(persons.filter((person) => person.id !== id));
        });
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
      <Notification message={notification} />
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
      <Persons
        peopleToShow={peopleToShow}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
