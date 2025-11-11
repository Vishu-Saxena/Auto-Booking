import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Left side: logo + name */}
        <div
          className="navbar-brand d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold fs-5 text-white">NITA Auto Booking</span>
        </div>

        {/* Right side links */}
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          <li className="nav-item me-3">
            <button
              className="btn btn-link nav-link text-light"
              onClick={() => scrollToSection("help-section")}
            >
              Help
            </button>
          </li>
          <li className="nav-item me-3">
            <button
              className="btn btn-link nav-link text-light"
              onClick={() => scrollToSection("contact-section")}
            >
              Contact Us
            </button>
          </li>
          <li className="nav-item">
            <a href="/login" className="btn btn-light text-dark fw-semibold">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
