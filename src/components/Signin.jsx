// Signin.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Signin.css'; // Import the new CSS file

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    async function handleSignIn(e) {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard/');
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    }

    return (
        <div className="containerForm">
            <div className="signin-section">
                <header className="app-header">
                    <h1>Sign In</h1>
                </header>
                <div className="card">
                    <h2>Sign In to Your Account</h2>
                    <form onSubmit={handleSignIn}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-primary">Sign In</button>
                    </form>
                    <div className="signchange">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                    <div className="signchange">
                        Test Account<br /> sagarsoni@gmail.com<br /> pass: sagarsoni.gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}
