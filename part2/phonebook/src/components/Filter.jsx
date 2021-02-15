import React from "react";

const Filter = ({ searchValue, handleSearch }) => {
  return (
    <form>
      <label>
      Filter Show with 
      <input value={searchValue} onChange={handleSearch} />
      </label>
    </form>
  );
};

export default Filter;
