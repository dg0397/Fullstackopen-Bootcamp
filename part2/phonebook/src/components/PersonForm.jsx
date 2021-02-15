import React from "react";

const PersonForm = ({
  handleSubmit,
  handleNumberInput,
  handleNameInput,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameInput} required/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberInput} required/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
