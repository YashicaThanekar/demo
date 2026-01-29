import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Navbar = () => {
  return (
    <nav className="navbar-style">
      <div className="navbar-content">
        <img
          src="/assets/apsit.png"
          alt="College Logo"
          className="navbar-logo"
        />
        <div className="navbar-text">
          <h1>
            Parshvanath Charitable Trust's A. P. Shah Institute of Technology
          </h1>
          <h5>
            (Religious Jain Minority Institute, Affiliated to University of
            Mumbai, Approved by AICTE Delhi & DTE)
          </h5>
        </div>
      </div>
    </nav>
  );
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="login-wrapper">
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <h3>
              <i class="fa-solid fa-user"></i> Login
            </h3>

            <div className="input-group">
              <label>
                <i className="fa-solid fa-user-graduate"></i> Moodle ID
              </label>
              <input type="number" placeholder="Enter Moodle ID" required />
            </div>

            <div className="input-group">
              <label>
                <i className="fa-solid fa-lock"></i> Password
              </label>
              <input type="password" placeholder="Password" required />
            </div>

            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
