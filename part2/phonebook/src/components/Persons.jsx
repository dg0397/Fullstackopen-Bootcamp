import React from "react";
import SinglePerson from "./SinglePerson";

const Persons = ({ peopleToShow,handleDeletePerson }) => {
  return (
    <div>
      {peopleToShow.map((person) => {
        return <SinglePerson key={person.id} person={person} handleDelete = {()=> handleDeletePerson(person.id)} />;
      })}
    </div>
  );
};

export default Persons;
