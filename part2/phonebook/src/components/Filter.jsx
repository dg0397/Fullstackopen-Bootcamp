import React from "react";

const Filter = ({ searchValue, handleSearch }) => {
  return (
    <form>
      <input value={searchValue} onChange={handleSearch} />
    </form>
  );
};

export default Filter;
