//useCallback() = useCallback is a React hook that allows you to memoize a function so 
//that it only gets recreated when its dependencies change. 
//This hook helps optimize performance by preventing unnecessary re-creations of functions,
//especially in components where functions are passed down as props or used in dependency arrays.

//Ex:1.
import React, {  useState, useCallback } from 'react'
import List from './List'

const useCallbackHook = () => {
  const [ number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);

  const getItems = useCallback((incrementor) => {
        return [number + incrementor + 1 , 
                number + incrementor + 2,
                number + incrementor + 3]
  },[number])
  
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }

  return (
    <div style={theme}>
      <h1>UseCallback Hook</h1>
      <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
      <button onClick={()=>setDark((curr)=> !curr)}>toggle theme</button>    

      <List getItems={getItems} />
    </div>
  )
}

export default useCallbackHook


//syntax
const memoizedCallback = useCallback(
  () => {
    // Your function logic here
  },
  [dependencies], // Array of dependencies
);


//Ex:2.
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoized version of the callback
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // Empty dependency array means this function will only be created once

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={e => setText(e.target.value)} />
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

function ChildComponent({ handleClick }) {
  console.log('Child component rendered');
  return <button onClick={handleClick}>Click Me</button>;
}

//In this example:

//The handleClick function is memoized using useCallback.
//If we didn't use useCallback, the handleClick function would be re-created every time
// the ParentComponent re-renders, causing the ChildComponent to re-render unnecessarily.
//By using useCallback, handleClick remains the same unless its dependencies change, avoiding unnecessary re-renders.



//When to Use useCallback?

// You should consider using useCallback in the following scenarios:

//Passing Functions as Props:// When you are passing a function to a child component and you want to prevent 
// the child component from re-rendering unnecessarily.

//Dependency Arrays in useEffect or useMemo: //If you pass a function in the 
// dependency array of useEffect, useMemo, or other hooks, memoizing the function with useCallback 
// ensures that the function reference doesn't change unless necessary.

//Performance Optimization: //In components with expensive re-renders or frequent renders, useCallback can help optimize performance.