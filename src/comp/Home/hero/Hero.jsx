import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='vid'>
        <video autoPlay loop muted>
            <source src='multisports.mp4' type='video/mp4'></source>
        </video>
    </div>
  )
}

export default Hero