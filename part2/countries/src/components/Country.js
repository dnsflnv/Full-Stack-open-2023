import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const WEATHER_API_KEY = process.env.REACT_APP_API_KEY;

const Country = ({ country }) => {
    const [weather, setWeather] = useState(null);
    const query = 'https://api.openweathermap.org/data/2.5/weather?q=' + country.capital
        + '&appid=' + WEATHER_API_KEY + '&units=metric';

    useEffect(() => {
        axios
            .get(query)
            .then(response => {
                console.log(response.data);
                setWeather(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map(([key, lng]) => <li key={key}>{lng}</li>)}
            </ul>
            <div className="flag">{country.flag}</div>
            <h2>Weather in {country.capital}</h2>
            {weather ?
                <>
                    <p>Temperature: {weather.main.temp} C</p>
                    <p>Pressure: {weather.main.pressure} kPa</p>
                    <p>Wind: {weather.wind.speed}, direction {weather.wind.deg}</p>
                </> : <p>Loading...</p>}

        </div>
    );
};

export default Country;