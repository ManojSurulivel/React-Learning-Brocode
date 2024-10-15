import React from 'react'
import List from './List'

const App = () => {

  const fruits = [
    {id: 1, name:"apple", calories:95},
    {id: 2, name:"banana", calories:105},
    {id: 3, name:"orange", calories:45},
    {id: 4, name:"grapes", calories:75},
    {id: 5, name:"pinapple", calories:40},
    {id: 6, name:"coconut", calories:159},
   ];

   const vegetables = [
    {id: 6, name:"potatoes", calories:110},
    {id: 7, name:"celery", calories:15},
    {id: 8, name:"carrots", calories:25},
    {id: 9, name:"corn", calories:63},
    {id: 10, name:"broccoli", calories:50},
    {id: 11, name:"tomatoes", calories:90},
   ];

  return (
    <>
          {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
          {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )

}
export default App
