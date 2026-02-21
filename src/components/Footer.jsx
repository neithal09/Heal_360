/* ============================================================
   FOOTER COMPONENT
   Site footer with links, contact info, and WhatsApp CTA
   ============================================================ */
import { trackEvent } from "../utils/tracking";

import logo from "../assets/logo.png";
const Footer = () => {
  const handleWhatsAppClick = () => {
    trackEvent("CTA_Click_WhatsApp", "footer");
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          {/* Brand Section */}
          <div className="footer-brand">
            <img src={logo} alt="Heal360 Wellness" className="brand-logo" />
            <p>
              Natural fertility support for couples.
              <br />
              Private. Structured. Online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a
                  href="#who-its-for"
                  onClick={(e) => handleSmoothScroll(e, "who-its-for")}
                >
                  Is This For You?
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleSmoothScroll(e, "how-it-works")}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleSmoothScroll(e, "why-us")}
                >
                  Why Heal360
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleSmoothScroll(e, "testimonials")}
                >
                  Stories
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleSmoothScroll(e, "faq")}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-links-col">
            <h5>Connect</h5>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/dr.tahera_khaledi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@drtaherasheal360"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="footer-wa-col">
            <h5>Still have questions?</h5>
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20a%20consultation.%20Please%20share%20next%20steps."
              className="wa-footer-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              <i className="fab fa-whatsapp"></i>
              <div>
                <strong>Talk to Us on WhatsApp</strong>
                <span>We usually respond within a few hours</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Heal360 Wellness by Dr. Tahera
            Khaledi. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            Results may vary. Content is for informational purposes only and
            does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
