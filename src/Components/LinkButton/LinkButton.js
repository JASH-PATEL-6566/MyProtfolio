import React from 'react';
import "./LinkButton.css";
import { Link } from 'react-router-dom';

function LinkButton({ to, content, className }) {
    return (
        <Link to={to} className={`buttonLink small_avg_fonts ${className}`}>
            <span>
                &#123;{content}&#125;
            </span>
        </Link>
    )
}

export default LinkButton;