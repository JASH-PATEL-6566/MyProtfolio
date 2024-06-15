import React from 'react'

function ImageDetails({ title, discription }) {
    return (
        <>
            <p className='avg_fonts mb-0'>&#123;{title}&#125;</p>
            <p className='vsmall_fonts m-0 yellow_color text-center w-50'>{discription}</p>
        </>
    )
}

export default ImageDetails;