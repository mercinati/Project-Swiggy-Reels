import React from "react";
import "../../styles/Profile.css"; // Create this CSS file for styles
import "../../styles/theme.css"; // For theme styles

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Top Section */}
      <div className="profile-header">

        {/* Left: DP */}
        <div className="avatar"></div>

        {/* Right: Restaurant Info */}
        <div className="profile-info">
          <p className="info-text">Restaurant Name</p>
          <p className="info-text">Contact</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-box">
          <p className="stat-title">total meals</p>
          <p className="stat-value">43</p>
        </div>

        <div className="stat-box">
          <p className="stat-title">customer serve</p>
          <p className="stat-value">15K</p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="video-box">
            video
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
