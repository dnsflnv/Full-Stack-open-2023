import React from 'react';

const Filtrator = ({ filter, handleFilterChange }) => {
    return (<div>Filter shown with: <input value={filter} onChange={handleFilterChange} /></div>);
}

export default Filtrator;

