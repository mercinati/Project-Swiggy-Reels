import React from "react";
import "../../App.css";
import "../../styles/theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from "../../config/server";

const UserRegister = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(`${server}/api/auth/user/register`, {
      fullName: name,
      email,
      password
    },{
      withCredentials: true
    })

    console.log(response.data);

    navigate('/home') //Redirect to home page after registration

  };

  return (
    <div className="centered-container">
      <div className="blur-bg"></div>
      <form className="form-box" autoComplete="off" onSubmit={handleSubmit}>
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

export default UserRegister;
