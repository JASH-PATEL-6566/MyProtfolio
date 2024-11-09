import React, { useRef } from 'react'
import FixImage from '../FixImage/FixImage';
import Title from '../Title/Title';
import image from "../../Assets/image1.jpg";
import "./ContactBottom.css";
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';
// require('dotenv').config()

function ContactBottom({ showExtra = true }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
            })
            .then(
                () => {
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            {showExtra ? <FixImage image={image} height={18} className={"mt-5"} /> : <></>}
            {showExtra ? <Title symbol={"*"} title={"contact_me"} discription={"l askdjha ksdjh aksjdh kajsdh ka"} /> : <></>}
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column justify-content-center align-items-center">
                <input type="text" className='input small_fonts' placeholder='_name*' spellCheck="false" name='from_name' />
                <input type="email" className='input small_fonts' placeholder='_email*' spellCheck="false" name="reply_to" />
                <textarea rows="7" className='input textarea small_fonts' placeholder='_message*' spellCheck="false" name="message" />
                <Button content={"send"} type='submit' />
            </form>
        </>
    )
}

export default ContactBottom;