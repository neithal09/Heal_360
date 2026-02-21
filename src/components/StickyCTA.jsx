/* ============================================================
   STICKY CTA COMPONENT
   Mobile bottom bar with booking and WhatsApp CTAs
   ============================================================ */
import { trackEvent } from "../utils/tracking";

const StickyCTA = ({ visible }) => {
  const handleBookingClick = () => {
    trackEvent("CTA_Click_BookAppointment", "sticky");
  };

  const handleWhatsAppClick = () => {
    trackEvent("CTA_Click_WhatsApp", "sticky");
  };

  return (
    <div
      className={`sticky-cta ${visible ? "visible" : ""}`}
      aria-label="Book appointment"
    >
      <a
        href="https://pages.razorpay.com/rev199"
        className="sticky-book"
        onClick={handleBookingClick}
      >
        <i className="fas fa-calendar-check"></i> Book Your Consultation
      </a>
      <a
        href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20a%20consultation."
        className="sticky-wa"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default StickyCTA;
