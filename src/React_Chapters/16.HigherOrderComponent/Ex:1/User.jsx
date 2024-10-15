import React from 'react'

const User = () => {
    const user ={
        name: "Manoj",
        email: "manoj188@gmail.com"
    }
  return (
    <div>
      <h1>HigherOrderComponent</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default User
