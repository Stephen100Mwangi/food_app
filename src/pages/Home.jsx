import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='app__home'>
      <div className="app__home-header">
        <h1>Steve's Pizza</h1>
        <p>PIZZA TO SATISFY YOUR TASTE</p>
        <Link to='/menu'><button>Order Now</button></Link>
      </div>
    </div>
  )
}

export default Home
