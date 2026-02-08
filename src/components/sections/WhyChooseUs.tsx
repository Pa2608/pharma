import React from 'react';
import Card from '../ui/Card';
import type { WhyChooseFeature } from '../../types';
import './WhyChooseUs.css';

interface WhyChooseUsProps {
    features: WhyChooseFeature[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ features }) => {
    return (
        <section className="why-choose-us section">
            <div className="container">
                <h2 className="section-title">Why Choose Saptam Pharmachem?</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            variant="hover-lift"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
