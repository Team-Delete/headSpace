import React from 'react';
import './App.css';
import Mood from './Mood';
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
    console.log('Im here now');
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <AboutUs />
          <Switch> 
            reminder! Change first <Profile /> to Home when merged with kevins code
            <Route exact path="/Profile">{isAuthenticated ? <Mood /> : <Profile />};
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/AboutUs">
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default withAuth0(App);
