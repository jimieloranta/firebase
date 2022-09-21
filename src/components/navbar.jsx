import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SignInOutButton from "./SignInOutButton";
import { useUser } from 'reactfire';

export default function ppbar() {
  const {data:user} = useUser();
  return (
    <>
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand >Chat</Navbar.Brand>
        { user && <Navbar.Text>
          Sisäänkirjautunut : <a>{user.displayName}</a>
          </Navbar.Text>}
        <SignInOutButton/>
      </Container>
    </Navbar>
    </>
  );
}
