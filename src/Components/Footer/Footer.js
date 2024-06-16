import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <div className="all_container top-border  mt-5 py-3">
            <div className="links div">
                <Link className='link yellow_color' to="/">_home</Link>
                <Link className='link yellow_color' to="/about">_about</Link>
                <Link className='link yellow_color' to="/portfolio">_portfolio</Link>
                <Link className='link yellow_color' to="/services">_services</Link>
                <Link className='link yellow_color' to="/resume">_resume</Link>
                <Link className='link yellow_color' to="/contact">_contact</Link>
            </div>
            <div className="social d-flex align-items-center justify-content-center gap-3 div">
                <FaLinkedin className='white_color mid_fonts' />
                <FaInstagram className='white_color mid_fonts' />
            </div>
            {/* <div className="div"> */}
            <p className='yellow_color vsmall_fonts'>Copyright &#169; 2024 Jash Patel</p>
            {/* </div> */}
        </div>
    )
}

export default Footer;