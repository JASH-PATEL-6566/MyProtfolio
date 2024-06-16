import React from 'react'
import OneTimeTypeAnimation from "../OneTimeTypeAnimation/OneTimeTypeAnimation";
import FixImage from '../FixImage/FixImage';
import image from "../../Assets/image1.jpg";

function PageStarting({ children, title, discription, disSize, isImage = true }) {
    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center pt-4'>
                <OneTimeTypeAnimation text={title} color="sky-blue" size="vvbig" time={3} />
                <p className={`${disSize}_fonts yellow_color text-center`} style={{ width: '75%' }}>{discription}</p>
                {children}
            </div>
            {isImage ? <FixImage image={image} height={18} className={"mt-5"} /> : <></>}
        </>
    )
}

export default PageStarting;