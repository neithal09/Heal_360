/* ============================================================
   HEAL360 WELLNESS — REACT ENTRY POINT
   Main entry file for React application
   ============================================================ */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
