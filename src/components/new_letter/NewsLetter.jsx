import React from 'react';
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className="newsletter">
  <div className="container">
    <div className="text">
      <div className="content">
        <h4>Join our newsletter for $10 offs</h4>
        <p>Register now to get latest updates on promotions & coupons.</p>
       
      </div>
    </div>
    <form action="" className="newsletter_form">
      <input type="email" placeholder="your email address" />
      <button type="submit">subscribe</button>
    </form>
  </div>
</div>

    );
}

export default NewsLetter;
