import React from 'react'
import './shop.css'
import Nav from '../nav/Nav'

const Shop = () => {
  return (
    <div className="shop">
       <div className="header"><Nav /></div>
       <div class="wrapper">
          <h1>coming soon<span class="dot">.</span></h1>
          <p>Put some text here.</p>
       </div>
    </div>
  )
}

export default Shop