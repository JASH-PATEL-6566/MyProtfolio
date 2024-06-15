import React from 'react'

function Column({ children, className, style }) {
    return (
        <div className={`col-md-6 d-flex flex-column justify-content-center ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Column;