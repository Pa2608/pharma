import React from 'react';
import Button from '../ui/Button';
import './CTASection.css';

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
    title,
    subtitle,
    buttonText,
    onButtonClick,
}) => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">{title}</h2>
                    <p className="cta-subtitle">{subtitle}</p>
                    <Button variant="secondary" size="lg" onClick={onButtonClick}>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
