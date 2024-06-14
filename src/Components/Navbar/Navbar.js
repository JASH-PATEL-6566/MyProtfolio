import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";


function TopNavbar() {
    const location = useLocation();
    const pages = ["home", "about", "portfolio", "services", "resume", "contact"];
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='avg_fonts white_color'>
                    //&nbsp;&nbsp;&nbsp;JASH PATEL
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: 'none', outline: 'none' }}>
                    <FaBars style={{ color: "white" }} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        {
                            pages.map(page => {
                                if (page == "home") {
                                    return <Nav.Link key={page} href="./" className={`small_fonts pe-3 ${location.pathname == "/" ? 'li_selected' : 'li_not_selected'}`}>_{page}</Nav.Link>
                                }
                                const path = "/" + page;
                                return <Nav.Link key={page} href={`.${path}`} className={`small_fonts pe-3 ${location.pathname == path ? 'li_selected' : 'li_not_selected'}`}>_{page}</Nav.Link>
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;