import { LiaViber } from "react-icons/lia";

import './Header.css'
const Header1 = () => {
    return (
     <>
  {/* Top Header */}
  <div className="top-header">
    <div className="container">
      <div className="top-header-content">
        <div className="top-header-left">
          <span>About Us</span>
          <span>Blog</span>
          <span>Contact Us</span>
          <span>FAQ</span>
        </div>
        <div className="top-header-right">
          <div className="contact-info">
            <LiaViber fontSize={18} />

            <span style={{ color: "#001" }}>You can Contact us 24/7</span>
            <a
              style={{ textDecoration: "none", fontSize: 14 }}
              href="tel:+123546789"
              className="phone-number"
            >
              (+12) 354 6789
            </a>
          </div>
          <span className="free-shipping">
            Free shipping on orders over $100!
          </span>
        </div>
      </div>
    </div>
  </div>
</>

    );
}

export default Header1;
