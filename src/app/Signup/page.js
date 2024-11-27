"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "../../../styles/auth.css";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signuplogo from "../../../assets/6343825.jpg";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: formData.name,
      mobile: formData.mobile,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        router.push('/Login');
      } else {
        toast.error(data.error || "Signup failed. Please try again.");
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
          <Image
            src={signuplogo}
            alt="Signup Illustration"
            className="logo_login"
          />
        </div>
        <h1 className="auth-title">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your user name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="number"
              id="mobile"
              placeholder="Enter your Mobile Number"
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <p className="switch-auth">
          Already have an account? <Link href="/Login">Login</Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default SignupPage;
