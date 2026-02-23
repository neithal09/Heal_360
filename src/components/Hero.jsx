/* ============================================================
   HERO COMPONENT
   Main hero section with video, branding, and CTAs
   ============================================================ */
import { useState } from "react";
import { trackEvent } from "../utils/tracking";

const Hero = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlaying(true);
    trackEvent("Video_Play", "hero");
  };

  const handleBookingClick = (source) => {
    trackEvent("CTA_Click_BookAppointment", source);
    trackEvent("Booking_Start", source);
  };

  return (
    <section className="hero" id="hero">
      {/* Hero Content */}
      <div className="hero-content-wrap">
        <div className="container">
          {/* Centered Headline Section */}
          <div className="hero-headline-section">
            <div className="hero-eyebrow">
              <span className="dot-pulse"></span>
              Natural Fertility Support &nbsp;·&nbsp; Online &nbsp;·&nbsp;
              Private
            </div>

            <h1 className="hero-headline">Trying to Conceive?</h1>

            <h2 className="hero-headline-sub-centered">
              Overcome Infertility Naturally
            </h2>
          </div>

          {/* Video Section - Placed First */}
          <div className="hero-video-wrap-centered">
            <div className="video-container">
              {!videoPlaying ? (
                <div className="video-thumbnail" onClick={handlePlayVideo}>
                  <div
                    className="video-thumb-bg"
                    style={{
                      backgroundImage:
                        "url(https://img.youtube.com/vi/yzdZKjmb80s/maxresdefault.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="video-thumb-overlay">
                      <div className="play-btn" aria-label="Play video">
                        <i className="fas fa-play"></i>
                      </div>
                      <div className="video-label">
                        <p className="video-title">
                          Watch: Dr. Tahera's Approach
                        </p>
                        <p className="video-duration">
                          <i className="fas fa-clock"></i> 3 min
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  id="heroVideo"
                  className="hero-video"
                  src="https://www.youtube.com/embed/yzdZKjmb80s?autoplay=1"
                  title="Dr. Tahera's Approach"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                ></iframe>
              )}
            </div>
          </div>

          {/* Copy Section - After Video */}
          <div className="hero-copy-centered">
            <p className="hero-sub">
              A structured, couple-first consultation that gives you a clear
              plan — not another opinion. Private. Online. Action-focused.
            </p>

            <div className="trust-row">
              <span>
                <i className="fas fa-shield-halved"></i> Fully refundable
                booking
              </span>
              <span>
                <i className="fas fa-lock"></i> 100% private
              </span>
              <span>
                <i className="fas fa-video"></i> Google Meet
              </span>
            </div>

            {/* Animated CTA Stack */}
            <div className="cta-stack">
              <a
                href="https://pages.razorpay.com/rev199"
                className="cta-btn cta-tertiary"
                onClick={() => handleBookingClick("hero-3")}
              >
                <span className="cta-btn-text">
                  Book Your Wellness Assessment
                </span>
                <span className="cta-btn-badge">Limited Slots</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="hero-wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
