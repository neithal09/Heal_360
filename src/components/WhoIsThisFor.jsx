/* ============================================================
   WHO IS THIS FOR COMPONENT
   Section displaying target audience and feature list
   ============================================================ */
import { trackEvent } from "../utils/tracking";
import { useScrollRevealChildren } from "../hooks/useScrollReveal";

const WhoIsThisFor = () => {
  const listRef = useScrollRevealChildren(".for-item");

  const handleBookingClick = () => {
    trackEvent("CTA_Click_BookAppointment", "who-for");
  };

  const forItems = [
    {
      id: 1,
      title: "You've been trying to conceive for 12+ months",
      description:
        "With no clear answer, no pregnancy — and you're exhausted from the waiting and guessing.",
    },
    {
      id: 2,
      title: "You're 35+, 40+ and still trying",
      description:
        "Age is a factor — but not a final verdict. You want guidance tailored to where you are right now.",
    },
    {
      id: 3,
      title: "You have IVF history or unexplained infertility",
      description:
        "Failed cycles, inconclusive reports — you want to understand the root cause before trying again.",
    },
    {
      id: 4,
      title: "You're dealing with PCOS, irregular cycles or hormonal imbalance",
      description:
        "You know something is off. You want a structured natural approach — not just medication management.",
    },
    {
      id: 5,
      title: "You prefer a natural, structured approach",
      description:
        "You want clarity on what to focus on, what to stop — and a real roadmap built for both of you.",
    },
  ];

  return (
    <section className="for-section section-pad" id="who-its-for">
      <div className="container">
        <div className="for-header">
          <div className="section-pill">Is This For You?</div>
          <h2 className="section-title">You're in the right place if…</h2>
        </div>

        <div className="for-grid" role="list" ref={listRef}>
          {forItems.map((item) => (
            <div key={item.id} className="for-card" role="listitem">
              <div className="for-card-icon">
                <i className="fas fa-check"></i>
              </div>
              <div className="for-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="for-cta">
          <a
            href="https://pages.razorpay.com/rev199"
            className="cta-btn cta-primary"
            onClick={() => handleBookingClick()}
          >
            <span className="cta-btn-text">Yes, This Is Me — Book Now</span>
            <span className="cta-btn-arrow">
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
