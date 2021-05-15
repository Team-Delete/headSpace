import React from 'react';
import { withAuth0, useAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';


// TO DO //

// Auth0 main frame for initalizing user component
// axios call for mood updating

// internal links for further page navigation

// QR code in comming and out going linkage

// bootstrap required

// __ DONE__
// main profile page


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button variant="dark" onClick={() => loginWithRedirect()}>Sign in!</Button>;
};

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


class Profile extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>Welcome! Profile Page</Card.Title>
          </Card.Body>
          {isAuthenticated ? '' : <LoginButton />}
        </Card>

        <UserProfile />
      </>
    );
  }
}
export default withAuth0(Profile);
