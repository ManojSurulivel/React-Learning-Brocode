
import React, { useState } from 'react'

const ColorPicker = () => {
    const [color,setColor] = useState("#FFFFFF")

    function handleColorChange(e){
        setColor(e.target.value)
    }
  return (
    <div>
      <h1>Color Picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
        <p>Select Color: {color}</p>
      </div>
      <label >Select Color:</label>
      <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker
