import React from 'react'
import './style.css'
import Slider from "react-slick";

function index  () {

    var settings = {
        dots: false,
        Infinity: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true,

    };

    return (
        <>
            <div className='catSlider-Section'>
                <div className='container-fluied'>
                    <h2 className='hd'>Featured Categories</h2>
                    <Slider {...settings} className="cat-slider-main">                
                            <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 1 items</p>
                                </div>
                            </div>


                            <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 2 items</p>
                                </div>
                            </div>

                            <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 3 items</p>
                                </div>
                            </div>


                            <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 4 items</p>
                                </div>
                            </div>


                            <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 5 items</p>
                                </div>
                            </div>

                         <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 6 items</p>
                                </div>
                            </div>  

                            <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 7 items</p>
                                </div>
                            </div>

                            <div className='item'>
                                <div className='info'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png' />
                                    <h5> Cake & Milk</h5>
                                    <p> 9 items</p>
                                </div>
                            </div>
                       

                    </Slider>
                </div>
            </div>
            
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />        
            
            
            
            
            
     </>
    )
}

export default index;