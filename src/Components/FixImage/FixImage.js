import React from 'react';
import "./FixImage.css";

function FixImage({ image, children, height, className }) {
    return (
        <div className={`fix_image_container ${className}`} style={{ backgroundImage: `url(${image})`, height: `${height}rem` }}>
            {children}
        </div>
    )
}

export default FixImage;
