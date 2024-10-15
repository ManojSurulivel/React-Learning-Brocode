//How to Style React components with CSS
//--------------------------------------
//(not including external framework or preprocessors)

// 1.EXTERNAL => which is create for global styles for small projects
// 2.MODULES => which prefered for induales components that are the unique style.
// 3.INLINE => which tens to be good for the any small components with 
//             minimum styling use for the specify a project or your personal
//             preference of your team preference if your working projecting other 



// 1.EXTERNAL
// import React from 'react'


// const Button = () => {
//   return (
//     <div>
//       <button className='button'>Click ME!</button>
//     </div>
//   )
// }

// export default Button


// 2.MODULES
// import React from 'react'
// import styles from './Button.module.css'


// const Button = () => {
//   return (
//     <div>
//       <button className={styles.button}>Click ME!</button>
//     </div>
//   )
// }
// export default Button;



//3.INLINE
const Button = () => {

  const styles ={
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer"
    }
    
  return (
    <div>
      <button style={styles}>Click ME!</button>
    </div>
  )
}

export default Button;