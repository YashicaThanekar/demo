import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // prevents page refresh
    navigate("/home"); // redirect to Home.jsx
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <label>Moodle ID</label>
        <br></br>
        <input type="number" placeholder="Enter Moodle ID" required />
        <br />
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" placeholder="Password" required />
        <br />
        <br></br>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
