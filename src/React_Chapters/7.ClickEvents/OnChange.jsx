//onChange() = event Handler primarilly with form elements
//             ex. <input>, <textarea>, <select>, <radio>
//             Triggers a function every time the value of the input changes

import React,{useState}  from 'react'

const OnChange = () => {
  
    const [name,setName] = useState("Guest");
    const [number, setNumber] = useState(1);
    const [comment,setComment] = useState("")
    const [payment,setPayment] = useState ("")
    const [shipping,setShipping] = useState("")
    


    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handleNumberChange =(e)=>{
        setNumber(e.target.value)
    }
    const handleCommentChange =(e)=>{
        setComment(e.target.value)
    }
    const handlePaymentChange =(e)=>{
        setPayment(e.target.value)
    }
   const handleShippingChange =(e) =>{
        setShipping(e.target.value)
   }
  return (
    <div>
      <h1>1.Handle Input Text</h1>
      <label style={{padding: "10px"}}>Name: {name}</label><br />
      <input type='text' value={name} onChange={handleNameChange}/><hr />

      <h1>2.Handle Input Number</h1>
      <label style={{padding: "10px"}}>age: {number}</label><br />
      <input type='number' value={number} onChange={handleNumberChange}/><hr />

      <h1>3.Handle Textarea</h1>
      <label style={{padding: "10px"}}>comment: {comment}</label><br />
      <textarea type='textarea' value={comment} onChange={handleCommentChange}/><hr />
      
      <h1>4.Handle Select Option</h1>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>PaymentType: {payment}</p><hr />

      <h1>5.Handle Radio Button</h1>
      <label>Pick Up</label>
      <input type="radio" value="Pick Up"
             checked={shipping === "Pick Up"} 
             onChange={handleShippingChange}/>
      
      <label>Delivery</label>
      <input type="radio" value="Delivery"
             checked={shipping === "Delivery"} 
             onChange={handleShippingChange}/>
     <p>Shipping:{shipping}</p>

    </div>
  );
}

export default OnChange
