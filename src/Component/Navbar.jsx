import React from "react";
import { FaSearch } from "react-icons/fa";
import hrifyLogo from "../assets/logo/Hrify-logo.png"; // adjust path
import Navbg from "../assets/logo/Nav-back.png"; // adjust path

const Navbar = () => (
  <div style={{ width: "100%" }}>
    {/* Header with logo */}
    <header style={{ background: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
  <div
    className="container-fluid"
    style={{
  maxWidth: "100%",
  margin: "0",
  padding: "16px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft:"0px",
  paddingLeft:"20px"
}}

  >
    <img
      src={hrifyLogo}
      alt="HRIFY Logo"
      style={{ height: "56px", objectFit: "contain" }} // Increased logo height here
    />
  </div>
</header>


    {/* Background banner */}
    <div className="container-fluid"
      style={{
        width: "100%",
        backgroundImage: `url(${Navbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "16px 0 20px 0",
        minHeight: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:"50px"
      }}
    >
      {/* Search Filters */}
      <div
        className="container-fluid"
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="d-flex flex-wrap align-items-center"
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            padding: "10px 22px",
            gap: "16px",
            minHeight: "56px",
            width: "100%",
          }}
        >
          {/* Job Title */}
          <input
            type="text"
            placeholder="Job Title,Keyword"
            style={{
              flex: "1 1 160px",
              minWidth: "130px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          />

          {/* Country */}
          <select
            style={{
              flex: "1 1 140px",
              minWidth: "130px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          >
            <option>Select Country</option>
            <option>Argentina</option>
<option>Brazil</option>
<option>Canada</option>
<option>India</option>
<option>United States</option>

          </select>

          {/* State */}
          <select
            style={{
              flex: "1 1 140px",
              minWidth: "130px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          >
            <option>Select State</option>
          </select>

          {/* City */}
          <input
            type="text"
            placeholder="City"
            style={{
              flex: "1 1 110px",
              minWidth: "120px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          />

          {/* All */}
          <select
            style={{
              flex: "1 1 80px",
              minWidth: "80px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          >
            <option>All</option>
      <option>Accounting</option>
      <option>Advertising</option>
      <option>Agriculture</option>
      <option>Airline</option>
      <option>Automative</option>
      <option>Banking</option>
      <option>Biotechnology</option>
      <option>Board casting</option>
      <option>Building Material</option>
      <option>Chemical</option>
      <option>Computer Hardware</option>
      <option>Computer Software</option>
      <option>Construction</option>
      <option>Consulting</option>
      <option>Consumer Product</option>
      <option>Credit loan</option>
      <option>Defence</option>
      <option>Education</option>
      <option>Electronics</option>
          </select>

          {/* Status */}
          <select
            style={{
              flex: "1 1 100px",
              minWidth: "80px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          >
            <option>Status</option>
          </select>

          {/* Search Button */}
          
        </div>
      </div>
      <div>
        <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "#0096b2",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.08rem",
              border: "none",
              borderRadius: "6px",
              padding: "8px 30px",
              minWidth: "120px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
              marginTop:"20px"
            }}
          >
            <FaSearch /> Search
          </button>
        </div>
    </div>
  </div>
);

export default Navbar;
