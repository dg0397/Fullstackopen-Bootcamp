import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;


const CurrentWeather = ({ city }) => {
  const [weather, setWeather] = useState([]);
  const [loaded, setLoaded] = useState(false);

  console.log(api_key)

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      )
      .then(({ data }) => {
        if(data.current){
            setWeather(data.current);
            setLoaded(true)
        };
      });
  }, [city]);

  return (
    <>
      {loaded ? (
        <div>
          <h3>Weather in {city}</h3>
          <p>
            <strong>Temperature:</strong> {weather.temperature} Celcius
          </p>
          <div>
            <img
              src={weather.weather_icons[0] ? weather.weather_icons[0] : null}
              alt="weather icon"
            />
          </div>
          <p>
            <strong>Wind:</strong> {weather.wind_speed} km/h direction {weather.wind_dir}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CurrentWeather;
