/* ============================================================
   WHY HEAL360 COMPONENT
   Section displaying key differentiators and founder information
   ============================================================ */
import { useScrollRevealChildren } from "../hooks/useScrollReveal";
import drTaheraImage from "../assets/dr.tahera.webp";

const WhyHeal360 = () => {
  const gridRef = useScrollRevealChildren(".why-card");
  const features = [
    {
      id: 1,
      icon: "fas fa-heart",
      title: "Couple-First Approach",
      description:
        "Most programs address only one partner. We assess, plan, and guide both together — from the very first session. Fertility is a shared journey.",
      featured: false,
    },
    {
      id: 2,
      icon: "fas fa-magnifying-glass-chart",
      title: "Root-Cause + Routine-Based",
      description:
        "We look at the full picture — hormones, lifestyle, nutrition, stress, sleep, environment. Then we build a real plan around your specific situation.",
      featured: true,
    },
    {
      id: 3,
      icon: "fas fa-laptop-medical",
      title: "Online, Private, Structured",
      description:
        "Consult from home — together. No clinical waiting rooms. Fully confidential. Structured guidance with clear, actionable outcomes every time.",
      featured: false,
    },
  ];

  return (
    <section className="why-section section-pad" id="why-us">
      <div className="container">
        <div className="why-header">
          <div className="section-pill">Our Difference</div>
          <h2 className="section-title">Why Heal360 Wellness</h2>
          <p className="section-sub">
            Not another clinic. Not another protocol. A structured support
            system built for real couples.
          </p>
        </div>

        <div className="why-grid" ref={gridRef}>
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`why-card ${feature.featured ? "why-card-featured" : ""}`}
            >
              <div className="why-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.description }}></p>
            </div>
          ))}
        </div>

        {/* Founder Block */}
        <div className="founder-block">
          <div className="founder-avatar-wrap">
            <img
              src={drTaheraImage}
              alt="Dr. Tahera Khaledi - Founder of Heal360 Wellness"
              className="founder-avatar-image"
            />
            <div className="founder-avatar-ring"></div>
          </div>
          <div className="founder-text">
            <h4>Dr. Tahera Khaledi</h4>
            <p className="founder-title">
              Founder, Heal360 Wellness &nbsp;·&nbsp; Holistic Fertility
              Specialist
            </p>
            <p className="founder-bio">
              Based in Hyderabad, India. Helping couples across India, UAE, UK
              and beyond build structured, natural fertility support plans since
              2018. Featured in leading wellness publications and podcasts
              across South Asia and the Gulf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHeal360;
