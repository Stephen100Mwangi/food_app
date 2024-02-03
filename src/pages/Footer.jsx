import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className="app__footer-links">
        <div className="app__footer-links_quick">
          <Link className='limenu'>Home</Link>
          <Link className='limenu'>About</Link>
          <Link className='limenu'>Menu</Link>
        </div>
        <div className="app__footer-links_social">
          <Link className='limenu'><FaFacebook></FaFacebook></Link>
          <Link className='limenu'><FaXTwitter></FaXTwitter></Link>
          <Link className='limenu'><FaInstagram></FaInstagram></Link>
        </div>
        <div className="app__footer-links_contact">
          <Link className='limenu' to="mailto:mwangwahome70@gmail.com">Email Us</Link>
          <Link className='limenu' to="tel:+254758755032">+254758725032</Link>
        </div>
      </div>
      <div className='app__footer-copy'>Copyright &copy; 2024 Steve Pizza</div>
    </div>
  )
}

export default Footer
