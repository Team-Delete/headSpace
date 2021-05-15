import React from 'react';
import './App.css';
// import Mood from './Mood';
import Profile from './Profile';
import AboutUs from './AboutUs';
// import Weather from './Weather';
// import Quote from './Quote';
// import Jokes from './Jokes';
// import Navbar from 'react-bootstrap/Navbar';
// import { Button, Nav } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



// Use for the main stream line component. Should have low functions, high imports for render.

// Render compenent -- shouldn't need bootstrap.

// Router


class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Switch>
            {/* reminder! Change first <Profile /> to Home when merged with kevins code */}
            <Route exact path="/">{isAuthenticated ? <Profile /> : <Profile />};
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default withAuth0(App);



{/* <>
<Navbar bg="dark" variant="dark" fixed="top">
  <Navbar.Brand>Welcome!</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="/Home">Home</Nav.Link>
    <Nav.Link href="/Profile">Profile</Nav.Link>
    <Nav.Link href="/About">About Us</Nav.Link>
    {/* <Nav.Link href="/Suggestions">Suggestions</Nav.Link> */}
//   </Nav>
//   <Button variant="dark" size="lg" onClick={this.props.UserProfile}>Add new user</Button>
// </Navbar>
// <Profile /> */}
