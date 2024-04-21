import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { PiEyeClosedBold } from 'react-icons/pi'


const showSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
  sidebar.style.opacity = '1';
}; 

const hideSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
  sidebar.style.opacity = '0';
}; 

const Nav = () => {
  return (
    <div className="nav">
    <div className="container">
      <div class="landing-page">
        <header>
          <div class="container">
            <ul class="links">
              <li class="hide-on-mobile"><Link to="/">Home </Link></li>
              <li class="hide-on-mobile"><Link to="/about">About</Link></li>
              <li class="hide-on-mobile"><Link to="/Goal">Goal</Link></li>
              <li class="hide-on-mobile"><Link to="/info">Shop</Link></li>
              <li class="menu-btn" onClick={showSidebar}><Link to="#"><HiOutlineMenuAlt1 /></Link></li>
            </ul>
            <ul class="sidebar">
              <li onClick={hideSidebar}><Link to="#"><PiEyeClosedBold /> </Link></li>
              <li><Link to="/">Home </Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/history">Goal</Link></li>
              <li><Link to="/info">Shop</Link></li>
            </ul>
          </div>
        </header>
      </div>
    </div>
    </div>
  )
}

export default Nav