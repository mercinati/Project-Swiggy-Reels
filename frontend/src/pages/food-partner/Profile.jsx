import React, { useState, useEffect } from "react";
import "../../styles/Profile.css"; // Create this CSS file for styles
import "../../styles/theme.css"; // For theme styles
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [profile, setprofile] = useState(null)
  const [videos, setvideos] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
    .then((res) => {  
      const fp = res.data;

        setprofile(fp?.foodPartner);

        // Validate foodItems before setting
        console.log(res.data);
        setvideos(Array.isArray(fp?.foodItems) ? fp.foodItems : []);
    })
    .catch((err) => console.log(err));
  },[id]);

  return (
    <div className="profile-container">
      {/* Top Section */}
      <div className="profile-header">

        {/* Left: DP */}
        <div className="avatar"></div>

        {/* Right: Restaurant Info */}
        <div className="profile-info">
          <p className="info-text">{profile?.restaurantName}</p>
          <p className="info-text">{profile?.contact}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-box">
          <p className="stat-title">total meals</p>
          <p className="stat-value">{videos.length}</p>
        </div>

        <div className="stat-box">
          <p className="stat-title">customer serve</p>
          <p className="stat-value">15k</p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((v) => (
          <div key={v._id} className="video-box">

            <video 
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              src={v.video}
              muted
            ></video>


          </div>
        ))}
      </div>
             {/* FLOATING ADD BUTTON */}
            <Link className="add-btn" to={"/create-food"}> + </Link>
    </div>
  );
};

export default Profile;
