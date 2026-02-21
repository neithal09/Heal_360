/* ============================================================
   TESTIMONIALS COMPONENT
   Section displaying client testimonials and reviews
   ============================================================ */
import { useScrollRevealChildren } from "../hooks/useScrollReveal";

const Testimonials = () => {
  const gridRef = useScrollRevealChildren(".testi-card");
  const testimonials = [
    {
      id: 1,
      initial: "A.R.",
      name: "A., Hyderabad",
      context: "Unexplained fertility · 2 years trying",
      text: "We had been trying for 2 years with no clear answer. Tests were 'normal' but nothing was happening. After the consult, we finally understood what to focus on. The plan felt personalised — we felt heard for the first time.",
      rating: 5,
    },
    {
      id: 2,
      initial: "M.S.",
      name: "M., Dubai",
      context: "Post-IVF · Looking for natural approach",
      text: "Failed IVF twice. We were exhausted. Dr. Tahera didn't just talk about supplements — she looked at everything. We got a clear roadmap and something to actually work toward.",
      rating: 5,
    },
    {
      id: 3,
      initial: "P.K.",
      name: "P., Pune",
      context: "PCOS · 38 years old",
      text: "I'm 38, PCOS diagnosis, and was told IVF was the only option. I wasn't ready. The consultation gave me real, grounded hope. Not a promise — a path. That's all I needed.",
      rating: 5,
    },
    {
      id: 4,
      initial: "R.T.",
      name: "R., Bangalore",
      context: "Male factor · Both partners consulted",
      text: "Male factor was the issue — but everywhere else the focus was only on my wife. Heal360 addressed both of us equally. The plan covered me too. That made a huge difference.",
      rating: 5,
    },
    {
      id: 5,
      initial: "N.A.",
      name: "N., London",
      context: "International couple · First online consult",
      text: "We're based in the UK and weren't sure if online would work. It was seamless. The slot worked across time zones. The consult felt just as personal — maybe more so.",
      rating: 5,
    },
    {
      id: 6,
      initial: "S.M.",
      name: "S., Mumbai",
      context: "Age 40+ · IVF history",
      text: "40 years old, one failed IVF, irregular cycles. We didn't know if natural support was even possible. It is. The consultation was thorough and realistic. We're following the plan with confidence.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <section className="testi-section section-pad" id="testimonials">
      <div className="container">
        <div className="testi-header">
          <div className="section-pill">Real Stories</div>
          <h2 className="section-title">What Couples Are Saying</h2>
          <p className="section-sub">
            Real words from real people. Used with permission.
          </p>
        </div>

        <div className="testi-grid" ref={gridRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testi-card">
              <div className="testi-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testi-text">{testimonial.text}</p>
              <div className="testi-footer">
                <div className="testi-av">{testimonial.initial}</div>
                <div className="testi-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.context}</span>
                </div>
                <div className="testi-stars">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
