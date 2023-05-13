import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>  
        <nav className='navbar'>
            <div className='logo'>
                <h1>Yritys Oy Ab</h1>
            </div>
            <ul className='nav-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </nav>
    </div>
    
  )
}

export default Navbar