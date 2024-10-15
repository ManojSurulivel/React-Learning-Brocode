//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

// useEffect(function, [dependencies]) => useEffect runs like Asynchronous

//1. useEffect(() => {})           //Runs after every re-renders
//2. useEffect(() => {},[])        //Runs only on mount
//3. useEffect(() => {}, [value])  //Runs on mount + when value changes

//USES 
// #1 Event Listeners
// #2 Dom manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from on API
// #5 clean Up when a component unmounts

//If you dont pass in dependencies array when well perform some code 
//every time component renders


import React,{useEffect, useState} from 'react'

const useEffect_Explain = () => {
  const [count,setCount] = useState(0);
  const [color,setColor] = useState("green")
  
  useEffect(()=>{
    document.title = `Program: ${count} ${color}`;
    return()=>{
      //Some Cleanup code
    }
  },[count,color]);

  function addCount(){
    setCount(count+1);
  }
  function subtractCount(){
    setCount(count-1);
  }
  function changeColor(){
    setColor(c => c === "green" ? "red" : "blue");
  }

  return (
  <>
  <p style={{color: color}}>Count: {count}</p>
  <button onClick={addCount}>Add</button><br />
  <button onClick={subtractCount}>Subtract</button><br />
  <button onClick={changeColor}>changeColor</button>


  </>
  )
}

export default useEffect_Explain
