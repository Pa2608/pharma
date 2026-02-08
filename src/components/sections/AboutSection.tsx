import React from 'react';
import Icon from '../ui/Icon';
import type { Feature } from '../../types';
import './AboutSection.css';

interface AboutSectionProps {
    image: string;
    title: string;
    description: string;
    features: Feature[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
    image,
    title,
    description,
    features,
}) => {
    return (
        <section className="about-section section">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="about-text">
                        <span className="about-label">WHO WE ARE</span>
                        <h2 className="about-title">{title}</h2>
                        <p className="about-description">{description}</p>
                        <ul className="about-features">
                            {features.map((feature, index) => (
                                <li key={index} className="about-feature-item">
                                    <Icon name={feature.icon} size={20} color="var(--primary-blue)" />
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
