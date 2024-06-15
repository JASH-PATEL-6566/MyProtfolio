import React, { useState, useEffect } from 'react';
import "./TypeAnimation.css";

function TypeAnimation({ texts, color, size, time }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        const steps = currentText.split("").length;
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, time * 1000); // adding extra time for the cursor animation

        return () => clearInterval(interval);
    }, [currentText, texts.length, time]);

    useEffect(() => {
        setCurrentText(texts[currentIndex]);
    }, [currentIndex, texts]);

    const steps = currentText.split("").length;
    return (
        <div className="type_container">
            <p className={`text ${size}_fonts`} style={{ color: `var(--${color}-color)`, borderRight: `10px solid var(--${color}-color)`, animation: `typing ${time}s steps(${steps}) infinite,cursor 0.5s step-end infinite alternate` }}>{currentText}</p>
        </div >
    )
}

export default TypeAnimation;