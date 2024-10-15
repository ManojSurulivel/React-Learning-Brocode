import React, { useState } from 'react'

const UpdateOnChange = () => {
    const [car,setCar] = useState({year: 2024,
                                   make: "SuZuki",
                                   model: "Mustang"});
    
   function handleYearChange(e){
        setCar(c => ({...c, year: e.target.value}));
   }
   function handleMakeChange(e){
        setCar(c => ({...c, make: e.target.value}));
   }   
   function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
   }
  return (
    <div style={{textAlign:"center"}}>
        <p>Your Favorite Bike is: {car.year} {car.make} {car.model}</p>
        
        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange} /><br />
        <input type="text" value={car.model} onChange={handleModelChange} /><br />

    </div>
  )
}

export default UpdateOnChange;
