import Link from 'next/link';
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import './Cart.css'
const Cart = ({ setShowCart  , cartItems,removeFromCart , cartTotal}) => {
    return (
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
    );
}

export default Cart;
