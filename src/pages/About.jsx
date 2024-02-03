import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { TbBasketCancel } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";

const About = () => {

  const whyUs = [
    {
      id:1,
      text:"Free Delivery across the country",
      img:<CiDeliveryTruck className='icon'  />
    },
    {
      id:2,
      text:"Cancel your order within 24 hours",
      img:<TbBasketCancel  className='icon' />
    },
    {
      id:3,
      text:"24-7 Customer care services",
      img:<RiCustomerService2Fill className='icon'  />
    },
    {
      id:4,
      text:"Multiple pizza types to serve your taste",
      img:<GiFullPizza className='icon' />
    },
    {
      id:5,
      text:"Amazing offers just for you",
      img:<BiSolidOffer className='icon'  />
    }
  ]
  return (
    <div className='app__about'>
      <div className="app__about-top">
        <div className="app__about-top_image">
          <img src="userimages/pizza5.jpg" alt="" />
        </div>
        <div className="app__about-top_content">
          <h2>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis cumque omnis porro, reprehenderit adipisci ex, quaerat sequi iste maxime ipsa vero molestiae incidunt sunt obcaecati voluptate ut accusantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium ipsam quis sit! Ab aliquid et, ipsum id est, fuga necessitatibus nulla sint nemo nam consequatur voluptatibus unde, ad praesentium!</p>
        </div>
      </div>
      <div className="app__about-bottom">
        <h2>Why Us</h2>
        <div className="app__about-bottom_whyus">
          {whyUs.map((item)=> <div className='app__about-why_card' key={item.id}>
            <div>{item.img}</div>
            <p>{item.text}</p>
          </div>)}

        </div>


      </div>
    </div>
  )
}

export default About
