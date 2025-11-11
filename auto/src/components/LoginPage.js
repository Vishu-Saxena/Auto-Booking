import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="container text-center mt-5 mb-5">
      <h2 className="fw-bold mb-4">Login to Continue</h2>
      <p className="text-muted mb-5">
        Choose your role to access your dashboard
      </p>

      <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
        {/* Student Login Card */}
        <div className="card p-4 shadow" style={{ width: "250px" }}>
          <img
            src="/images/student-icon.png"
            alt="Student Login"
            width="80"
            className="mx-auto mb-3"
          />
          <h5 className="fw-bold">Student Login</h5>
          <p className="text-muted small">
            Login to book autos and view your bookings.
          </p>
          <Link to="/student-login" className="btn btn-primary w-100">
            Login as Student
          </Link>
        </div>

        {/* Driver Login Card */}
        <div className="card p-4 shadow" style={{ width: "250px" }}>
          <img
            src="/images/driver-icon.png"
            alt="Driver Login"
            width="80"
            className="mx-auto mb-3"
          />
          <h5 className="fw-bold">Driver Login</h5>
          <p className="text-muted small">
            Login to accept or view assigned rides.
          </p>
          <Link to="/driver-login" className="btn btn-success w-100">
            Login as Driver
          </Link>
        </div>
      </div>

      {/* Register Section */}
      <div className="mt-4">
        <h6 className="fw-semibold">New to NITA Auto Booking?</h6>
        <p className="text-muted small mb-3">
          Register now to get started as a student or driver.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/student-register" className="btn btn-outline-primary">
            Register as Student
          </Link>
          <Link to="/driver-register" className="btn btn-outline-success">
            Register as Driver
          </Link>
        </div>
      </div>
    </div>
  );
}
