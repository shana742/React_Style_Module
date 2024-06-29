import React, { useState } from "react";
import HeaderStyle from './HeaderStyle.css'
import Logo from '../../asset/img/logo.svg'
import SearchIcon from '@mui/icons-material/Search'
// import Select from '../Selectrop-Part/Select.js'
import IconCompare from '../../asset/img/icon-compare.svg'
import WHishlist from '../../asset/img/icon-heart.svg'
import Cart from '../../asset/img/icon-cart.svg'
import Account from '../../asset/img/icon-user.svg'
import Button from "@mui/material/Button";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Navbar from './Nav/Navbar'
import Sliders from '../../Pages/Home/Slider/Sliders.js'
import Hom from '../../Pages/Home/Hom.js'
import Products from '../Products/ProCat.js'

function Header() {
    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Category');

    console.log(search);

    return (
        <>
            <nav className="nav2">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="categories">
                    <select onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option>All Category</option>
                        <option>Milk & Dairy</option>
                        <option>Coffee & Teas</option>
                        <option>Pet Food</option>
                        <option>Meats</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                    </select>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
                    <SearchIcon className="s-icon" />
                </div>
                <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                    <ul className="icon list-inline mb-0 header-tabs">
                        <li className="list-inline-item">
                            <span><img src={IconCompare} alt="Compare" />
                                <span className="badge bg-success rounded-circle">3</span>
                                Compare
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={WHishlist} alt="Wishlist" />
                                <span className="badge bg-success rounded-circle">4</span>
                                Wishlist
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={Cart} alt="Cart" />
                                <span className="badge bg-success rounded-circle"></span>
                                Cart
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                                <img src={Account} alt="Account" />
                                <span className="badge bg-success rounded-circle"></span>
                                Account
                            </span>
                            {
                                isOpenDropDown &&
                                <ul className="dropdownmenu">
                                    <li><Button><Person2OutlinedIcon /> My Account </Button></li>
                                    <li><Button><LocationOnOutlinedIcon /> Order Tracking</Button></li>
                                    <li><Button><FavoriteBorderOutlinedIcon /> My Wishlist</Button></li>
                                    <li><Button><SettingsOutlinedIcon /> Settings</Button></li>
                                    <li><Button><LogoutOutlinedIcon /> Sign Out</Button></li>
                                </ul>
                            }
                        </li>
                    </ul>
                </ClickAwayListener>
            </nav>
            <Navbar />
            <Sliders />
            <Hom setSelectedCategory={setSelectedCategory} />
            <Products search={search} selectedCategory={selectedCategory} />
        </>
    )
}

export default Header;




