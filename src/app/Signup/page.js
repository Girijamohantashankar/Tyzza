import React from 'react';
import '../../../styles/auth.css'; 
import Link from 'next/link';
import Image from 'next/image';
import signuplogo from "../../../assets/6343825.jpg"

function SignupPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="illustration">
          <Image src={signuplogo} alt="Signup Illustration" className='logo_login' />
        </div>
        <h1 className="auth-title">Signup</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input type="text" id="name" placeholder="Enter your user name" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="number" id="mobile" placeholder="Enter your Mobile Number" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="auth-btn">Signup</button>
        </form>
        <p className="switch-auth">
          Already have an account? <Link href="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
