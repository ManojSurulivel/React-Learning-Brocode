//useState =  Re-render the component When the state value changes.

//useRef() = "use Reference" Does not cause re-renders when its value changes.
//           When you want a component to "remember" some information.
//           but you don't want that information to trigger new renders.

//      1. Accessing / Intracting with DOM Elements
//      2. Handling Focus, Animations, and Transitions
//      3. Managing Timers and Intervals.

// useRef returns the objects an object that has one property of current
// if you pass in a value to useref you can set the property of current to 
// some value I will set the current property of my ref object to be 0

//useref doesn't cause component to re-render when its value changes.

//EXPLAIN:
//*  when you use. useRef it returns an object with one property of current
//   that current property can store an value array an object or an HTML Element 
//   when the store value changes it doesn't cause the component rerender. 
//   This is accessing and interacting with dom elements handling focus 
//   animation and transition as well as managing ,timers and intervals well be working 



import React,{ useEffect, useRef} from 'react'

const MyComponent = () => {

      const inputRef1 = useRef(null) 
      const inputRef2 = useRef(null) 
      const inputRef3 = useRef(null) 


      useEffect(()=>{
      console.log("COMPONENT RENDERED")
      })
      
      const handleClick1 = () =>{
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

      }

      const handleClick2 = () =>{
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
      }

      const handleClick3 = () =>{
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
      }

  return (
    <div style={{display:"flex",alignItems:"center"}}>
      <button onClick={handleClick1}>Click1 !</button>
      <input type="text" ref={inputRef1} placeholder='input1'/><br />

      <button onClick={handleClick2}>Click2 !</button>
      <input type="text" ref={inputRef2} placeholder='input2'/><br />

      <button onClick={handleClick3}>Click3 !</button>
      <input type="text" ref={inputRef3} placeholder='input3'/><br />
    </div>
  )
}

export default MyComponent
