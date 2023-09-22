import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        alt=""
                        src="https://static.wixstatic.com/media/0d892f_62d053a848294789847b2e7bfb7d2a9b~mv2.png/v1/fill/w_175,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brandmark-design.png"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="">
                        <Nav.Link href="#bill-of-lading">Bill Of Lading</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        <a href="#login">Jonathon Morgan</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;