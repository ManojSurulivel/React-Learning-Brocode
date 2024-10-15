import React,{useState} from 'react'

const ParentToChild = () => {
    const[data,setDate ] = useState("HI, Manoj");
  return (
    <div>
      <button onClick={()=>setDate(data)}></button>
      <ChildToParent data={data}/>
    </div>
  )
}


const ChildToParent = (props) => {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}


export default ParentToChild
