import React from "react";
import "../../App.css";
import "../../styles/theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

  const navigate =useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login", {
      email,
      password
    },{
      withCredentials: true
    })

    console.log(response.data);

    navigate('/') //Redirect to home page after login

  }
  
  return (
    <div className="centered-container">
      <div className="blur-bg"></div>
      <form className="form-box" autoComplete="off" onSubmit={handleSubmit}>
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

export default UserLogin;