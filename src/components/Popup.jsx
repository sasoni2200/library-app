import React, { useEffect } from 'react';
import './Popup.css'; // Ensure this file contains the updated CSS

function Popup({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-close after 5 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [onClose]);

  return (
    <div className="popup-overlay show" onClick={onClose}>
      <div className="popup-content show" onClick={(e) => e.stopPropagation()}>
        {/* <button className="popup-close" aria-label="Close" onClick={onClose}>
          &times;
        </button> */}
        <h2>Congrats!</h2>
        <p>{message}</p>
        <button className="btn-primary" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Popup;
