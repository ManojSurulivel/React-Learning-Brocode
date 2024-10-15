//React hook = Special function that allows functional component
//             to use React features without writing class components(React v16.8)
//             (useState, useEffect, useContext, useReducer, useCallback, and more...)


//useState() = A React hook that allows the creation of a stateful variables
//             AND a setter function to update its value in the virtual DOM.
//             [name,setName]


import React,{useState} from 'react'

const OnClick = (props) => {
  
  const [count,setCount] = useState(0);
  
  const [toggle,setToggle] = useState(false)
  const [name,setName] = useState("Guest");
  const [isEmployed, setIsEmployed]  = useState(false);

  const userName = props.userName;
  const weight = props.weight;

  const Increment = () => {
    setCount(count+2)
  }
  const Decrement = () => {
    setCount(count-1)
  }
  const Reset = () => {
    setCount(0)
  }

  
  return (
<div style={{textAlign: "center"}}>
  
  <div>
    <h1>1.Counter</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
   
    <p >{count}</p>
  </div>

  <div>
    <h2>2.Toggle</h2>
    <button onClick={()=>setToggle(!toggle)}>ToggleBtn</button>
    <p>Toggle Btn:➡️ {toggle ? "HI" : "BYE"}</p>
   
    <h3>3.Props</h3>
    <p>props value:➡️ {userName}{weight}</p>

    <h4>4.Pass Value</h4>
    <button onClick={()=>setName("Hii Arun!, How are You?")}>Name</button>
    <p>Name:➡️ {name}</p>

    <h5>5.True / False</h5>
    <button onClick={()=>setIsEmployed(!isEmployed)}>Is Employed</button>
    <p>➡️{isEmployed ? "YES" : "NO"}</p>
 </div>

</div>
  )

}
export default OnClick