// 4. Implement Search filter for a List with debouncing
// Create an array of objects, each containing an id and a countryName
// Display all the country names from the array in the UI.
// Display a search input box that allows users to filter the displayed country names

import React, { useState, useEffect } from 'react';
import './App.css'

const Practice3 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const items = [
    { id: 1, countryname: 'India' },
    { id: 2, countryname: 'USA' },
    { id: 3, countryname: 'Canada' },
    { id: 4, countryname: 'Australia' }
  ];

  useEffect(() => {
    let timeOut = setTimeout(()=>{
      const results = items.filter(item =>
        item.countryname.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results);
    },300)

    return () => {
      clearTimeout(timeOut)
    };
  }, [searchQuery]);

  return (
  <div className="container">
    <input
      type="text"
      placeholder="Search countries..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <ul>
      {filteredResults.map(item => (
        <li key={item.id}>{item.countryname}</li>
      ))}
    </ul>
  </div>
  );
};


export default Practice3;





