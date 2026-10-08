import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
} from "react-icons/fa";

import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await api.post("/auth/signin", {

        email,
        password,

      });

      localStorage.setItem("token", response.data.token);
localStorage.setItem("name", response.data.name);
localStorage.setItem("email", response.data.email);

console.log(response.data);

console.log("Saved Name:", response.data.name);

console.log("LocalStorage Name:", localStorage.getItem("name"));

alert(response.data.message);

navigate("/");

    }

    catch (error) {

      if (error.response) {

        alert(error.response.data.message || "Login failed");

      }

      else {

        alert("Server not reachable.");

      }

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        {/* Logo */}

        <div className="login-logo">

          <h1>

            <span className="logo-symbol">&lt;/&gt;</span>

            <span className="logo-text">

              Code<span>Rivix</span>

            </span>

          </h1>

        </div>

        <h2 className="login-title">
          Welcome Back
        </h2>

        <p className="login-subtitle">
          Sign in to continue your DSA journey
        </p>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          {/* Email */}

          <div className="login-group">

            <label>Email</label>

            <div className="login-input">

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

          <div className="login-group">

            <label>Password</label>

            <div className="login-input">

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

          {/* Login Button */}

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >

            <FaSignInAlt />

            <span>

              {loading ? "Signing In..." : "Login"}

            </span>

          </button>

          <div className="login-footer">

            <p>

              Don't have an account?{" "}

              <Link to="/register">

                Register

              </Link>

            </p>

          </div>

        </form>

      </div>

    </div>

  );

}

export default Login;