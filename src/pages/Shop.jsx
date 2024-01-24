import React from 'react'
import { FaHome } from "react-icons/fa";

import { CiShop } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiSignOutDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';




const Shop = () => {
  return (
    <div>
<header>
        <div className='header-item'>
          <CiShop />Shopify
        </div>
        <div className='header-li'>

          <Link to='/'><FaHome />Home</Link>
          <Link to='/'><CiShop />Shop</Link>
          <Link to='/'><FiShoppingCart />Cart</Link>
          <Link to='/'><LuLayoutDashboard />Dashboard</Link>
          <Link to='/'><PiSignOutDuotone />Signout</Link>

        </div>
      </header>
      <div className='header-nav'>
        <h4>Home Page</h4>
        <p>Welcome to the world fashion</p>
      </div>
          </div>
  )
}

export default Shop