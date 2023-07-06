import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/all';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value.trim());
  }

  const countriesFiltered = filter
    ? countries.filter(country => country.name.common.match(RegExp(filter, 'i')))
    : [];

  useEffect(() => {
    axios
      .get(COUNTRIES_API_URL)
      .then(response => {
        setCountries(response.data)
      })
  }, []);

  return (
    <div>
      <Filter filter={filter} onChange={handleFilterChange} />
      <Countries countries={countriesFiltered} setFilter={setFilter} />
    </div>
  );
};

export default App;