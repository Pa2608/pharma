import React from 'react';
import { FaFlask, FaVial, FaPills, FaShieldAlt, FaAward, FaTruck, FaDollarSign, FaClock, FaCheck, FaArrowRight } from 'react-icons/fa';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
}

const iconMap: { [key: string]: React.ComponentType<{ size?: number; color?: string }> } = {
    flask: FaFlask,
    beaker: FaVial,
    pill: FaPills,
    shield: FaShieldAlt,
    award: FaAward,
    truck: FaTruck,
    dollar: FaDollarSign,
    clock: FaClock,
    check: FaCheck,
    arrow: FaArrowRight,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color, className = '' }) => {
    const IconComponent = iconMap[name] || FaCheck;

    return (
        <span className={className}>
            <IconComponent size={size} color={color} />
        </span>
    );
};

export default Icon;
