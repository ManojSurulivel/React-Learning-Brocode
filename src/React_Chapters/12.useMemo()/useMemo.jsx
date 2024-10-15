//useMemo() = usememo hook is used for memoized value.should not be recreated in memory that is the usememo hook,
//checks the value of the variable in memory and the current value 
//its different and change the value  it will create in memory otherwise 
//the persistent comes with the that is ready and it is persistent
//very difficult for us to use the state in react
//If we want some data are persistent,that time usememo hook is very useful .

//It can avoid use for every render.// Only recalculate when 'items' or 'query' changes



//Ex:1
import React, { useMemo, useState, useEffect } from 'react'

const MyComponent = () => {
  const [ number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);

  const doubleNumber = useMemo(() => {
        return slowFunction(number)
  },[number])
  
  const themeStyles = useMemo(() => {
    return{
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }
  
  },[dark])

  useEffect(()=>{

    console.log(" Theme Changed ")

  },[themeStyles])
 

  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>setDark((curr)=> !curr)}>toggle theme</button>    
      <div style={themeStyles}> { doubleNumber}</div>
    </div>
  )
}

export default MyComponent


function slowFunction(num){
  console.log("running slow")
  for(let i=0; i < 100000000000; i++){}
  return num * 2 ;

}



// Why do we need useMemo in React?

// Answer: useMemo is used for performance optimization. It prevents expensive computations 
// from being re-executed on every render by caching the result and only recalculating it when one or more dependencies change.

//Ex:2.
import React from 'react'
import FilteredList from './FilteredList'

function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

  return(
    <FilteredList items={items} />
  ) ;
}


import React, { useState, useMemo } from 'react';

function FilteredList({ items }) {
  const [query, setQuery] = useState('');

  // Memoize the filtered list to avoid recalculating on every render
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }, [items, query]); // Only recalculate when 'items' or 'query' changes

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Filter items..." />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

