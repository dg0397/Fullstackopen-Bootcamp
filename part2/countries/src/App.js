import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({ data }) => {
      setCountries(data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCountriesToShow(
      countries.filter((countries) => {
        const regex = new RegExp(e.target.value, "gi");
        return regex.test(countries.name);
      })
    );
  };

  return (
    <div>
      <Filter searchValue={searchValue} handleSearch={handleSearch} />
      <Countries countriesToShow={countriesToShow} />
    </div>
  );
};

export default App;
