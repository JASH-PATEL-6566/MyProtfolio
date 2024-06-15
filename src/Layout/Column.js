import React from 'react'

function Column({ children, className }) {
    return (
        <div className={`col-md-6 d-flex flex-column justify-content-center align-items-center ${className}`}>
            {children}
        </div>
    )
}

export default Column;