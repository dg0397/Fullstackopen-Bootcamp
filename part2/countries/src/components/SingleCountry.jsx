import React from "react";
import CurrentWeather from "./CurrentWeather";

const SingleCountry = ({ country }) => {
  console.log(country);
  const { name, capital, population, languages, flag } = country;
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Spoken Languages</h3>
      <ul>
        {languages.map((language) => {
          return <li key={language.name}>{language.name}</li>;
        })}
      </ul>
      <div>
        <img src={flag} alt={`${name}'s flag`} width="150" heigth="150" />
      </div>
      <CurrentWeather city = {capital} />
    </div>
  );
};

export default SingleCountry;
