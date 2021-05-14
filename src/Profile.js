import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';


// TO DO // 
// Auth0 main frame for initalizing user component, 

// main profile page, 

// axios call for mood updating

// internal links for further page navigation

// QR code in comming and out going linkage

// bootstrap required

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = withAuth0();

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


class Profile extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="WHATEVER URL">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            {/* <Nav.Link href="/Suggestions">Suggestions</Nav.Link> */}
          </Nav>
        </Navbar>
        <UserProfile />
        <h2>Hello! Welcome to my APP</h2>
      </>
    );
  }
}
export default withAuth0(Profile);
