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
import { useCart } from "../../../src/context/CartContext"; // ✅ Cart Context

const Header2 = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();
  const { cartItems, removeFromCart } = useCart();

  // ✅ حساب الإجمالي
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  return (
    <>
      {/* الهيدر */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link href={"/"} className="logo-icon">
              <img className="logo-img" src="/img/logo.png" alt="Logo" />
            </Link>

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
              <div className="user-action">
                <SlHeart fontSize={30} />
                <div className="badge">0</div>
              </div>

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
                <div className="total_badge">{cartItems.length}</div>
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
{showLogin && (
  <div className="popup-overlay" onClick={() => setShowLogin(false)}>
    {/* زرار X فوق يمين الشاشة السودة */}
    <button className="popup-close-global" onClick={() => setShowLogin(false)}>
      <IoCloseOutline size={28} />
    </button>

    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
      
      <form className="login-form">
        <label>Username or email *</label>
        <input type="text" required />

        <label>Password *</label>
        <input type="password" required />

        <div className="form-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit" className="btn-primary full-width">Login</button>

        <Link href="/resetPassword" className="forgot-link">Lost your password?</Link>
        <p className="signup-text">
          Don’t have an account yet? <Link href="/my_account">Sign up</Link>
        </p>
      </form>
    </div>
  </div>
)}


      {/* ✅ Cart Sidebar */}
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="cart-header">
              <h4>Shopping Cart</h4>
              <button className="cart-close" onClick={() => setShowCart(false)}>
                <IoCloseOutline size={24} />
              </button>
            </div>

            {/* Body */}
            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is empty</p>
                <small>No items in your cart. Go on, fill it up with something you love!</small>
                <button className="btn-primary">Start Shopping</button>
              </div>
            ) : (
              <div className="cart-body">
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      {/* الصورة */}
                      <div className="cart-thumb">
                        <img src={`/${item.image}`} alt={item.title} />
                      </div>

                      {/* اسم المنتج */}
                      <div className="cart-info">
                        <h5>{item.title}</h5>
                        <div className="cart-price">
                          {item.qty || 1} ×{" "}
                          <span className="price">
                            ${item.price}
                          </span>
                        </div>
                      </div>

                      {/* زرار X */}
                      <button
                        className="cart-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <IoCloseOutline size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="cart-footer">
                  <div className="cart-subtotal">
                    <span>Subtotal:</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>
                  <div className="cart-actions">
                    <Link href="/cart" className="btn-ghost">
                      View Cart
                    </Link>
                    <Link href="/checkout" className="btn-primary">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default Header2;
