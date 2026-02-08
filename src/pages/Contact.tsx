import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import { COMPANY_INFO } from '../utils/constants';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        productCategory: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="contact-page">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="contact-hero">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <p>Get in Touch for Product Inquiries & Quotations. Our experts are ready to assist with your pharmaceutical raw material needs.</p>
                    </div>
                </section>

                {/* Contact Info & Map */}
                <section className="contact-info-section section">
                    <div className="container">
                        <div className="contact-layout">
                            {/* Global Presence */}
                            <div className="global-presence">
                                <h2>Our Global Presence</h2>

                                <div className="contact-info-grid">
                                    <div className="contact-info-card">
                                        <div className="contact-icon">
                                            <Icon name="check" size={24} color="var(--primary-blue)" />
                                        </div>
                                        <h4>Office Address</h4>
                                        <p>Plot No. 456, Phase Gate,<br />Industrial Area, Pharmaceutical<br />Zone, India</p>
                                    </div>

                                    <div className="contact-info-card">
                                        <div className="contact-icon">
                                            <Icon name="clock" size={24} color="var(--primary-blue)" />
                                        </div>
                                        <h4>Business Hours</h4>
                                        <p>Monday - Friday<br />9:00 AM - 6:00 PM IST<br />Saturday: 9:00 AM - 2:00 PM</p>
                                    </div>

                                    <div className="contact-info-card">
                                        <div className="contact-icon">
                                            <Icon name="check" size={24} color="var(--primary-blue)" />
                                        </div>
                                        <h4>Direct Contact</h4>
                                        <p>+91 12 3456 7890<br />+91 98765 43210</p>
                                    </div>

                                    <div className="contact-info-card">
                                        <div className="contact-icon">
                                            <Icon name="check" size={24} color="var(--primary-blue)" />
                                        </div>
                                        <h4>Email Us</h4>
                                        <p>info@saptampharma.com<br />sales@saptampharma.com<br />support@saptampharma.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="map-container">
                                <div className="map-placeholder">
                                    <div className="map-marker">
                                        <div className="marker-icon">
                                            <Icon name="check" size={32} color="var(--primary-blue)" />
                                        </div>
                                        <div className="marker-info">
                                            <h4>Saptam Pharmachem</h4>
                                            <p>Industrial Area, Pharmaceutical Zone</p>
                                        </div>
                                    </div>
                                    <div className="map-overlay">
                                        <img src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.5946,12.9716,10,0/600x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" alt="Map" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inquiry Form */}
                <section className="inquiry-form-section section">
                    <div className="container">
                        <div className="form-wrapper">
                            <h2>Send a Business Inquiry</h2>
                            <p className="form-subtitle">Complete the form below and our pharmaceutical experts will get back to you within 24 hours with competitive pricing.</p>

                            <form onSubmit={handleSubmit} className="inquiry-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="e.g., John Doe"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="companyName">Company Name</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            placeholder="e.g., Pharma Industries Ltd."
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="e.g., john@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="e.g., +1 (555) 123-4567"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="productCategory">Product Category</label>
                                    <select
                                        id="productCategory"
                                        name="productCategory"
                                        value={formData.productCategory}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a category</option>
                                        <option value="apis">Active APIs</option>
                                        <option value="chemicals">Industrial Chemicals</option>
                                        <option value="vitamins">Vitamins</option>
                                        <option value="excipients">Excipients</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Detailed Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="submit-btn">
                                    Submit Inquiry →
                                </Button>

                                <div className="form-footer">
                                    <div className="privacy-note">
                                        <Icon name="shield" size={16} color="var(--green-accent)" />
                                        <span>Your information is kept confidential</span>
                                    </div>
                                    <button type="button" className="whatsapp-inquiry-btn">
                                        <Icon name="check" size={16} color="var(--white)" />
                                        WhatsApp Inquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="contact-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Looking for Reliable Pharmaceutical Raw Materials?</h2>
                            <p>Our global network ensures best prices for APIs and excipients.</p>
                            <Button variant="secondary" size="lg">Request Custom Quote</Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton phoneNumber={COMPANY_INFO.phone} />
        </div>
    );
};

export default Contact;
