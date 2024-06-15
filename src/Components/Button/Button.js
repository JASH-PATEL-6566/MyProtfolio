import React from 'react';
import "./Button.css";

function Button({ type = "button", content }) {
    return (
        <button type={type} className='button small_avg_fonts'>
            <span>
                &#123;{content}&#125;
            </span>
        </button>
    )
}

export default Button;