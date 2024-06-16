import React from 'react'
import FixImage from '../FixImage/FixImage';
import Title from '../Title/Title';
import image from "../../Assets/image1.jpg";
import "./ContactBottom.css";
import Button from '../Button/Button';

function ContactBottom({ showExtra = true }) {
    return (
        <>
            {showExtra ? <FixImage image={image} height={18} className={"mt-5"} /> : <></>}
            {showExtra ? <Title symbol={"*"} title={"contact_me"} discription={"l askdjha ksdjh aksjdh kajsdh ka"} /> : <></>}
            <div className="d-flex flex-column justify-content-center align-items-center">
                <input type="text" className='input small_fonts' placeholder='_name*' spellcheck="false" />
                <input type="text" className='input small_fonts' placeholder='_email*' spellcheck="false" />
                <textarea rows="7" className='input textarea small_fonts' placeholder='_message*' spellcheck="false" />
                <Button content={"send"} />
            </div>
        </>
    )
}

export default ContactBottom;