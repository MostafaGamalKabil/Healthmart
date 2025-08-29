import './Header.css'
import { SlHeart } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";

const Header2 = () => {
    return (
      <>
  {/* Main Header */}
  <header className="main-header">
    <div className="container">
      <div className="header-content">
        {/* Logo */}
        <a className="logo-icon">
          <img className="logo-img" src="./img/logo.png" alt="" />
        </a>
        {/* Search Bar */}
        <div className="search-container">
          <div className="search-bar">
            <select className="search-select">
              <option>All Categories</option>
              <option>Health Care</option>
              <option>Personal Care</option>
              <option>Baby Care</option>
            </select>
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
            <button className="search-button">
             <FiSearch fontSize={20} className="fa-solid fa-magnifying-glass" />

            </button>
          </div>
        </div>
        {/* User Actions */}
        <div className="user-actions">
          <div className="user-action">
            
            <SlHeart className="fa-regular fa-heart" fontSize={30}/>
            <div className="badge">0</div>
          </div>
          <div className="user-action">
       
             <LuUserRound fontSize={30} className="fa-regular fa-user"/>
            <div className="user-text">
              <div className="user-text-sub">My Account</div>
              <div className="user-text-main">Login</div>
            </div>
          </div>
          <div className="user-action">

           <BsCart2 fontSize={30} className="fa-solid fa-cart-shopping"/>
            <div className="total_badge">0</div>
         
          <div className="user-text">
            <div className="user-text-sub">Total</div>
            <div className="user-text-main">$0.00</div>
          </div>
        </div>
         </div>
      </div>
    </div>
  </header>
</>

    );
}

export default Header2;
