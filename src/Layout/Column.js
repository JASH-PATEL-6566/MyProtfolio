import React from 'react'

function Column({ children, className, style, justify = "justify-content-center", flexType = 'column' }) {
    return (
        <div className={`col-md-6 d-flex flex-${flexType} ${justify} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Column;