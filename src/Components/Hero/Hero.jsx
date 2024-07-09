import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Education is a discipline that is concerned with methods of teaching and learning in schools or school-like environments and Education is a powerful driver of development.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero
