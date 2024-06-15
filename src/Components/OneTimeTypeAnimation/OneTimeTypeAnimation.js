import "./OneTimeTypeAnimation.css";

function OneTimeTypeAnimation({ text, color, size, time }) {
    const steps = (text.split("")).length;
    return (
        <div className="type_container">
            <p className={`text ${size}_fonts`} style={{ color: `var(--${color}-color)`, borderRight: `10px solid var(--${color}-color)`, animation: `typing ${time}s steps(${steps}),cursor 0.5s step-end infinite alternate` }}>{text}</p>
        </div >
    )
}

export default OneTimeTypeAnimation;