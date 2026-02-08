import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Icon from '../components/ui/Icon';
import { COMPANY_INFO } from '../utils/constants';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <h1 className="about-hero-title">About Saptam Pharmachem</h1>
                        <p className="about-hero-subtitle">Committed to Quality, Reliability & Global Supply</p>
                    </div>
                </section>

                {/* Bridging the Gap Section */}
                <section className="bridging-gap section">
                    <div className="container">
                        <div className="bridging-content">
                            <div className="bridging-text">
                                <span className="section-label">WHO WE ARE</span>
                                <h2>Bridging the Gap Between Manufacturers & Global Healthcare</h2>
                                <p>
                                    Saptam Pharmachem is a leading global supplier of high-quality APIs, chemicals, vitamins, and excipients. We are built on the foundation of trust, transparency, and technical excellence in the pharmaceutical industry.
                                </p>
                                <p>
                                    With years of expertise, we have established a robust network that allows us to source the finest pharmaceutical raw materials from certified manufacturers worldwide. Our team of dedicated professionals helps clients navigate regulatory compliance, supply chain challenges, and changing market demands.
                                </p>
                            </div>
                            <div className="bridging-image">
                                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" alt="Pharmaceutical Manufacturing" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="vision-mission section">
                    <div className="container">
                        <div className="vm-grid">
                            <div className="vm-card">
                                <div className="vm-icon">
                                    <Icon name="award" size={32} color="var(--primary-blue)" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>To be a world-class global leader in pharmaceutical raw material supply, recognized for our commitment to quality and ability to exceed customer expectations with innovation and ethics.</p>
                            </div>
                            <div className="vm-card">
                                <div className="vm-icon">
                                    <Icon name="check" size={32} color="var(--primary-blue)" />
                                </div>
                                <h3>Our Mission</h3>
                                <p>To provide reliable, high-quality pharmaceutical raw materials through outstanding service, strategic partnerships, and unwavering commitment to global healthcare challenges.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="core-values section">
                    <div className="container">
                        <h2 className="section-title">Core Values</h2>
                        <p className="section-subtitle">The principles that guide everything we do</p>
                        <div className="values-grid">
                            <div className="value-card">
                                <div className="value-icon">
                                    <Icon name="shield" size={28} color="var(--primary-blue)" />
                                </div>
                                <h4>Quality First</h4>
                                <p>We never compromise on the quality and purity of our pharmaceutical products.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">
                                    <Icon name="check" size={28} color="var(--primary-blue)" />
                                </div>
                                <h4>Integrity</h4>
                                <p>Transparency and honesty in all our business dealings and relationships.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">
                                    <Icon name="award" size={28} color="var(--primary-blue)" />
                                </div>
                                <h4>Customer Commitment</h4>
                                <p>Dedicated to exceeding our customers' expectations with exceptional service.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">
                                    <Icon name="truck" size={28} color="var(--primary-blue)" />
                                </div>
                                <h4>Reliable Partnerships</h4>
                                <p>Building long-term relationships based on trust and mutual success.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Supply Chain */}
                <section className="supply-chain section">
                    <div className="container">
                        <div className="supply-content">
                            <div className="supply-image">
                                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" alt="Global Supply Chain" />
                            </div>
                            <div className="supply-text">
                                <span className="section-label">WORLDWIDE REACH</span>
                                <h2>Global Supply Chain Network</h2>
                                <p>
                                    Our extensive global network enables us to deliver pharmaceutical raw materials with strategic warehousing and a network of trusted logistics partners. We ensure timely deliveries for APIs and excipients to pharmaceutical manufacturers worldwide.
                                </p>
                                <ul className="supply-features">
                                    <li>
                                        <Icon name="check" size={20} color="var(--green-accent)" />
                                        <span>ISO-certified Global Supplier Management</span>
                                    </li>
                                    <li>
                                        <Icon name="check" size={20} color="var(--green-accent)" />
                                        <span>Temperature-Controlled Logistics</span>
                                    </li>
                                    <li>
                                        <Icon name="check" size={20} color="var(--green-accent)" />
                                        <span>Real-time Shipment Tracking</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="certifications section">
                    <div className="container">
                        <h2 className="section-title">Our Certifications</h2>
                        <div className="cert-grid">
                            <div className="cert-badge">
                                <div className="cert-circle">ISO</div>
                                <p>ISO 9001:2015</p>
                            </div>
                            <div className="cert-badge">
                                <div className="cert-circle">GMP</div>
                                <p>WHO-GMP</p>
                            </div>
                            <div className="cert-badge">
                                <div className="cert-circle">GMP</div>
                                <p>GMP Certified</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Trust Saptam */}
                <section className="why-trust section">
                    <div className="container">
                        <h2 className="section-title">Why Trust Saptam?</h2>
                        <div className="trust-grid">
                            <div className="trust-card">
                                <div className="trust-icon">
                                    <Icon name="award" size={32} color="var(--primary-blue)" />
                                </div>
                                <h4>Proven Excellence</h4>
                                <p>Decades of experience in pharmaceutical raw material supply with certified quality standards.</p>
                            </div>
                            <div className="trust-card">
                                <div className="trust-icon">
                                    <Icon name="shield" size={32} color="var(--primary-blue)" />
                                </div>
                                <h4>Quality Assurance</h4>
                                <p>Rigorous testing and quality control processes ensure pharmaceutical-grade materials.</p>
                            </div>
                            <div className="trust-card">
                                <div className="trust-icon">
                                    <Icon name="truck" size={32} color="var(--primary-blue)" />
                                </div>
                                <h4>Competitive Pricing</h4>
                                <p>Best market prices without compromising quality, backed by transparent pricing policies.</p>
                            </div>
                            <div className="trust-card">
                                <div className="trust-icon">
                                    <Icon name="clock" size={32} color="var(--primary-blue)" />
                                </div>
                                <h4>Regulatory Expertise</h4>
                                <p>Comprehensive support to navigate complex pharmaceutical regulations worldwide.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="about-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Partner With a Trusted Pharmaceutical Supplier</h2>
                            <p>Ready to elevate your supply chain with quality raw materials and dedicated support?</p>
                            <button className="btn btn-secondary btn-lg">Contact Us</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton phoneNumber={COMPANY_INFO.phone} />
        </div>
    );
};

export default About;
