import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import Button from '../ui/Button';
import './Header.css';

interface HeaderProps {
    transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`header ${transparent ? 'header-transparent' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">Saptam Pharmachem</span>
                    </Link>

                    <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <Button variant="primary" size="md" onClick={() => { }}>
                            Request Quote
                        </Button>
                    </div>

                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
