import React from 'react';
import './Navbar.css';
import { IoIosPerson } from "react-icons/io";
import './NavbarT.css';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaCartArrowDown,
  FaSearch
} from "react-icons/fa";
const NavbarN = () => {
  return (
    <>
    <div className='Navbar flex_item'>
        <div className='inner-nav flex_item'>
        <div className='left'>
          Pharma
        </div>
        <div className='right flex_item'>
          <ul className='flex_item'>
            <li>Home</li>
            <li>Shop</li>
            <li>Track Order</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className='flex_item icons'> <IoIosPerson className="person" />  <FaSearch className="search" /> <FaCartArrowDown className="cart" /> </li>
          </ul>
         
        </div>
    </div>
    </div>
    </>
  )
}

export default NavbarN