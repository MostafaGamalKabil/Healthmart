"use client";
import React, { useState } from "react";
import "./Header.css";
import { SlHeart } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../../../src/context/CartContext";
import LoginModal from "../../components/loginModal/LoginModal";
import Cart from "../../components/cart/Cart";

const Header2 = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  // ✅ هنا نعدل عشان نستخدم cart بدل cartItems
  const { cart, removeFromCart, wishlist } = useCart();

  // ✅ نحسب إجمالي السعر بطريقة آمنة
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  return (
    <>
      {/* الهيدر */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo + Menu Btn */}
            <div className="header-left">
              <div className="menu-btn" onClick={() => setShowMenu(true)}>
                <i className="fa-solid fa-bars"></i>
              </div>
              <Link href={"/"} className="logo-icon">
                <img className="logo-img" src="/img/logo.png" alt="Logo" />
              </Link>
            </div>

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
                  <FiSearch fontSize={20} />
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="user-actions">
              {/* Wishlist */}
              <Link href={"/wishList"} style={{ color: "black" }}>
                <div className="user-action">
                  <SlHeart fontSize={30} />
                  {/* ✅ عرض عدد عناصر المفضلة */}
                  <div className="badge">{wishlist.length}</div>
                </div>
              </Link>

              {/* Login */}
              <div
                className="user-action"
                onClick={() => setShowLogin(true)}
                style={{ cursor: "pointer" }}
              >
                <LuUserRound fontSize={30} />
                <div className="user-text">
                  <div className="user-text-sub">My Account</div>
                  <div className="user-text-main">Login</div>
                </div>
              </div>

              {/* Cart */}
              <div
                className="user-action"
                onClick={() => setShowCart(true)}
                style={{ cursor: "pointer" }}
              >
                <BsCart2 fontSize={30} />
                {/* ✅ عرض عدد المنتجات في الكارت */}
                <div className="total_badge">{cart.length}</div>
                <div className="user-text">
                  <div className="user-text-sub">Total</div>
                  <div className="user-text-main">${cartTotal.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Login Modal */}
      {showLogin && <LoginModal setShowLogin={setShowLogin} />}

      {/* ✅ Cart Sidebar */}
      {showCart && (
        <Cart
          setShowCart={setShowCart}
          cartItems={cart} // ✅ نرسل cart بدل cartItems
          removeFromCart={removeFromCart}
          cartTotal={cartTotal}
        />
      )}

      {/* ✅ Side Menu */}
      {showMenu && (
        <div className="side-menu">
          <div className="side-menu-header">
            <span>Menu</span>
            <IoCloseOutline
              fontSize={28}
              onClick={() => setShowMenu(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="side-menu-links">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Categories</a>
            <a href="#">Products</a>
            <a href="#">Top deals</a>
            <a href="#">Elements</a>
            <a href="#">Blog</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
          </div>
          {/* Search under links */}
          <div className="mobile-search">
            <input type="text" placeholder="Search..." />
            <button>
              <FiSearch />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header2;
