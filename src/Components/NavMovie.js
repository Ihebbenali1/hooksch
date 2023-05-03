import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavMovie=()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Netfliks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#movies"><Link to='/contact'>Contact</Link></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </div>
    )

}



export default NavMovie