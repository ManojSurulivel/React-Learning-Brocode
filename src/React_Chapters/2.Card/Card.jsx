import React from 'react'
import Card from './Card.css'
import image from './assets/image.png'


const Card = () => {

  return (

    <div className='card'>
      <img  className='img' src={image} alt="profile" />
      <h2 className='card-title'>Bro Code</h2>
      <p className='card-text'>I make YOUTUBE Videos and play video Games.</p>
    </div>
    
  )
}

export default Card
