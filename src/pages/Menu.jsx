import React from 'react'

const Menu = () => {
  const foods = [
    {
      id:1,
      name:"Vegan pizza",
      img:"userimages/pizza1.jpg",
      price: "$56"
    },
    {
      id:2,
      name:"Pineapple pizza",
      img:"userimages/pizza2.jpg",
      price: "$55"
    },
    {
      id:3,
      name:"Margherite Pizza",
      img:"userimages/pizza3.jpg",
      price: "$66"
    },
    {
      id:4,
      name:"Pepperoni pizza",
      img:"userimages/pizza4.jpg",
      price: "$75"
    },
    {
      id:5,
      name:"Steve Special Pizza",
      img:"userimages/pizza5.jpg",
      price:"$80.50"
    },
    {
      id:6,
      name:"Pork ribs",
      img:"userimages/cocktail4.jpg",
      price:"$75.50"
    },
    {
      id:7,
      name:"Lamb chops",
      img:"userimages/cocktail3.jpg",
      price:"$100.50"
    }
  ]
  return (
    <div className='app__menu'>
      <h1>Our Menu</h1>
      <div className='app__menu-foods'>
        {foods.map((fooditem) => <div className='app__menu-fooditem' key={fooditem.id}>
          <div className="menuitem__image">
            <img src={fooditem.img} alt="Food" />
          </div>
          <h3>{fooditem.name}</h3>
          <small className='app__menu-price'>{fooditem.price}</small>
          <button>Book Now</button>

        </div>)}

      </div>
      
    </div>
  )
}

export default Menu
