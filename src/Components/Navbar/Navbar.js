import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";


function TopNavbar() {
    const location = useLocation();
    const pages = ["home", "about", "portfolio", "qualification", "experience", "contact"];
    return (
        <Navbar collapseOnSelect expand="xl">
            <Container>
                <Navbar.Brand className='avg_fonts white_color'>
                    &#47;&#47;&nbsp;&nbsp;JASH PATEL
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
                                if (page === "home") {
                                    return <Nav.Link key={page} href="./" className={`small_fonts pe-3 ${location.pathname === "/" ? 'li_selected' : 'li_not_selected'}`}>_{page}</Nav.Link>
                                }
                                const path = "./" + page;
                                return <Nav.Link key={page} as={NavLink} to={`.${path}`} className={`small_fonts pe-3 ${location.pathname === `/${page}` ? 'li_selected' : 'li_not_selected'}`}>_{page}</Nav.Link>
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;