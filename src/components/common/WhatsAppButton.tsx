import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
    phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
        window.open(url, '_blank');
    };

    return (
        <button className="whatsapp-button" onClick={handleClick} aria-label="Contact on WhatsApp">
            <FaWhatsapp size={28} />
        </button>
    );
};

export default WhatsAppButton;
