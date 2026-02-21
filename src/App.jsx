import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import WhoIsThisFor from "./components/WhoIsThisFor";
import HowItWorks from "./components/HowItWorks";
import WhyHeal360 from "./components/WhyHeal360";
import DontWaitBand from "./components/DontWaitBand";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import { initUTMPersistence, trackPageView } from "./utils/tracking";

function App() {
  const [stickyVisible, setStickyVisible] = useState(false);

  // Initialize tracking on mount
  useEffect(() => {
    initUTMPersistence();
    trackPageView();
  }, []);

  // Handle sticky CTA visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Hero />
      <WhoIsThisFor />
      <HowItWorks />
      <WhyHeal360 />
      <DontWaitBand />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyCTA visible={stickyVisible} />
    </div>
  );
}

export default App;
