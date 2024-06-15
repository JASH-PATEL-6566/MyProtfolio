import React from 'react';
import "./LinkButton.css";
import { Link } from 'react-router-dom';

function LinkButton({ to, content }) {
    return (
        <Link to={to} className='button small_fonts'>
            <span>
                &#123;{content}&#125;
            </span>
        </Link>
    )
}

export default LinkButton;