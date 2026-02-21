/* ============================================================
   VIDEO PLAYER COMPONENT
   Reusable video player with thumbnail and play button
   ============================================================ */
import { useState } from "react";

const VideoPlayer = ({
  videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4",
  thumbnailTitle = "Watch Video",
  duration = "3 min",
  onPlay = () => {},
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay();
  };

  return (
    <div className={`video-container ${className}`}>
      {!isPlaying ? (
        <div className="video-thumbnail" onClick={handlePlay}>
          <div className="video-thumb-bg">
            <div className="video-thumb-overlay">
              <div className="play-btn" aria-label="Play video">
                <i className="fas fa-play"></i>
              </div>
              <div className="video-label">
                <p className="video-title">{thumbnailTitle}</p>
                <p className="video-duration">
                  <i className="fas fa-clock"></i> {duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <video
          className="hero-video"
          controls
          playsInline
          autoPlay
          style={{ display: "block" }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support video.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
