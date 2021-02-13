import React from "react";

const SingleCountrie = ({ countrie }) => {
  console.log(countrie);
  const { name, capital, population, languages, flag } = countrie;
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map((language) => {
          return <li key={language.name}>{language.name}</li>;
        })}
      </ul>
      <div>
        <img src={flag} alt={`${name}'s flag`} width="150" heigth="150" />
      </div>
    </div>
  );
};

export default SingleCountrie;
