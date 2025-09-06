"use client";
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import './LoginModal.css';

const LoginModal = ({ setShowLogin }) => {
    return (
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
    );
};

export default LoginModal;
