import React from 'react'
import UserGreeting from './UserGreeting.jsx'

const App2 = () => {
  return (
    
     <>
        <UserGreeting isLoggedIn="true" username="BroCode"/>
        <UserGreeting />
     </>
    
  )
}
export default App2