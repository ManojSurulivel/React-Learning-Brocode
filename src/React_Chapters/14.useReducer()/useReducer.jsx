import React,{useState, useReducer} from 'react'

 
const UseReducer = () => {
    const [state,dispatch] = useReducer(reducerFn, {count:0})
    const [counter,setCounter] = useState(0);
    
    //useReducer
    const ACTIONS = {
       INCREMENT: "increment",
       DECREMENT: "decrement",
    }

    const reducerFn = (state, action) => {
        
        switch(action.type){
        case ACTIONS.INCREMENT: return {count: state.count+1};
        case ACTIONS.DECREMENT: return {count: state.count-1};
       } }

    const increment = () => {
        dispatch({type: ACTIONS.INCREMENT});
    }
    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT});
    }


    //useState
    const Increment = () =>{
        setCounter(counter + 1);
    }
    const Decrement = () =>{
        setCounter(counter - 1);
    }


  return (
    <div>
        <div>
              <h1>UseReducer Counter</h1>
              <p>Counter :{state.count}</p>
              <button style={{margin:"10px"}} onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
        </div>

        <div style={{margin:"10px"}}>
            <h1>UseState Counter</h1>
            <p>Counter :{counter}</p>
            <button style={{margin:"10px"}} onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>

    </div>
  )
}

export default UseReducer
