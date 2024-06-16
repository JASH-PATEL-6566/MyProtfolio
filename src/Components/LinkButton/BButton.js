import React from 'react';
import "./AnchorButton.css";

function BButton({ to, content }) {
    return (
        <a href={to} className='buttonLive small_avg_fonts' target='_blank' rel="noreferrer" >
            <span>
                &#123;{content}&#125;
            </span>
        </a>
    )
}

export default BButton;