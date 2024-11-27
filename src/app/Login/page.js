"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "../../../styles/auth.css"; 
import Link from "next/link";
import logo from "../../../assets/171.jpg";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

function LoginPage() {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      mobile: formData.mobile,
      password: formData.password,
    };

    setLoading(true); 

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        router.push('/Chat'); 
        
      } else {
        toast.error(data.error || "Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {loading && <div className="loader">Loading...</div>}  
        <div className="illustration">
          <Image src={logo} alt="Login Illustration" className="logo_login" />
        </div>
        <h1 className="auth-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="number"
              id="mobile"
              placeholder="Enter your mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>
        <p className="switch-auth">
          Do not have an account? <Link href="/signup">Signup</Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default LoginPage;
