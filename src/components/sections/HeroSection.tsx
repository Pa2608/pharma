import React from 'react';
import Button from '../ui/Button';
import type { CTAButton } from '../../types';
import './HeroSection.css';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaButtons: CTAButton[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    backgroundImage,
    ctaButtons,
}) => {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-subtitle">{subtitle}</p>
                    <div className="hero-buttons">
                        {ctaButtons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant}
                                size="lg"
                                onClick={button.onClick}
                            >
                                {button.text}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
