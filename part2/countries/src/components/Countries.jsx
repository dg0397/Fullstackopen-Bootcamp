import React from "react";
import Country from "./Country";
import SingleCountry from "./SingleCountry";

const Countries = ({ countriesToShow }) => {
  const content =
    countriesToShow.length >= 10 ? (
      "Too Many Matches,specify another filter"
    ) : countriesToShow.length > 1 ? (
      countriesToShow.map((country) => {
        return <Country key={country.numericCode} country = {country} />;
      })
    ) : countriesToShow.length > 0 ? (
      <SingleCountry country={countriesToShow[0]} />
    ) : (
      "Enter a country name. e.g: Spain"
    );

  return <div>{content}</div>;
};

export default Countries;
