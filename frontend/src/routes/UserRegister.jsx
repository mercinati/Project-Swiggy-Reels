import React from "react";
import "../App.css";
import "../assets/theme.css";
import { Link } from "react-router-dom";

export default function UserRegister() {
  return (
    <div className="centered-container">
      <div className="blur-bg"></div>
      <form className="form-box" autoComplete="off">
        <div className="form-title" style={{marginBottom: '1.2rem'}}>User Registration</div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Create a password" required />
        </div>
        <div className="form-action">
          <button type="submit">Register</button>
        </div>
        <Link className="form-link" to="/user/login">Login</Link>
      </form>
    </div>
  );
}
