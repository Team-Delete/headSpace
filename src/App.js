import React from 'react';
import './App.css';
// import Mood from './Mood';
import Profile from './Profile';
// import Weather from './Weather';
// import Quote from './Quote';
// import Jokes from './Jokes';



// Use for the main stream line component. Should have low functions, high imports for render.

// Render compenent -- shouldn't need bootstrap.

// Router


class App extends React.Component {
  render() {
    return (
      <>
        <Profile />
        <h2>Hello!</h2>
      </>
    );
  }
}
export default App;
