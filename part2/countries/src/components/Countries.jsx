import React from "react";
import SingleCountrie from "./SingleCountrie";

const Countries = ({ countriesToShow }) => {
  const content =
    countriesToShow.length >= 10 ? (
      "Too Many Matches,specify another filter"
    ) : countriesToShow.length > 1 ? (
      countriesToShow.map((countrie) => {
        return <p key={countrie.numericCode}>{countrie.name}</p>;
      })
    ) : countriesToShow.length > 0 ? (
      <SingleCountrie countrie={countriesToShow[0]} />
    ) : (
      "Enter a country name. e.g: Spain"
    );

  return <div>{content}</div>;
};

export default Countries;
