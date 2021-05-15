import React from 'react';
import { withAuth0, useAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap';
import { User } from '@auth0/auth0-spa-js/dist/typings';


// TO DO //

// Auth0 main frame for initalizing user component
// axios call for mood updating

// internal links for further page navigation

// QR code in comming and out going linkage

// bootstrap required

// __ DONE__
// main profile page

console.log('Figureing out where i can start');
const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading Page</div>;
  }
  return (
    isAuthenticated && (
      <>
        <img id="Picture" src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </>
    )
  );
};
const LogoutButton = () => {
  const { logout } = useAuth0();
  return <Button variant="dark" onClick={() => logout({ returnTo: window.location.origin })}> Log Out </Button>
};


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button variant="dark" onClick={() => loginWithRedirect()}>Sign in!</Button>;
};

console.log('IM working here');


class Profile extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand>please work</Navbar.Brand>
          <Nav>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
          </Nav>
          <LoginButton />
          <LogoutButton />
        </Navbar>
        <Card>
          <Card.Body>
            <Card.Title>Wele! Profile Page</Card.Title>
          </Card.Body>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Card>
        <UserProfile />
      </>
    );
  }
}
export default withAuth0(Profile);
