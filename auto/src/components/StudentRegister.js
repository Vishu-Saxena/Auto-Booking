import React, { useState } from "react";

export default function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    department: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Student Registered!\nName: ${formData.name}\nRoll: ${formData.roll}\nDept: ${formData.department}`
    );
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="text-center mb-3">Student Registration 🎓</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="roll"
          className="form-control mb-2"
          placeholder="Roll Number"
          value={formData.roll}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          className="form-control mb-2"
          placeholder="Department (e.g., CSE, ECE)"
          value={formData.department}
          onChange={handleChange}
          required
        />

        <div className="mb-2">
          <label className="form-label fw-bold">Gender:</label>
          <select
            name="gender"
            className="form-select"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <input
          type="tel"
          name="phone"
          className="form-control mb-2"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          className="form-control mb-2"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
