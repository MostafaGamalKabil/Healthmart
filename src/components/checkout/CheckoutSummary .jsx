import React from "react";

const CheckoutSummary = ({ cartItems = [], cartTotal = 0 }) => {
  return (
    <div className="checkout-summary-container">
      {/* Your Order */}
      <div className="your-order-section">
        <h3>Your order</h3>
        <div className="order-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <div className="order-thumb">
                  <img src={`/${item.image}`} alt={item.title} />
                  <span>{item.title} × {item.qty || 1}</span>
                </div>
                <span>${(item.price * (item.qty || 1)).toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p>No items in cart</p>
          )}
        </div>

        {/* Shipping */}
        <div className="shipping-info">
          <span>Shipping</span>
          <div className="shipping-options">
            <label>
              <input type="radio" name="shipping" defaultChecked /> Flat rate:
              $5
            </label>
            <label>
              <input type="radio" name="shipping" /> Local pickup: $10
            </label>
          </div>
        </div>

        {/* Total */}
        <div className="total-info">
          <strong>Total</strong>
          <strong className="price">${(cartTotal + 5).toFixed(2)}</strong>
        </div>
      </div>

      {/* Payment */}
      <div className="payment-section">
        <h3>Payment</h3>
        <div className="payment-option">
          <input type="radio" id="bank-transfer" name="payment-method" defaultChecked />
          <label className="payment" htmlFor="bank-transfer"> Direct bank transfer</label>
          <p className="payment-desc">
            Make your payment directly into our bank account. Use your Order ID as the payment reference.
          </p>
        </div>
        <div className="payment-option">
          <input type="radio" id="check-payments" name="payment-method" />
          <label className="payment" htmlFor="check-payments">Check payments</label>
        </div>
        <div className="payment-option">
          <input type="radio" id="cash-on-delivery" name="payment-method" />
          <label className="payment" htmlFor="cash-on-delivery">Cash on delivery</label>
        </div>
      </div>

      {/* Place Order */}
      <button className="place-order-button">Place Order</button>

      {/* Trust Badges */}
      <div className="trust-section">
        <p>Guaranteed Safe And Secure Checkout</p>
        <img src="/img/visa.png" alt="Visa" />
      
      </div>
    </div>
  );
};

export default CheckoutSummary;
