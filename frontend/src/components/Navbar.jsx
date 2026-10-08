import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    const [showMenu, setShowMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");

        navigate("/");
        window.location.reload();

    };

    return (

        <nav className="navbar">

            <div className="logo">

                <Link to="/">
                    Code<span>Rivix</span>
                </Link>

            </div>

            <div
                className="hamburger"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-right ${mobileMenu ? "active" : ""}`}>

                <li>

    <Link to="/" onClick={() => setMobileMenu(false)}>
        Home
    </Link>

</li>

                <li>
                    <a href="#topics" onClick={() => setMobileMenu(false)}>Topics</a>
                </li>

                <li className="disabled-link">
                    Company Wise
                    <span className="coming-soon">
                        Coming Soon
                    </span>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMobileMenu(false)}>
                        Contact
                    </a>
                </li>

                {!token ? (

                    <>

                        <li>
                            <Link to="/login" onClick={() => setMobileMenu(false)}>
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/register"
                                className="register-nav-btn"
                                onClick={() => setMobileMenu(false)}
                            >
                                Register
                            </Link>
                        </li>

                    </>

                ) : (

                    <li className="profile-container">

                        <button
                            className="profile-btn"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            👤
                        </button>

                        {showMenu && (

                            <div className="profile-dropdown">

                                <h4>{name || "User"}</h4>

                                <p>{email}</p>

                                <hr />

                                <Link
                                    to="/my-account"
                                    onClick={() => {
                                        setShowMenu(false);
                                        setMobileMenu(false);
                                    }}
                                >
                                    My Account
                                </Link>

                                <button
                                    className="logout-menu-btn"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>

                            </div>

                        )}

                    </li>

                )}

            </ul>

        </nav>

    );

}

export default Navbar;