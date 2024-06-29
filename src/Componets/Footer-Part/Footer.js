import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest'
import './Footerstyle.css'
// import Logo from '../../asset/img/logo.svg'
import Apple from '../../asset/img/49.jpg'
import Pay from '../../asset/img/48.jpg'
import Con from '../../asset/img/50.jpg'

const Footer = () => {
   
       

    return (
       <>
                 
            <footer className="section-p1">
  <div className="col logo">
    {/* <img className="logo" src={Logo} alt /> */}
    <h4>Contact</h4>
    <p><strong>Address: </strong>College Road, Street 56, Modasa</p>
    <p><strong>Phone: </strong>+01 2222 345 / (+91) 01 2345 6789</p>
    <p><strong>Hours:</strong>10:00-18:00, Mon-Sat </p>
    <div className="follow">
      <h4>follow us</h4>
      <div className="icon">
        <FacebookIcon/>
        <XIcon />
                <InstagramIcon />
          <PinterestIcon/>
        <YouTubeIcon />
      </div>
    </div>
  </div>
  <div className="col">
    <h4>About</h4>
    <a href="#">About us</a>
    <a href="#">Delivery Information</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Terms &amp; Conditions</a>
    <a href="#">Contact Us</a>
  </div>
  <div className="col">
    <h4>My Account</h4>
    <a href="#">Sign invlude</a>
    <a href="#">View Cart</a>
    <a href="#">My whishlist</a>
    <a href="#">Track My Order</a>
    <a href="#">Help</a>
  </div>
  <div className="col install">
    <h4>Install AApp</h4>
    <p>From App Store or Google Play</p>
    <div className="row">
      <img src={Apple} />
      <img src={Pay} />
    </div>
    <p>Secured Payment Gateways</p>
    <div className="png">
      <img src={Con}/></div>
  </div>
  <div className="copyright">
    <p> 2024 React-Js  Style Project </p>
  </div>
</footer>

                    
       </>
    );
};

export default Footer;
