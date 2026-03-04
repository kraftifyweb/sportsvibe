import React from 'react'
import './home.css'
import Hero from './hero/Hero';
import Tag from './tag/Tag';

function Home() {
  return (
    <div className='hom'>
    <Hero />
    <Tag />
    </div>
  )
}

export default Home