import React from 'react'
import TopNavbar from '../Components/Navbar/Navbar';
import { Container } from 'react-bootstrap';

function BaseLayout({ children }) {
    return (
        <>
            <TopNavbar />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default BaseLayout;