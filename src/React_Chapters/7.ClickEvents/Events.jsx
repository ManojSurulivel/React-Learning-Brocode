//click event = An interaction when a user clicks on a specific element.
//              We can respond to clicks by passing
//              a callback to the onClick event handler.

//Ex:1.
// import React,{useState} from 'react'

// const Events = () => {
//     const [text,setText] = useState(true);

//     const handleClick =()=> {
//      setText(!text);
//     }

//   return (
//     <>
//     <button onClick={handleClick}>Click me 😃</button>
//     <p>{text ? "ON" : "OFF"}</p>
//     </>
 
//   )
// }

// export default Events



//Ex:2 .
// import React from 'react'

// const Events = () => {
    
//     let count = 0;

//     const handleClick = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} You Clicked Me ${count} time/s`)
//         }  
//         else{
//             console.log(`${name} Stop Clicking me!`);
//         }
//     };
//   return (<button onClick={()=>handleClick("Bro")}>Click Me!😃</button>)

// }
// export default Events


//Ex:3 .
import React from 'react'

const Events = () => {
    const handleClick = (e) => e.target.textContent = "OUCH! 😄"
  return (<button onDoubleClick={(e)=>handleClick(e)}>Click me! 😃</button>)
}

export default Events

