import React from 'react'

function Row({ children, className }) {
    return (
        <div className={`row w-100 ${className}`}>
            {children}
        </div>
    )
}

export default Row;