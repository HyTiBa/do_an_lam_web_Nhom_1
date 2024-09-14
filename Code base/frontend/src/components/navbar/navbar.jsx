import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContextProvider';
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState('home');
    const {getTotalCartAmount} = useContext(StoreContext)    
  return (
    <div className='navbar'>
      <Link to='/'>
      <img src={assets.logo} className='logo' alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>contact-us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} className='icon' alt="" />
        <div className="cart-icon">
            <Link to='/cart'>
            <img src={assets.cart_icon} className='icon' alt="" />            
            </Link>
            <div className={getTotalCartAmount()!==0?"dot":''}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
