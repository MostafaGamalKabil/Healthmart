"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* العمود الأول: Contact Us */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p className={styles.phone}>+01 123 456 789</p>
          <p className={styles.note}>Free from fixed and mobile phones in USA.</p>
          <p className={styles.email}>
            Email: <a href="mailto:demo@example.com">demo@example.com</a>
          </p>
          <p className={styles.hours}>
            Call Center hours<br />
            <span>Mon-Sun 09:00-19:00</span>
          </p>
        </div>

        {/* العمود الثاني: Get to Know Us */}
        <div className={styles.column}>
          <h3>Get to know Us</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Term & Policy</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News & Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* العمود الثالث: Information */}
        <div className={styles.column}>
          <h3>Information</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>

        {/* العمود الرابع: Orders & Returns */}
        <div className={styles.column}>
          <h3>Orders & Returns</h3>
          <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Exchange</a></li>
          </ul>
        </div>

        {/* العمود الخامس: Apps & Social */}
        <div className={styles.column}>
          <h3>Download Apps:</h3>
          <div className={styles.appButtons}>
            
            <img src="/img/appstore.png" alt="App Store" width={140} height={40} />
            
            <img src="/img/googleplay.png" alt="Google Play" width={140} height={40} />
          </div>
          <h3 className={styles.followTitle}>Follow us:</h3>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>
      </div>

      {/* الجزء السفلي */}
      <div className={styles.bottom}>
        <p>© 2025 HealthMart_Default - WordPress Theme by Avanam</p>
        <div className={styles.paymentIcons}>
          {/* ضع هنا صور الدفع */}
          <img src="/img/visa.png" alt="Visa"  />
      
        </div>
      </div>
    </footer>
  );
}
