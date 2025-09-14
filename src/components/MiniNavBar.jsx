// src/components/MiniNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MiniNavbar.css";

const MiniNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mini-navbar">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div className="menu-box">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Resoluciones">Resoluciones</Link>
            </li>
            {/* <li>
              <Link to="/videos">Videos</Link>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MiniNavbar;
