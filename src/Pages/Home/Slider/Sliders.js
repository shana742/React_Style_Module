import React from 'react'
import Slider from "react-slick";
import './Slider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slide1 from '../../../asset/img/slider-1.png'
import Slide2 from '../../../asset/img/slider-2.png'
import Button from '@mui/material/Button'
import SendOutlined from '@mui/icons-material/SendOutlined'




const Sliders = () => {

     var settings = {
          dots: true,
          Infinity:true,
          speed: 500,
          slidesToShow: 1,
         slidesToScroll: 1,
         fade: true,
         arrows: true,
       
     };
    return (
      
         <section className='homeSlider'>
          <i class='fa fa-address-book' aria-hidden='true' />
              <div className='container-fluid position-reletive'>
                 <Slider {...settings} className="home-slider-main">
                        <div className='item'>
                            <img src={Slide1}  className='w-100'/>
                            <div className='info'>
                               <h2 className=' mb-4'>
                                    Dont't Miss amzing <br/>
                                    groccery deals
                               </h2>
                               <p>Sing up for the daily newsletter</p>
                            </div>
                        </div>
                        <div className='item'>
                             <img src={Slide2} className='w-100' />
                             <div className='info'>
                                  <h2 className=' mb-3'>
                                      Fresh Vegetables <br />
                                      Big discount
                                  </h2>
                                  <p>Save Up to 50% off on your first order</p>
                             </div>
                        </div>
                 </Slider>

                    <div className='newsletterbanner'>
                        <SendOutlined/>
                           <input type='text' placeholder='Your Email Address'/>
                           <Button className='bg-g'>Subscribe</Button>
                    </div>
              </div>
         </section>
      
    )
}


export default Sliders;