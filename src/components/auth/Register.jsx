"use client";
import Link from "next/link";
import "./Auth.css";

const Register = () => {
  return (
    <div className="auth-boxs reg">
      <h2>Register</h2>
      <form>
        <label htmlFor="reg-username">
          Username <span>*</span>
        </label>
        <input id="reg-username" type="text" required />

        <label htmlFor="reg-email">
          Email address <span>*</span>
        </label>
        <input id="reg-email" type="email" required />

        <label htmlFor="reg-password">
          Password <span>*</span>
        </label>
        <input id="reg-password" type="password" required />
        <small>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="">privacy policy</Link>.</small>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
