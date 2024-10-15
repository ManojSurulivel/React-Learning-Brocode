//Using map() with display

//Ex:4.

import React, { useState } from 'react';

const DisplayShowHide = () => {
  // Initial state with a list of fruits
  const [data] = useState(['mango', 'banana', 'apple', 'pineapple', 'grapes']);
  const [showData, setShowData] = useState(false); // State to toggle display

  // Handle button click to show or hide the data
  const handleClick = () => {
    setShowData(!showData); // Toggle the state to show or hide data
  };

  return (
    <div>
      <h1>Fruits List</h1>
      <button onClick={handleClick}>
        {showData ? 'Hide Fruits' : 'Show Fruits'}
      </button>
      {/* Conditionally render the list based on the state */}
      {showData && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayShowHide;
