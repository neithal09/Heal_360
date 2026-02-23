/* ============================================================
   HOW IT WORKS COMPONENT
   Section displaying the 4-step journey process
   ============================================================ */
import { trackEvent } from "../utils/tracking";
import { useScrollRevealChildren } from "../hooks/useScrollReveal";

const HowItWorks = () => {
  const trackRef = useScrollRevealChildren(".hiw-step, .hiw-endpoint");

  const handleBookingClick = () => {
    trackEvent("CTA_Click_BookAppointment", "how-it-works");
  };

  const steps = [
    {
      id: 1,
      icon: "fas fa-calendar-check",
      title: "Book Your Slot",
      description:
        "Reserve a private time slot for you and your partner. Morning and evening slots available across time zones.",
    },
    {
      id: 2,
      icon: "fas fa-video",
      title: "Online Consultation",
      description:
        "A private, in-depth video session via Google Meet — both partners together. No waiting rooms. No travel.",
    },
    {
      id: 3,
      icon: "fas fa-map-location-dot",
      title: "Get Your Plan",
      description:
        "Walk away with a personalised roadmap — habits, routines, priorities — not generic advice. Your plan, your pace.",
    },
    {
      id: 4,
      icon: "fas fa-heart-pulse",
      title: "Follow-Up Pathway",
      description:
        "Post-consult support pathway shared. Continued guidance available so you're never left without direction.",
    },
  ];

  return (
    <section className="hiw-section section-pad" id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="section-pill section-pill-white">The Journey</div>
          <h2 className="section-title section-title-white">
            From Confusion to Clarity
            <br />— in 4 Simple Steps
          </h2>
        </div>

        <div className="hiw-track" ref={trackRef}>
          {steps.map((step, index) => (
            <div key={step.id} className="hiw-step" data-step={step.id}>
              <div className="hiw-step-icon">
                <span className="hiw-icon-circle">
                  <i className={step.icon}></i>
                </span>
                <div
                  className={`hiw-connector ${index === steps.length - 1 ? "hiw-connector-end" : ""}`}
                  aria-hidden="true"
                >
                  {index < steps.length - 1 && (
                    <i className="fas fa-chevron-right"></i>
                  )}
                </div>
              </div>
              <div className="hiw-step-body">
                <span className="hiw-step-num">
                  Step {String(step.id).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}

          {/* Emotional Endpoint */}
          <div className="hiw-endpoint">
            <div className="hiw-endpoint-icon">
              <i className="fas fa-baby"></i>
            </div>
            <div className="hiw-endpoint-copy">
              <h3>Welcome Your Baby.</h3>
              <p>
                This is what every step is working towards. You deserve to hold
                that joy — and we're here to walk that path with you.
              </p>
            </div>
          </div>
        </div>

        <div className="hiw-cta">
          <a
            href="https://pages.razorpay.com/rev199"
            className="cta-btn cta-light"
            onClick={() => handleBookingClick()}
          >
            <span className="cta-btn-text">Start Your Journey Today</span>
            <span className="cta-btn-arrow">
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
