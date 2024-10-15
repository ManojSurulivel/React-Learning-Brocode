import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
    const [items,setItems] =  useState([])

    useEffect(()=>{
         setItems(getItems(10))
         console.log("setting items")
    },[getItems]);

  return (
    <div>
        {items.map((item,index)=>{
           return  <li key={index}>{item}</li>
        })}
      
    </div>
  )
}

export default List
