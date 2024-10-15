//Using map() with display

//Ex:3.

import React, { useState } from 'react';

const DisplayRandomData = () => {
  const [data] = useState(['mango', 'banana', 'apple', 'pineapple', 'grapes']);
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleClick = () => {
    // Get a random fruit from the list
    const randomIndex = Math.floor(Math.random() * data.length);
    const fruit = data[randomIndex];
    setSelectedFruit(fruit);
  };

  return (
    <div>
      <h1>Fruits List</h1>
      <button onClick={handleClick}>Get Random Fruit</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {selectedFruit && <p>Selected Fruit: {selectedFruit}</p>}
    </div>
  );
};

export default DisplayRandomData;
