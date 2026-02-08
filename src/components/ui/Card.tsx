import React from 'react';
import Icon from './Icon';
import './Card.css';

interface CardProps {
    icon?: string;
    title: string;
    description: string;
    link?: string;
    variant?: 'default' | 'hover-lift';
    className?: string;
}

const Card: React.FC<CardProps> = ({
    icon,
    title,
    description,
    link,
    variant = 'hover-lift',
    className = '',
}) => {
    const CardContent = (
        <>
            {icon && (
                <div className="card-icon">
                    <Icon name={icon} size={40} color="var(--primary-blue)" />
                </div>
            )}
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            {link && (
                <div className="card-link">
                    <span>Explore</span>
                    <Icon name="arrow" size={16} color="var(--primary-blue)" />
                </div>
            )}
        </>
    );

    if (link) {
        return (
            <a href={link} className={`card ${variant} ${className}`}>
                {CardContent}
            </a>
        );
    }

    return <div className={`card ${variant} ${className}`}>{CardContent}</div>;
};

export default Card;
