import React, { useState } from "react";
import "../../styles/CreateFood.css"; // Create this CSS file for styles
import axios from "axios";
import { server } from "../../config/server";

const CreateFood = () => {

  /* ------------------------------------------
      ALL REACT STATES (LOGIC BLOCK)
  ------------------------------------------- */
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ------------------------------------------
      VIDEO UPLOAD + PREVIEW
  ------------------------------------------- */
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate video file
    if (!file.type.startsWith("video/")) {
      setError("Please upload a valid video file");
      return;
    }

    setError("");
    setVideo(file);

    // Create preview URL
    const previewURL = URL.createObjectURL(file);
    setVideoPreview(previewURL);
  };

  /* ------------------------------------------
      VALIDATION (OPTIONAL BUT CLEAN)
  ------------------------------------------- */
  const validateFields = () => {
    if (name.trim().length < 3) {
      setError("Food name must be at least 3 characters");
      return false;
    }

    if (description.trim().length < 10) {
      setError("Description must be at least 10 characters");
      return false;
    }

    if (!video) {
      setError("Please upload a video");
      return false;
    }

    return true;
  };

  /* ------------------------------------------
      SUBMIT LOGIC (FORMDATA + AXIOS)
  ------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateFields()) {
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("video", video);

      const res = await axios.post(
        `${server}/api/food/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      console.log("Response:", res.data);
      setLoading(false);

      // Optional: Clear form after submit
      setName("");
      setDescription("");
      setVideo(null);
      setVideoPreview(null);
      
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
      setLoading(false);
    }


  };

  /* ------------------------------------------
      UI + FORM COMPONENT
  ------------------------------------------- */
  return (
    <div className="create-food-container">
      <h2 className="create-title">Create Food</h2>

      {error && <p className="error-message">{error}</p>}

      <form className="food-form" onSubmit={handleSubmit}>
        
        {/* FOOD NAME */}
        <div className="form-group">
          <label>Food Name</label>
          <input
            type="text"
            placeholder="Enter food name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter food description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
        </div>

        {/* VIDEO INPUT */}
        <div className="form-group">
          <label>Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </div>

        {/* VIDEO PREVIEW */}
        {videoPreview && (
          <div className="video-preview">
            <video width="100%" controls src={videoPreview}></video>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <button type="submit" className="submit-btn">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateFood;
