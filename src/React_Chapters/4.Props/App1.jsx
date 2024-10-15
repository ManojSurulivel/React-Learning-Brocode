import React from 'react'
import Student from './4.Props/Student.js';

const App1 = () => {
  return (
    
     <>
          <Student name="ManojKumar" age={30} isStudent={true} />
          <Student name="Arul" age={42} isStudent={false}/>
          <Student name="Muthu" age={42} isStudent={true}/>
          <Student name="Aadhi" age={42} isStudent={false}/>
          <Student />

     </>
    
  )
}
export default App1
