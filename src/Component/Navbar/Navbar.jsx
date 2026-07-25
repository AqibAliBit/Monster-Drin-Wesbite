import React from 'react'
import "./Navbar.css";
import MonsterLogo from '../../assets/Monster logo.png'
import { NavLink } from 'react-router-dom';
import { RiShoppingCartFill } from "@remixicon/react";
const Navbar = () => {
  return (
          <nav>
        <div className="logo">
          <img src={MonsterLogo} alt="" />
        </div>
        <div className="main-nav">
         <NavLink to={'/'} 
        className={({ isActive }) =>
  isActive ? "nav-active" : "nav-inactive"
}
         >Home</NavLink>
         <NavLink to={'/Story'}
         className={({ isActive }) =>
  isActive ? "nav-active" : "nav-inactive"
}
         >Story</NavLink>
         <NavLink to={'/Drinks'}
         className={({ isActive }) =>
  isActive ? "nav-active" : "nav-inactive"
}
         >Drinks</NavLink>
         <NavLink to={'/Order'}
         className={({ isActive }) =>
  isActive ? "nav-active" : "nav-inactive"
}
         >Order</NavLink>
         <NavLink to={'/Contact'}
         className={({ isActive }) =>
  isActive ? "nav-active" : "nav-inactive"
}
         >Contact</NavLink>
         <NavLink to={'/Collab'}
         className={({ isActive }) =>
  isActive ? "nav-active" : "nav-inactive"
}
         >Collab</NavLink>
        </div>
      
        <div className="cart">
            <button className='sign'>Sign In</button>
          <RiShoppingCartFill  siz8={20} color='  rgb(152, 253, 0)'/>
        </div>
      </nav>
  )
}

export default Navbar