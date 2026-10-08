import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/myAccount.css";

function MyAccount() {

    const [profile, setProfile] = useState(null);

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const response = await api.get("/user/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log(response.data);

                setProfile(response.data);

            } catch (error) {

                console.log(error);
                alert("Unable to load profile.");

            }

        };

        fetchProfile();

    }, [token]);

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("name");

        navigate("/");
        window.location.reload();

    };

    if (!profile) {

        return (
            <h2 style={{ textAlign: "center", marginTop: "40px" }}>
                Loading...
            </h2>
        );

    }

    return (

        <div className="profile-page">

            <div className="profile-card">

                <div className="profile-header">

                    <div className="profile-avatar">
                        {profile.name.charAt(0).toUpperCase()}
                    </div>

                    <h2>{profile.name}</h2>

                    <p>{profile.email}</p>

                </div>

                <div className="profile-content">

                    <h3>Personal Information</h3>

                    <div className="info-grid">

                        <div className="info-card">

                            <label>Full Name</label>

                            <span>{profile.name}</span>

                        </div>

                        <div className="info-card">

                            <label>Email Address</label>

                            <span>{profile.email}</span>

                        </div>

                    </div>

                    <h3>Coding Statistics</h3>

                    <div className="stats-grid">

                        <div className="stat-card">
                            <p>Easy Problems</p>
                            <h2>0</h2>
                        </div>

                        <div className="stat-card">
                            <p>Medium Problems</p>
                            <h2>0</h2>
                        </div>

                        <div className="stat-card">
                            <p>Hard Problems</p>
                            <h2>0</h2>
                        </div>

                        <div className="stat-card">
                            <p>Total Solved</p>
                            <h2>0</h2>
                        </div>

                        <div className="stat-card">
                            <p>Current Streak</p>
                            <h2>0 Days</h2>
                        </div>

                        <div className="stat-card">
                            <p>Recent Activity</p>
                            <h2>No Activity</h2>
                        </div>

                    </div>

                    <div className="profile-buttons">

                        <button className="edit-btn">
                            Edit Profile
                        </button>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default MyAccount;