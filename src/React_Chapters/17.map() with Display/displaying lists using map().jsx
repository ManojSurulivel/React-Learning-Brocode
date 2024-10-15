// In React, the `map()` function is commonly used to display a list of values.
//  There are several ways to use `map()` for rendering lists depending on the structure and styling of the list, 
//  as well as how you want to handle unique keys. Here are different approaches to displaying lists using `map()` in React:

// ### 1. **Basic List Rendering**

// You can directly render the list items in a simple unordered list (`<ul>`).

//#### Example:1

//javascript + React 

import React from 'react';

const MyComponent = () => {
  const fruits = ['Mango', 'Banana', 'Apple', 'Pineapple', 'Grapes'];

  return (
    <div>
      <h2>Fruit List:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};



// - **`map()` Function**: Each item in the `fruits` array is iterated over, and each item is rendered inside an `<li>` element.
// - **`key` Prop**: The `key` prop is set to `index` (although using a unique identifier for keys is recommended).

// ### 2. **Rendering a List of Objects**

// If you have a list of objects instead of simple strings, you can use `map()` to render specific properties of those objects.

//#### Example:2

import React from 'react';

const Rendering = () => {
  const fruitDetails = [
    { id: 1, name: 'Mango', color: 'Yellow' },
    { id: 2, name: 'Banana', color: 'Yellow' },
    { id: 3, name: 'Apple', color: 'Red' },
    { id: 4, name: 'Pineapple', color: 'Brown' },
    { id: 5, name: 'Grapes', color: 'Green' }
  ];

  return (
    <div>
      <h2>Fruit Details:</h2>
      <ul>
        {fruitDetails.map(fruit => (
          <li key={fruit.id}>
            {fruit.name} - {fruit.color}
          </li>
        ))}
      </ul>
    </div>
  );
};


// - **Rendering Object Properties**: You can access each object’s properties (e.g., `fruit.name` and `fruit.color`) inside the `map()` function.
// - **`key` Prop**: A unique `id` from the object is used as the `key`.

// ### 3. **Rendering as a Table**

// You can also render lists in the form of a table for more structured data.

// #### Example:3

import React from 'react';

const Table = () => {
  const fruitDetails = [
    { id: 1, name: 'Mango', color: 'Yellow' },
    { id: 2, name: 'Banana', color: 'Yellow' },
    { id: 3, name: 'Apple', color: 'Red' },
    { id: 4, name: 'Pineapple', color: 'Brown' },
    { id: 5, name: 'Grapes', color: 'Green' }
  ];

  return (
    <div>
      <h2>Fruit Table:</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {fruitDetails.map(fruit => (
            <tr key={fruit.id}>
              <td>{fruit.name}</td>
              <td>{fruit.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



// - **Table Format**: Data is displayed in a table format with a `<thead>` for headers and a `<tbody>` for rows.
// - **Rendering in `<tr>` and `<td>`**: The `map()` function creates a row (`<tr>`) for each fruit and renders its properties inside table cells (`<td>`).

// ### 4. **Rendering Components Inside `map()`**
// You can render a list of custom components inside the `map()` function.


// #### Example:


import React from 'react';

// Custom component to display each fruit
const cells = ({ name, color }) => (
  <div>
    <h3>{name}</h3>
    <p>Color: {color}</p>
  </div>
);

const Component = () => {
  const fruitDetails = [
    { id: 1, name: 'Mango', color: 'Yellow' },
    { id: 2, name: 'Banana', color: 'Yellow' },
    { id: 3, name: 'Apple', color: 'Red' },
    { id: 4, name: 'Pineapple', color: 'Brown' },
    { id: 5, name: 'Grapes', color: 'Green' }
  ];

  return (
    <div>
      <h2>Fruits:</h2>
      {fruitDetails.map(fruit => (
        <FruitItem key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
};



// - **Custom Component**: The `FruitItem` component is used to render each item.
// - **Passing Props**: The `name` and `color` properties are passed to the `FruitItem` component using props.

// ### 5. **Rendering Conditionally**

// You can conditionally render the list or certain items based on a condition.

// #### Example:

// ```javascript

import React from 'react';

const MyComponents = () => {
  const fruitDetails = [
    { id: 1, name: 'Mango', color: 'Yellow' },
    { id: 2, name: 'Banana', color: 'Yellow' },
    { id: 3, name: 'Apple', color: 'Red' },
    { id: 4, name: 'Pineapple', color: 'Brown' },
    { id: 5, name: 'Grapes', color: 'Green' }
  ];

  return (
    <div>
      <h2>Fruits with Yellow Color:</h2>
      <ul>
        {fruitDetails
          .filter(fruit => fruit.color === 'Yellow')
          .map(fruit => (
            <li key={fruit.id}>{fruit.name}</li>
          ))}
      </ul>
    </div>
  );
};



// - **Conditional Rendering**: The `filter()` method is used before `map()` to display only fruits that are yellow.
// - **Combining `filter()` and `map()`**: This approach allows filtering and then rendering the filtered list.

// ### 6. **Rendering with Index**

// If you don't have unique keys, you can use the `index` parameter provided by `map()`. This is not recommended unless there is no unique identifier available.

// #### Example:

// ```javascript
import React from 'react';

const unique = () => {
  const fruits = ['Mango', 'Banana', 'Apple', 'Pineapple', 'Grapes'];

  return (
    <div>
      <h2>Fruits List (Using Index as Key):</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};



// - **Index as Key**: This uses the `index` of the item as the `key`, but it is better to use a unique identifier if possible.

// ### Summary of Different Ways:
// 1. **Basic list rendering**: Simple lists using `<ul>` or `<ol>`.
// 2. **Rendering objects**: Rendering a list of objects by accessing their properties.
// 3. **Rendering in a table**: Displaying structured data in table format.
// 4. **Rendering custom components**: Passing list items as props to a custom component.
// 5. **Conditional rendering**: Filtering the list and then rendering.
// 6. **Using index as key**: Only use this if no unique identifier is available.

// All of these techniques use `map()` to iterate over arrays and generate JSX elements in React.