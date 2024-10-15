//Using map() with display

//Ex:2

import React, { useState } from 'react';

const displayData = () => {
  const [data, setData] = useState(['mango', 'banana', 'apple', 'pineapple', 'grapes']);

  const handleClick = () => {
    // You don't need to set the same data again if you are not modifying it
    // setData([...data]) is redundant here since you are not updating the data
    console.log(data); // This will log the current data in the array
  };

  return (
    <div>
      <h1>Fruits List</h1>
      <button onClick={handleClick}>Show Fruits in Console</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default displayData;