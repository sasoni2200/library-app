// src/components/Signup.jsx
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Ensure you import Link for navigation
import './Signup.css'; // Import the CSS file

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up successfully");
        } catch (error) {
            console.error("Error signing up: ", error);
        }
    };

    return (
        <div className="containerForm">
            <div className="signin-section">
                <header className="app-header">
                    <h1>Sign Up</h1>
                </header>
                <div className="card">
                    <h2>Create Your Account</h2>
                    <form onSubmit={handleSignUp}>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <button className="btn-primary" type="submit">Sign Up</button>
                    </form>
                    <div className="signchange">
                        Already have an account? <Link to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup; // Default export
