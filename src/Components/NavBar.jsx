import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
    // For toggle we use useState Hook
    const [showLink,setLink] = useState(false);

    const changeLink = ()=>{
        // Toggle states
        setLink(!showLink);
    }
  return (
    <div className='app__navbar'>
        <div className="app__nabar-logo" id={showLink? "openLogo":"closeLogo"}>
            <h1>Food<span>Dealer</span></h1>
        </div>
        <div className="app__navbar-links" id={showLink? "openlink":"closelink"}>
            <Link to="/" className='limenu'>Home</Link>
            <Link to="/menu" className='limenu'>Menu</Link>
            <Link to="/about" className='limenu'>About</Link>
            <Link to="/contacts" className='limenu'>Contacts</Link>
        </div>
        <div className='menuToggle' onClick={changeLink}>
            <p><IoMenu /></p>
        </div>
      
    </div>
  )
}

export default NavBar
