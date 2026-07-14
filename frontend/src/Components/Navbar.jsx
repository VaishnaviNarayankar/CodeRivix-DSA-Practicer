import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");

        navigate("/");
        window.location.reload();

    };

    return (

        <nav className="navbar">

            {/* Logo */}

            <div className="logo">

                <Link to="/">
                    Code<span>Rivix</span>
                </Link>

            </div>

            {/* Navigation */}

            <ul className="nav-right">

                <li>

                    <a href="/">Home</a>

                </li>

                <li>

                    <a href="#topics">Topics</a>

                </li>

                <li className="disabled-link">

                    Company Wise

                    <span className="coming-soon">
                        Coming Soon
                    </span>

                </li>

                <li>

                    <a href="#contact">
                        Contact
                    </a>

                </li>

                {!token ? (

                    <>

                        <li>

                            <Link to="/login">

                                Login

                            </Link>

                        </li>

                        <li>

                            <Link
                                to="/register"
                                className="register-nav-btn"
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

                                <h4>

                                    {name || "User"}

                                </h4>

                                <p>

                                    {email}

                                </p>

                                <hr />

                                <Link to="/my-account">

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