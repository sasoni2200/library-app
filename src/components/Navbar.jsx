import React, { useState, useEffect, useRef } from 'react';
import { signOut, getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure your styles are in this file

export const Navbar = () => {
    const auth = getAuth();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // Ref to store the menu element
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
            setIsOpen(false);
        }
    };

    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleSignOutAndCloseMenu = () => {
        handleSignOut();
        handleMenuItemClick();
    };
    async function handleSignOut() {
        try {
            await signOut(auth);
            navigate('/signin'); // Redirect to signin page
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }

    return (
        <nav className="main-nav" >
            <div className="nav-container">
                <div className="logo-section">
                <Link to="/">
                        <img src="./my-logo.svg" alt="Logo" className="logo-img" />
                    </Link>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <img className="menu-icon" src="./ham.png" alt="Menu" /> 
                </button>
                <ul ref={menuRef} className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
                    <li><Link to="/dashboard/issued" className="nav-item" onClick={handleMenuItemClick}>Issued Books</Link></li>
                    <li><Link to="/dashboard/users" className="nav-item" onClick={handleMenuItemClick}>Users</Link></li>
                    <li><Link to="/dashboard/books" className="nav-item" onClick={handleMenuItemClick}>Books</Link></li>
                    <div className="navButtons">
                        <li><Link to="/"><button className="action-button" onClick={handleMenuItemClick}>Issue Book</button></Link></li>
                        <li><button className='signout' onClick={handleSignOutAndCloseMenu}>Sign Out</button></li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
