import React from 'react'

function Column({ children, className, style, justify = "justify-content-center" }) {
    return (
        <div className={`col-md-6 d-flex flex-column ${justify} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Column;