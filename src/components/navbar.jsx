import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignInOutButton from "./SignInOutButton";

function BasicExample() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand >Chat</Navbar.Brand>
        <SignInOutButton/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
