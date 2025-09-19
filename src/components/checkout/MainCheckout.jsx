"use client";
import React from "react";
import "../checkout/checkOut.css";

import { useCart } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm ";
import CheckoutSummary from "./CheckoutSummary ";

const MainCheckout = () => {
  const { cart } = useCart();

  // احسب التوتال من الكارت
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="main-checkout-container">
      <CheckoutForm />
      <CheckoutSummary cartItems={cart} cartTotal={cartTotal} />
    </div>
  );
};

export default MainCheckout;
