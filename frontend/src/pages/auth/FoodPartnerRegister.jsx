import React from "react";
import "../../App.css";
import "../../styles/theme.css";
import { Link } from "react-router-dom";

const FoodPartnerRegister = () => {


  return (
    <div className="centered-container">
      <div className="blur-bg"></div>
      <form className="form-box" autoComplete="off">
        <div className="form-title" style={{marginBottom: '1.2rem'}}>Food Partner Registration</div>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="text" id="contact" name="contact" placeholder="+91 1234xxxx90" required />
          </div>
          <div className="form-group">
            <label htmlFor="restaurant">Restaurant Name</label>
            <input type="text" id="restaurant" name="restaurant" placeholder="Enter restaurant name" required />
          </div>
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
        <Link className="form-link" to="/foodpartner/login">Login</Link>
      </form>
    </div>
  );
}

export default FoodPartnerRegister;