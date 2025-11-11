import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import StudentLogin from "./components/StudentLogin";
import DriverLogin from "./components/DriverLogin";
import UserBooking from "./components/UserBooking";
import DriverRegister from "./components/DriverRegister";
import StudentRegister from "./components/StudentRegister";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/driver-login" element={<DriverLogin />} />
          <Route path="/user-booking" element={<UserBooking />} />
          <Route path="/driver-register" element={<DriverRegister />} />
          <Route path="/student-register" element={<StudentRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
