/* ============================================================
   DON'T WAIT BAND COMPONENT
   Urgency banner with call-to-action
   ============================================================ */
import { trackEvent } from "../utils/tracking";

const DontWaitBand = () => {
  const handleBookingClick = () => {
    trackEvent("CTA_Click_BookAppointment", "dont-wait");
  };

  return (
    <section className="dont-wait-band">
      <div className="container">
        <div className="dont-wait-inner">
          <div className="dont-wait-copy">
            <h2>
              Don't wait any longer
              <br />
              to start your family.
            </h2>
            <p>
              Every month of uncertainty is a month you could be moving forward.
              Get a clear plan — for both of you — and stop guessing.
            </p>
          </div>
          <div className="dont-wait-cta">
            <a
              href="https://pages.razorpay.com/rev199"
              className="cta-btn cta-light"
              onClick={() => handleBookingClick()}
            >
              <span className="cta-btn-text">Book Your Consultation</span>
              <span className="cta-btn-arrow">
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
            <p className="dont-wait-reassure">
              <i className="fas fa-shield-check"></i> Fully refundable
              &nbsp;·&nbsp; <i className="fas fa-lock"></i> 100% private
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DontWaitBand;
