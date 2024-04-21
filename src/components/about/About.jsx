import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import './about.css'


/* Ended Pictures Import  */

const About = () => {
  return (
    <div class="about-us">
    <div className="header">
    <Nav/>   
    </div>
    <div className="us">
    <h1>About Us</h1>
    </div>
    <div className="about">
      <br /><br />
    <h1>Global Wholesale UK:</h1> <br />
    <h3>Your One-Stop Shop for Imported and Local Goods!</h3>
        <h2>We're located at: 67 Louise Street ST61 AS/h2</h2>

        <h3>Our Mission:</h3>

        <p>At Global Wholesale UK, we're all about providing you with a world of choice! We source high-quality products from all corners of the globe, but we also take great pride in supporting our local community by offering fantastic locally-made goods.

        Shop online or visit us in person!

        Whether you prefer the convenience of online shopping or enjoy browsing in person, we've got you covered. We offer a wide selection of products to suit your needs and budget, from international brands to unique treasures crafted right here in the UK.

        We're more than just retail!

        We're also a trusted wholesaler, supplying shops across the country. So, you might even see our products on the shelves of your favorite local stores!

        The future is exciting!

        We're always looking for ways to expand and bring you even more. In the future, you can expect to see some of our fantastic locally-made products exported to different countries. Stay tuned for more updates!
        
        </p>
        </div>
    <div className="footer">
    <Footer />
    </div>
    </div>
  )
}

export default About