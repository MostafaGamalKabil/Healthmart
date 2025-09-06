"use client";
import React from "react";
import NewsLetter from "../../components/new_letter/NewsLetter";
import Header1 from "../../components/header/Header-1";
import Header2 from "../../components/header/Header-2";
import Header3 from "../../components/header/Header-3";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/CartContext";
import { IoIosClose } from "react-icons/io";

import "./wishList.css";

const WishList = () => {
  // ✅ جلب البيانات من CartContext
  const { wishlist, removeFromWishlist } = useCart();

  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />

      <div className="title-account">
        <small>Home / Wishlist</small>
        <h4>Wishlist</h4>
      </div>

      {/* ✅ لو مافيش منتجات */}
      {wishlist.length === 0 ? (
        <div className="wishlist_message">
          <small>There are no products in your Wishlist!</small>
        </div>
      ) : (
        <div className="wishlist-container">
          {wishlist.map((product) => (
            <div className="wishlist-card-container" key={product.id}>
              <div className="wishlist-card">
                     <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <IoIosClose fontSize={30}/>
                  </button>
                <img
                  src={`/${product.image}`}
                  alt={product.title}
                  className="wishlist-image"
                />
                <div className="wishlist-info">
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                
                </div>
              </div>
               <button className="btn-cart">Add to cart</button>
            </div>
          ))}

         
        </div>
      )}

      <NewsLetter />
      <Footer />
    </>
  );
};

export default WishList;
