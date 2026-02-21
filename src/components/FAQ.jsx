/* ============================================================
   FAQ COMPONENT
   Section displaying frequently asked questions with accordion
   ============================================================ */
import { useState } from "react";
import { trackEvent } from "../utils/tracking";
import { useScrollRevealChildren } from "../hooks/useScrollReveal";

const FAQ = () => {
  const listRef = useScrollRevealChildren(".faq-item");
  const [openIndex, setOpenIndex] = useState(null);

  const handleBookingClick = () => {
    trackEvent("CTA_Click_BookAppointment", "faq");
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "Is this for couples trying after 35 or 40?",
      answer:
        "Yes. A significant portion of our consultations are with couples where one or both partners are in their late 30s or 40s. The approach is adapted to age-related factors — we address realistic timelines and next steps without dismissing natural options.",
    },
    {
      id: 2,
      question: "What if IVF didn't work for us?",
      answer:
        "Many couples come to us after one or more IVF cycles. We look at root-cause factors that may not have been addressed — lifestyle, nutrition, stress, hormonal balance. We complement and support your medical journey, not replace it.",
    },
    {
      id: 3,
      question: "Is this for both husband and wife?",
      answer:
        "Both partners. This is a couple-first consultation. Fertility is a shared journey — both partners join the session and the plan covers both of you, including any male factor concerns.",
    },
    {
      id: 4,
      question: "Is the consultation fully online?",
      answer:
        "Yes — via Google Meet. Secure, private, accessible from anywhere. No travel. Most couples join from home, which often makes the conversation more open and comfortable.",
    },
    {
      id: 5,
      question: "What happens after I book?",
      answer:
        "You'll receive a confirmation with the Google Meet link and a short pre-consultation form. This helps us understand your situation in advance so the session time is used effectively.",
    },
    {
      id: 6,
      question: "Is the booking amount refundable?",
      answer:
        "Yes. The booking amount is fully refundable if you attend the scheduled appointment, as per our policy. Rescheduling is also available within the allowed window. Details are shared at time of booking.",
    },
    {
      id: 7,
      question: "Is this private and confidential?",
      answer:
        "Completely. All consultations are strictly private. Your personal information and health details are never shared. We understand this is a sensitive area of your life — every conversation is handled with care and discretion.",
    },
  ];

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="container faq-container">
        <div className="faq-header">
          <div className="section-pill">FAQs</div>
          <h2 className="section-title">Your Questions, Answered</h2>
        </div>

        <div className="faq-list" ref={listRef}>
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-q"
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <i className="fas fa-plus faq-icon"></i>
              </button>
              <div className="faq-a" hidden={openIndex !== index}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <a
            href="https://pages.razorpay.com/rev199"
            className="cta-btn cta-primary"
            onClick={() => handleBookingClick()}
          >
            <span className="cta-btn-text">Book Your Consultation</span>
            <span className="cta-btn-arrow">
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
