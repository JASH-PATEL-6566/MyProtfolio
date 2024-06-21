import React from 'react';
import "./AnchorButton.css";

function AButton({ to, content, className }) {
    return (
        <a href={to} className={`buttonCode small_avg_fonts ${className}`} target='_blank' rel="noreferrer" >
            <span>
                &#123;{content}&#125;
            </span>
        </a>
    )
}

export default AButton;