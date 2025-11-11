import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-2">
              <img
                src="/images/logo.png"
                alt="NITA Auto Logo"
                width="45"
                height="45"
                className="me-2 rounded-circle"
              />
              <h5 className="fw-bold mb-0">NITA Auto Booking</h5>
            </div>
            <p className="text-muted small">
              Your reliable campus auto booking service at NIT Agartala.  
              Book rides safely and quickly — single or sharing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled text-muted">
              <li>
                <button
                  className="btn btn-link text-light text-decoration-none p-0"
                  onClick={() => scrollToSection("help-section")}
                >
                  Help
                </button>
              </li>
              <li>
                <button
                  className="btn btn-link text-light text-decoration-none p-0"
                  onClick={() => scrollToSection("contact-section")}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="/login" className="text-light text-decoration-none">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Connect With Us</h6>
            <div className="d-flex gap-3 fs-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaTwitter />
              </a>
              <a href="mailto:support@nitaauto.in" className="text-light">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} NITA Auto Booking. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
