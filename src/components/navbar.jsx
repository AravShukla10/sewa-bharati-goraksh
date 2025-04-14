import React from "react";
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
