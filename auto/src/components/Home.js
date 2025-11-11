import React from "react";
import BookRideSection from "./BookRideSection";
import TravelOptions from "./TravelOptions";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      {/* Top booking section */}
      <BookRideSection />

      {/* Travel options */}
      <TravelOptions />

      {/* --- Help Section --- */}
      <section id="help-section" className="container py-5">
        <h2 className="fw-bold text-center mb-4">Need Help?</h2>
        <p className="text-center text-muted mb-5">
          Find answers to common questions about booking, payment, and drivers.
        </p>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="fw-bold">How do I book an auto?</h5>
              <p className="text-muted small mb-0">
                You can book directly from the home page using the “Book Ride” section or choose your destination from the ride options below.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="fw-bold">Can I cancel my booking?</h5>
              <p className="text-muted small mb-0">
                Yes, you can cancel anytime before the driver arrives, directly from your booking confirmation page.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="fw-bold">How do I contact support?</h5>
              <p className="text-muted small mb-0">
                You can reach our support team via the Contact Us form below or by calling our helpline at +91-9876543210.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact-section" className="container py-5">
        <h2 className="fw-bold text-center mb-2">You can find us here</h2>
        <p className="text-center text-muted mb-5">
          Find help for your queries here:
        </p>

        <div className="row justify-content-center">
          {/* Left Form */}
          <div className="col-md-7 mb-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We’ve received your message.");
              }}
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Mobile Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">You are a *</label>
                <select className="form-select" required>
                  <option value="">Select</option>
                  <option value="student">Student</option>
                  <option value="driver">Driver</option>
                  <option value="visitor">Visitor</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Comment *</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter your comment"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#ffc107",
                  color: "#000",
                  fontSize: "1.1rem",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="col-md-5">
            <div className="ps-md-4">
              <h5 className="fw-bold mt-3">Registered Office Address:</h5>
              <p className="text-muted mb-4">
                NITA Auto Booking Service  
                NIT Agartala Campus, Jirania, Tripura – 799046
              </p>

              <h5 className="fw-bold">City Office:</h5>
              <p className="text-muted mb-4">
                Paradise Chowmuhani, Agartala  
                West Tripura – 799001
              </p>

              <h5 className="fw-bold">Corporate Office:</h5>
              <p className="text-muted">
                Innovation Hub, NIT Agartala, Tripura, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
