import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import HomeImg from '../../assets/images/home.svg'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="header"><Nav /></div>
      <div class="landing-page">
      <div class="content">
          <div class="container">
            <div class="info">
              <h2>Welcome To</h2>
              <h1>Global Wholesale UK Ltd.</h1>
              <p>"Your One-Stop Shop for Imported and Local Goods!"</p>
                <a href="/about"><button>Read More</button></a>
            </div>
            <div class="image">
              <img src={HomeImg} alt="featured"></img>
            </div >
          </div>
        </div>
  
    </div>
    <div className="footer">
      <Footer />
    </div>
   </div>
  )
}

export default Home