import React from "react";
import SinglePerson from "./SinglePerson";

const Persons = ({ peopleToShow }) => {
  return (
    <div>
      {peopleToShow.map((person) => {
        return <SinglePerson key={person.name} person={person} />;
      })}
    </div>
  );
};

export default Persons;
