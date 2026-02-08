import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { COMPANY_INFO } from '../../utils/constants';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Saptam Pharmachem</h3>
                        <p className="footer-description">
                            Your trusted partner for pharmaceutical raw materials. ISO 9001:2015, WHO-GMP & GMP Certified.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-section-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/quality">Quality</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-section-title">Products</h4>
                        <ul className="footer-links">
                            <li><Link to="/products/apis">Active APIs</Link></li>
                            <li><Link to="/products/chemicals">Industrial Chemicals</Link></li>
                            <li><Link to="/products/vitamins">Vitamins</Link></li>
                            <li><Link to="/products/excipients">Excipients</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-section-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>Phone: {COMPANY_INFO.phone}</li>
                            <li>Email: {COMPANY_INFO.email}</li>
                            <li>{COMPANY_INFO.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Saptam Pharmachem. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
