import React from "react";
import "../App.css";
import "../assets/theme.css";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <div className="centered-container">
      <div className="blur-bg"></div>
      <form className="form-box" autoComplete="off">
        <div className="form-title" style={{marginBottom: '1.2rem'}}>User Login</div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <div className="form-action">
          <button type="submit">Login</button>
        </div>
        <Link className="form-link" to="/user/register">Register</Link>
      </form>
    </div>
  );
}
