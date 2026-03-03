import React from 'react'
import './home.css'
import logo from './sportsvibe.png';
import Hero from './hero/Hero';

function Home() {
  return (
    <div className='hom'>Home<br></br>
    <Hero />
    
        <img src={logo} className="App-logo" alt="logo" width="300px" /> <br></br>
        hi
        how are you im fine
    </div>
  )
}

export default Home