import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ Correct package

import {
  FaMapMarkerAlt,
  FaBuilding,
  FaMoneyBill,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const JobDetail = ({ job, onBack }) => {
  const [showForm, setShowForm] = useState(false);

  // ✅ EmailJS handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5s5roi",   // 🔹 Replace with EmailJS Service ID
        "template_vdet9mf",  // 🔹 Replace with EmailJS Template ID
        e.target,
        "c2EA2XVhBYR-m3ZYU"    // 🔹 Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Application sent successfully!");
          setShowForm(false);
        },
        (error) => {
          console.error(error.text);
          alert("Error sending application. Please try again.");
        }
      );
  };

  return (
    <>
      <div>
        <button
          onClick={onBack}
          className="btn btn-link text-decoration-none fw-semibold"
          style={{
            color: "#0096b2",
            fontSize: "1rem",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "gray", fontWeight: "bold" }}>{"<<"}</span>{" "}
          Back to All Jobs
        </button>
      </div>

      <div className="card shadow-lg p-4 m-2">
        <h2 style={{ color: "#0096b2" }} className="h4 fw-bold">
          {job.title}
        </h2>
        <p className="text-muted mb-1">
          <FaBuilding className="me-2" /> {job.company}
        </p>
        <p className="text-muted mb-1">
          <FaMapMarkerAlt className="me-2" /> {job.location}
        </p>
        <p className="fst-italic">{job.workMode}</p>

        <h5 className="mt-4 text-info fw-semibold">
          <FaMoneyBill className="me-2" /> Salary Range
        </h5>
        <p>{job.salaryRange}</p>

        <h5 className="mt-4 text-info fw-semibold">✨ Benefits</h5>
        <ul className="list-unstyled">
          {job.benefits.map((b, i) => (
            <li key={i}>✅ {b}</li>
          ))}
        </ul>

        <h5 className="mt-4 text-info fw-semibold">
          <FaLaptopCode className="me-2" /> Job Responsibilities
        </h5>
        <ul className="list-unstyled">
          {job.responsibilities.map((r, i) => (
            <li key={i}>📌 {r}</li>
          ))}
        </ul>

        <h5 className="mt-4 text-info fw-semibold">
          <FaGraduationCap className="me-2" /> Required Skills
        </h5>
        <ul className="list-unstyled">
          {job.requiredSkills.map((s, i) => (
            <li key={i}>🎯 {s}</li>
          ))}
        </ul>

        <div className="mt-4 d-flex gap-3">
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            Apply Now
          </button>
          <button
            className="btn btn-info text-white"
            style={{ backgroundColor: "#0096b2" }}
          >
            Easy Apply
          </button>
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1050,
          }}
        >
          <div
            className="bg-white rounded shadow-lg"
            style={{
              width: "650px",
              maxHeight: "90vh",
              overflowY: "auto",
              border: "2px solid #38bdf8",
            }}
          >
            {/* Header */}
            <div
              className="d-flex justify-content-between align-items-center p-3"
              style={{ background: "#38bdf8", color: "black" }}
            >
              <h5 className="m-0 fw-bold">Apply For Job</h5>
              <button
                className="btn-close"
                onClick={() => setShowForm(false)}
              ></button>
            </div>

            {/* ✅ Form with EmailJS */}
            <form className="row g-3 p-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label className="form-label fw-bold">First Name</label>
                <input type="text" name="firstName" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Middle Name</label>
                <input type="text" name="middleName" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Last Name</label>
                <input type="text" name="lastName" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Mobile No</label>
                <input type="text" name="mobile" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Work Authorization</label>
                <select name="workAuth" className="form-select" required>
                  <option value="">Select</option>
                  <option value="Citizen">Citizen</option>
                  <option value="Green Card">Green Card</option>
                  <option value="Work Visa">Work Visa</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Job Title</label>
                <input type="text" name="jobTitle" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Email</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Country</label>
                <input type="text" name="country" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Address</label>
                <input type="text" name="address" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">State</label>
                <input type="text" name="state" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">City</label>
                <input type="text" name="city" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Zipcode</label>
                <input type="text" name="zipcode" className="form-control" />
              </div>

              <div className="col-12">
    <label className="form-label fw-bold">Resume</label>
    <input type="file" className="form-control" style={{ border: "1px solid #38bdf8" }} />
  </div>

              <div className="col-12 d-flex align-items-center gap-3">
                <div>
                  <label className="form-label fw-bold">Verify Code</label>
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-bold text-primary" style={{ fontSize: "20px" }}>
                      082897
                    </span>
                    <input
                      type="text"
                      name="verifyCode"
                      className="form-control"
                      style={{ width: "200px" }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 text-center mt-3">
                <button
                  type="submit"
                  className="px-5 py-2 fw-bold"
                  style={{
                    background: "linear-gradient(to right, #00c6ff, #0072ff)",
                    border: "none",
                    borderRadius: "25px",
                    color: "white",
                    fontSize: "16px",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetail;
