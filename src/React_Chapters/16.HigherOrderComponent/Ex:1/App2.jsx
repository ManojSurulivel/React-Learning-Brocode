import React from 'react'
import withLoader from './Chapters/HigherOrderComponent/Ex:1/withLoader'
import User from './Chapters/HigherOrderComponent/Ex:1/User';
import MyComponent from './MyComponent';

const UserWithLoader = withLoader(User);

const App2 = () => {
  return (
    <div>
      <UserWithLoader />
      <MyComponent />
    </div>
  )
}

export default App2