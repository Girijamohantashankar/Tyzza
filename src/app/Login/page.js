import React from 'react';
import '../../../styles/auth.css'; 
import Link from 'next/link';
import logo from "../../../assets/171.jpg"
import Image from 'next/image';

function LoginPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="illustration">
          <Image src={logo} alt="Login Illustration" className='logo_login' />
        </div>
        <h1 className="auth-title">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="number" id="mobile" placeholder="Enter your mobile" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <Link href="/Chat">
          <button type="submit" className="auth-btn">Sign In</button>
          </Link>
        </form>
        <p className="switch-auth">
          Do not have an account? <Link href="/Signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
