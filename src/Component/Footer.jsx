import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import hrifyLogo from "../assets/logo/Hrify-logo.png";

const Footer = () => (
  <footer
    style={{
      background: "#1b1412",
      color: "#ececec",
      paddingTop: 40,
      width: "100%",
    }}
  >
    <div
      className="container-fluid px-3"
      style={{
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        width: "100%",
      }}
    >
      <div className="row justify-content-between align-items-start">
        {/* Column 1 */}
        <div className="col-12 col-md-2 mb-4">
          <div
            style={{
              fontWeight: 600,
              fontSize: "1.17rem",
              marginBottom: 12,
            }}
          >
            Tailored Job Matches
          </div>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.7, margin: 0, color: "gray" }}>
            {["Home", "About Us", "Jobs", "Categories", "Blogs", "Contact Us"].map((text) => (
              <li key={text} style={{ marginBottom: 8 }}>
                <a
                  href="#"
                  style={{ color: "#e5e7eb", textDecoration: "none", fontSize: "1rem", display: "inline-block" }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-md-2 mb-4">
          <div
            style={{
              fontWeight: 600,
              fontSize: "1.17rem",
              marginBottom: 12,
            }}
          >
            Job Seeker Section
          </div>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.7, margin: 0, color: "gray" }}>
            {["Browse Jobs", "Upload Resume", "Job Alerts", "Career Tips"].map((text) => (
              <li key={text} style={{ marginBottom: 8 }}>
                <a
                  href="#"
                  style={{ color: "#e5e7eb", textDecoration: "none", fontSize: "1rem", display: "inline-block" }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-md-2 mb-4">
          <div
            style={{
              fontWeight: 600,
              fontSize: "1.17rem",
              marginBottom: 12,
            }}
          >
            Employer Section
          </div>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.7, margin: 0, color: "gray" }}>
            {["Post a Job", "Manage Jobs", "Employer Dashboard", "Pricing & Plans"].map((text) => (
              <li key={text} style={{ marginBottom: 8 }}>
                <a
                  href="#"
                  style={{ color: "#e5e7eb", textDecoration: "none", fontSize: "1rem", display: "inline-block" }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-12 col-md-2 mb-4">
          <div
            style={{
              fontWeight: 600,
              fontSize: "1.17rem",
              marginBottom: 12,
            }}
          >
            Support & Resources
          </div>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.7, margin: 0, color: "gray" }}>
            {["FAQs", "Help Center", "Privacy Policy", "Terms & Conditions"].map((text) => (
              <li key={text} style={{ marginBottom: 8 }}>
                <a
                  href="#"
                  style={{ color: "#e5e7eb", textDecoration: "none", fontSize: "1rem", display: "inline-block" }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Logo & Social */}
        <div className="col-12 col-md-3 mb-4 text-center text-md-end">
          <div className="d-flex justify-content-center mb-3">
            <img
              src={hrifyLogo}
              alt="HRIFY Logo"
              style={{ width: "40%", borderRadius: 7, background: "#fff" }}
              className="img-fluid"
            />
          </div>

          <div
  style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: 8 }}
  className="justify-content-md"
>
  <a href="#"><FaLinkedin color="#0091c7" size={28} /></a>
  <a href="#"><FaInstagram color="#e5486b" size={28} /></a>
  <a href="#"><FaTwitter color="#0091c7" size={28} /></a>
  <a href="#"><FaFacebook color="#0091c7" size={28} /></a>
  <a href="#"><FaYoutube color="#e5486b" size={28} /></a>
</div>

        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div style={{ textAlign: "left", fontSize: 14, color: "#ccc", marginTop: 24, marginBottom: 8 }}>
            © 2025 HRIFY Jobs. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
