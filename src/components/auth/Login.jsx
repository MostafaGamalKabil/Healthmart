"use client";
import Link from 'next/link';
import './Auth.css'

const Login = () => {
  return (
    <div className="auth-boxs">
      <h2>Login</h2>
      <form>
        <label htmlFor="login-username">
          Username or email address <span>*</span>
        </label>
        <input id="login-username" type="text" required />

        <label htmlFor="login-password">
          Password <span>*</span>
        </label>
        <input id="login-password" type="password" required />

        <div className="form-options">
          <button type="submit">Log In</button>
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
        </div>

     <Link href="resetPassword" className="lost-password">
  Lost your password?
</Link>
      </form>
    </div>
  );
};

export default Login;
