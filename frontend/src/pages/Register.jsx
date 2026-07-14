import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/api";

import "../styles/register.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);

const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {

        setLoading(true);

        const response = await api.post("/auth/register", {
            name,
            email,
            password,
        });

        alert(response.data);

        navigate("/login");

    } catch (error) {

        if (error.response) {
            alert(error.response.data);
        } else {
            alert("Server not reachable.");
        }

    } finally {

        setLoading(false);

    }
};

  return (
    <div className="register-page">

      <div className="register-card">

        {/* Logo */}

        <div className="register-logo">
    <h1>
        <span className="logo-symbol">&lt;/&gt;</span>
        <span className="logo-text">
            Code<span>Rivix</span>
        </span>
    </h1>
</div>

        <h2>Create your account</h2>

        <p>
          Start your DSA journey with CodeRivix
        </p>

       <form className="register-form" onSubmit={handleRegister}>

  {/* Name */}

  <div className="register-group">

    <label>Name</label>

    <div className="register-input">

      <FaUser className="input-icon" />

      <input
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

    </div>

  </div>


  {/* Email */}

  <div className="register-group">

    <label>Email</label>

    <div className="register-input">

      <FaEnvelope className="input-icon" />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

    </div>

  </div>


  {/* Password */}

  <div className="register-group">

    <label>Password</label>

    <div className="register-input">

      <FaLock className="input-icon" />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

    </div>

  </div>


  {/* Confirm Password */}

  <div className="register-group">

    <label>Confirm Password</label>

    <div className="register-input">

      <FaLock className="input-icon" />

      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

    </div>

  </div>


  {/* Register Button */}

  <button
    type="submit"
    className="register-btn"
    disabled={loading}
  >
    <FaUserPlus />

    <span>
      {loading ? "Registering..." : "Register"}
    </span>

  </button>


  <div className="register-footer">

    <p>

      Already have an account?{" "}

      <Link to="/login">
        Login
      </Link>

    </p>

  </div>

</form>

      </div>

    </div>
  );
}

export default Register;