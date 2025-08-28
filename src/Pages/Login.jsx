import React from "react";


const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #007a99, #004d66)",
      }}
    >
      <div
  className="p-4 shadow-lg rounded"
  style={{
    width: "450px",   // ⬅️ Increased width here
    background: "#fff",
  }}
>

        {/* Logo */}
        <div className="text-center mb-3">
          <div
            style={{
              background: "#fff",
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "30px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: 0, fontWeight: "bold", color: "#000" }}>
              HRIFY
            </h3>
          </div>
        </div>

        {/* Candidate Login Heading */}
        <h5
          className="text-center mb-3"
          style={{
            color: "#0096b2",
            fontWeight: "bold",
            borderBottom: "3px solid #0096b2",
            display: "inline-block",
            paddingBottom: "4px",
          }}
        >
          Candidate Login
        </h5>

        {/* Sign In Section */}
        <h6 className="fw-bold">Sign in</h6>
        <p style={{ fontSize: "0.9rem" }}>
          Don’t have an Account?{" "}
          <a href="#" style={{ color: "#0096b2", fontWeight: "500" }}>
            Sign up
          </a>
        </p>

        {/* Email Input */}
        <div className="mb-3">
          <label style={{ fontWeight: "600", color: "#0096b2" }}>
            Email or User Name
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Enter email or username"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label style={{ fontWeight: "600", color: "#0096b2" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control shadow-sm"
            placeholder="Enter password"
          />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div>
              <input type="checkbox" id="remember" />{" "}
              <label htmlFor="remember" style={{ fontSize: "0.9rem" }}>
                Remember Me
              </label>
            </div>
            <a href="#" style={{ fontSize: "0.9rem", color: "#0096b2" }}>
              Forget Password
            </a>
          </div>
        </div>

        {/* Sign In Button */}
        <div className="d-grid mb-3">
          <button
            className="btn"
            style={{
              background: "#0096b2",
              color: "white",
              fontWeight: "600",
              borderRadius: "20px",
            }}
          >
            Sign in
          </button>
        </div>

        {/* Divider */}
        <div className="d-flex align-items-center mb-3">
          <hr className="flex-grow-1" />
          <span className="mx-2" style={{ fontSize: "0.9rem" }}>
            Or Sign in With
          </span>
          <hr className="flex-grow-1" />
        </div>

        {/* Social Logins */}
        <div className="d-flex justify-content-around">
          <button className="btn btn-light border shadow-sm">
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="google"
              className="me-1"
            />
            Google
          </button>
          <button className="btn btn-light border shadow-sm">
            <img
              src="https://img.icons8.com/fluency/20/linkedin.png"
              alt="linkedin"
              className="me-1"
            />
            LinkedIn
          </button>
          <button className="btn btn-light border shadow-sm">
            <img
              src="https://img.icons8.com/color/20/microsoft.png"
              alt="office"
              className="me-1"
            />
            Office 365
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
