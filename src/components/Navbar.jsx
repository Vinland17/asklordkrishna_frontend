import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}

      {/* Right side auth buttons */}
      <div className="auth-buttons">
        <Link to="/login" className={`auth-btn ${pathname === '/login' ? 'active' : ''}`}>
          Login
        </Link>
        <Link to="/register" className={`auth-btn ${pathname === '/register' ? 'active' : ''}`}>
          Register
        </Link>
      </div>
    </nav>
  );
}
