import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import './MyComponent.css'
import SubComponent from "../../SubComponent";

function MyComponent() {
    const [display,setDisplay] =  useState([])
  const { register,  handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    setDisplay([...display, data])
    console.log(data)
  }

  return (
    <div className="container">
      <h1 className="header">useFormHook</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label className="form-label" htmlFor="userName">UserName: </label>
          <input className="input"  type="text"  id="username" {...register("username")} placeholder="Enter a name..."/><br/>

         <label className="form-label" htmlFor="email">Email: </label>
         <input className="input"  type="email"  id="email" {...register("email")} placeholder="Enter a email..."/><br/>
 
         <label className="form-label" htmlFor="channel">Channel: </label>
         <input className="input" type="text"  id="channel" {...register("channel")} placeholder="Enter a channel"/><br/>

 
         <label className="form-label" htmlFor="textarea">Textarea: </label>
         <input className="input"  type="textarea"  id="textarea" {...register("textarea")} placeholder="Textarea"/><br/>
         
      <input className ="btn" type="submit" />
    
    </form>
    <SubComponent display={display}/>
    </div>
  );
}

export default MyComponent;