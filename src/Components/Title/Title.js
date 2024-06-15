import React from 'react'
import "./Title.css";

function Title({ symbol, title, discription }) {
    return (
        <div className="title_container">
            {symbol === "" ?
                <span className="symbol blue_color small_avg_fonts m-0"> {symbol}</span> :
                <span className="symbol blue_color small_avg_fonts m-0"> &#123;{symbol}&#125;</span>
            }
            <p className="heading vvbig_fonts m-0">&#60;{title}&#62;</p>
            <p className="discription yellow_color small_fonts m-0">{discription}</p>
        </div>
    )
}

export default Title;