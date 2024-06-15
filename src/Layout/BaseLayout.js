import React from 'react'
import TopNavbar from '../Components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Footer from '../Components/Footer/Footer';

function BaseLayout({ children }) {
    return (
        <>
            <TopNavbar />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default BaseLayout;