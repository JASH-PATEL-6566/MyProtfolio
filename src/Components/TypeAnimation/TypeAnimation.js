import React from 'react';
import "./TypeAnimation.css";

function TypeAnimation({ text, color, size, time }) {
    const steps = (text.split("")).length;
    return (
        <div className="type_container">
            <p className='text' style={{ fontSize: `${size}px`, color: `var(--${color}-color)`, borderRight: `10px solid var(--${color}-color)`, animation: `typing ${time}s steps(${steps}) infinite,cursor 0.5s step-end infinite alternate` }}>{text}</p>
        </div >
    )
}

export default TypeAnimation;