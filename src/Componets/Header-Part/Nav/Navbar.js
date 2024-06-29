import React from 'react';
import './Navbarstyle.css'
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import GridViewIcon from '@mui/icons-material/GridView'
import { Link } from 'react-router-dom';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import flogo from '../../../asset/img/Flogo1.jpg'


function Navbar () {
    return(
        <>
            <div className='nav d-flex align-items-center'>
                <div className='container-fluid '>
                      <div className='row position-relative'>
                         <div className='col-sm-3 part1'>
                             <Button className='bg-g text-white cat-tabs'>
                                <GridViewIcon/> &nbsp;
                                Browes All Categories
                                <KeyboardArrowDownIcon/>
                             </Button>
                         </div>

                         <div className='col-sm-7 part2 d-flex position-static'>
                              <nav className="nav3">
                                <ul className='list-inline-item mb-0'>
                                    <li className='list-inline-item'>
                                        <Button>
                                            <Link>
                                                Home
                                            </Link>
                                        </Button>
                                    </li>

                                    <li className='list-inline-item'>
                                        <Button><Link>About</Link></Button>
                                    </li>

                                    <li className='list-inline-item'>
                                        <Button>
                                            <Link>
                                                Shop
                                            </Link>
                                        </Button>
                                    </li>

                                    <li className='list-inline-item'>
                                        <Button>
                                            <Link>
                                                Venders
                                                <KeyboardArrowDownIcon />
                                            </Link>
                                        </Button>
                                        <div className='pagedropdown'>
                                            <ul>
                                                <li><Button><Link to='/about'> About Us</Link> </Button></li>
                                                <li><Button><Link to='/contact'> Contact</Link> </Button></li>
                                                <li><Button><Link to='/myaccount'> My Account</Link> </Button></li>
                                                <li><Button><Link to='/login'> Login</Link> </Button></li>
                                                <li><Button><Link to='/register'> Register</Link> </Button></li>
                                                <li><Button><Link to='/forgotpassword'> Forgot Password</Link> </Button></li>
                                                <li><Button><Link to='/resetpassword'> Reset Password</Link> </Button></li>
                                                <li><Button><Link to='/purchaseguied'> Purchase Guied</Link> </Button></li>
                                                <li><Button><Link to='/terms'> Terms of Services</Link> </Button></li>
                                                <li><Button><Link to='/404'>404 Page </Link> </Button></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='list-inline-item position-static'>
                                        <Button>
                                            <Link>
                                                 Mega Menu
                                                <KeyboardArrowDownIcon />
                                            </Link>
                                        </Button>
                                        <div className='pagedropdown mega-menu  d-flex '>
                                         <div className='row'>
                                           <div className='col'>
                                            <h4 className='text-g'>Fruit & Vegetables</h4>
                                              <ul className='mt-4 mb-0'> 
                                                  <li><Link to='' >Meat & Poultry</ Link> </li>
                                                    <li><Link to='' >Fresh Vegetables</ Link> </li>
                                                        <li><Link to=''>Herbs & seasonings</ Link> </li>
                                                        <li><Link to=''>Cuts & Sprouts</ Link> </li>
                                                        <li><Link to=''>Exotic Fruits & Veggies</ Link> </li>
                                                        <li><Link to=''>Packaged Produce</Link> </li>
                                              </ul>
                                           </div>

                                            <div className='col'>
                                                <h4 className='text-g'>Breakfast & Dairy</h4>
                                                    <ul className='mt-4 mb-0'>
                                                        <li><Link to='' >Meat & Poultry</ Link> </li>
                                                        <li><Link to='' >Fresh Vegetables</ Link> </li>
                                                        <li><Link to=''>Herbs & seasonings</ Link> </li>
                                                        <li><Link to=''>Cuts & Sprouts</ Link> </li>
                                                        <li><Link to=''>Exotic Fruits & Veggies</ Link> </li>
                                                        <li><Link to=''>Packaged Produce</Link> </li>
                                                    </ul>
                                            </div>

                                            <div className='col'>
                                                <h4 className='text-g'>Meals & Seafood</h4>
                                                    <ul className='mt-4 mb-0'>
                                                        <li><Link to='' >Meat & Poultry</ Link> </li>
                                                        <li><Link to='' >Fresh Vegetables</ Link> </li>
                                                        <li><Link to=''>Herbs & seasonings</ Link> </li>
                                                        <li><Link to=''>Cuts & Sprouts</ Link> </li>
                                                        <li><Link to=''>Exotic Fruits & Veggies</ Link> </li>
                                                        <li><Link to=''>Packaged Produce</Link> </li>
                                                    </ul>
                                            </div>

                                            <div className='col'>
                                               <img src={flogo} className='w-100'/>
                                            </div>
                                        </div>
                                        </div> 
                                    </li>

                                     <li className='list-inline-item'>
                                        <Button><Link>Blog</Link></Button>
                                    </li>

                                    <li className='list-inline-item'>
                                        <Button>
                                            <Link> 
                                                Pages
                                              <KeyboardArrowDownIcon />
                                            </Link>
                                        </Button>

  
                                        <div className='pagedropdown'>
                                           <ul>
                                                <li><Button><Link to='/about'> About Us</Link> </Button></li>
                                                <li><Button><Link to='/contact'> Contact</Link> </Button></li>
                                                <li><Button><Link to='/myaccount'> My Account</Link> </Button></li>
                                                <li><Button><Link to='/login'> Login</Link> </Button></li>
                                                <li><Button><Link to='/register'> Register</Link> </Button></li>
                                                <li><Button><Link to='/forgotpassword'> Forgot Password</Link> </Button></li>
                                                <li><Button><Link to='/resetpassword'> Reset Password</Link> </Button></li>
                                                <li><Button><Link to='/purchaseguied'> Purchase Guied</Link> </Button></li>
                                                <li><Button><Link to='/terms'> Terms of Services</Link> </Button></li>
                                                <li><Button><Link to='/404'>404 Page </Link> </Button></li>
                                            </ul>
                                        </div>

                                    </li>

                                    <li className='list-inline-item'>
                                        <Button><Link>Contact</Link></Button>
                                    </li>
                                        
                                   </ul>
                              </nav>
                         </div>

                         <div className='col-sm-2 part3 d-flex align-items-center'>
                            <div className='phone d-flex align-items-center ml-auto'>
                                <span> <HeadphonesOutlinedIcon /> </span>
                                <div className='info ml-3'>
                                   <h4 className='text-g mb-0 '>1900 - 888</h4>
                                   <p className='mb-0'>24/7 Support Center</p>
                                </div>
                            </div>
                           
                           
                         </div>
                      </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;