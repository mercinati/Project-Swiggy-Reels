import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/Home.css'; // Create this CSS file for styles
import { server } from "../../config/server";

const Home = () => {
  const containerRef = useRef(null);

  const [videos, setVideos] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [overflowing, setOverflowing] = useState([]);

  const descriptionRefs = useRef([]);

  React.useEffect(() => {
    setTimeout(() => {
      setOverflowing(
        descriptionRefs.current.map(
          (el) => el && el.scrollHeight > el.clientHeight
        )
      );
    }, 100); // Wait for DOM render
  }, []);

    React.useEffect(() => {

      axios.get(`${server}/api/food/`, { withCredentials: true })
      .then((response) => {
        const data = response.data.food;
        console.log(data);
        setVideos(data);
        
        setExpanded(Array(data.length).fill(false));
        setOverflowing(Array(data.length).fill(false));
      })
      .catch((err) => console.log(err));
  }, []); // IMPORTANT


  const handleToggle = (idx) => {
    setExpanded((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <div className="reels-container" ref={containerRef}>
      {videos.map((video, idx) => (
        <div className="reel" key={idx}>
          <div className="reel-video-wrapper">
            <video
              className="reel-video"
              src={video.video}
              controls
              playsInline
              autoPlay
              loop
              muted
              preload="metadata"
            />
            {/* Unified overlay for both desktop and mobile */}
            <div className="reel-overlay-unified">
              <div className="reel-left-info">
                <div className="reel-title">{video.name}</div>
                <div
                  className={`reel-description${expanded[idx] ? ' expanded' : ''}`}
                  ref={el => descriptionRefs.current[idx] = el}
                >
                  {!expanded[idx] ? (
                    <>
                      {(() => {
                        // Show only the visible part and ...more if overflowing
                        const desc = video.description;
                        // Render the full string, CSS will clamp, but we want to append ...more
                        return (
                          <>
                            {desc}
                            {overflowing[idx] && (
                              <span className="reel-more" onClick={() => handleToggle(idx)}>
                                ...more
                              </span>
                            )}
                          </>
                        );
                      })()}
                    </>
                  ) : (
                    <>
                      {video.description}
                      <span className="reel-less" onClick={() => handleToggle(idx)}>
                        &nbsp;less
                      </span>
                    </>
                  )}
                </div>
                <Link className="visit-store-btn" to={"/foodpartner/" + video.FoodPartner}>Visit Store</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;