"use client";
import { createContext, useContext, useState, useEffect } from "react";

// @ts-ignore
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // ✅ تحميل البيانات من localStorage عند أول تحميل للصفحة
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setCart(savedCart);
      setWishlist(savedWishlist);
      setIsInitialized(true);
    } catch (error) {
      console.error("Error loading localStorage data:", error);
    }
  }, []);

  // ✅ تحديث localStorage عند أي تغيير في الكارت
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  // ✅ تحديث localStorage عند أي تغيير في الويشليست
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isInitialized]);

  // ✅ إضافة منتج للكارت
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (!exist) {
      setCart([...cart, { ...product, qty: 1 }]); // إضافة الكمية للمنتج
    }
  };

  // ✅ حذف منتج من الكارت
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ✅ إضافة أو إزالة منتج من الويشليست (Toggle)
  const toggleWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);
    if (exist) {
      // لو المنتج موجود → هنشيله
      const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      // لو مش موجود → نضيفه
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  // ✅ حذف منتج من الويشليست
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
