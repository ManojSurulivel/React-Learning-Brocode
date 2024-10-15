//Using map() with display

//Ex:1

import React, { useState } from 'react';

function ArrayReturnComponent() {
  // Declare a state variable to hold the array and the selected value
  const [array] = useState(['Apple', 'Banana', 'Orange', 'Grapes']);
  const [selectedValue, setSelectedValue] = useState(null);

  // Handle button click to return a random value from the array
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * array.length); // Get random index
    setSelectedValue(array[randomIndex]); // Update state with the selected value
  };

  return (
    <div>
      <h2>Array List:</h2>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Get Random Value</button>
      {selectedValue && (
        <p>Selected Value: <strong>{selectedValue}</strong></p>
      )}
    </div>
  );
}

export default ArrayReturnComponent;
