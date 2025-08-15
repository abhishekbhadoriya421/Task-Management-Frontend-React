import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const HoverLink = ({ to, children, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    const linkStyle = {
        color: isHovered ? '#4680d6ff' : '#1f1f1fff',
        transition: 'color 0.3s ease-in-out',
        cursor: 'pointer',
        textDecoration: 'none',
    };
    return (<Link
        style={linkStyle}
        to={to}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >{children}</Link>
    )
}

export default HoverLink;