import React from "react";

const Filter = ({ searchValue, handleSearch }) => {
  return (
    <div>
      <form>
        Find Countries: <input value={searchValue} onChange={handleSearch} />
      </form>
    </div>
  );
};

export default Filter;
