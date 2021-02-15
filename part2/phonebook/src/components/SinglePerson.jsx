import React from "react";

const SinglePerson = ({ person,handleDelete }) => {
  const { name, number } = person;
  return (
    <p>
      {name} {number}
      <button onClick = {handleDelete} >Delete</button>
    </p>
  );
};

export default SinglePerson;
