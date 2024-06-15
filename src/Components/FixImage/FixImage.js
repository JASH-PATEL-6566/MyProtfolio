import React from 'react';
import "./FixImage.css";

function FixImage({ image, children }) {
    return (
        <div className="fix_image_container" style={{ backgroundImage: `url(${image})` }}>
            {children}
        </div>
    )
}

export default FixImage;
