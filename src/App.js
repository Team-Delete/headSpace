import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';
// import Mood from './Mood';
// import Profile from './Profile';
// import Weather from './Weather';
// import Jokes from './Jokes';

// Use for the main stream line component. Should have low functions, high imports for render.

class App extends Component {
  constructor(props) {
    super(props);

    console.log('constructor runs');
  }

  componentDidMount() {
    console.log('componentDidMount runs');
  }

  // Render compenent -- shouldn't need bootstrap.

  render() {
    console.log('render method runs');
    return (
      <div>
        {/* <h1>Hello</h1> */}
        <Quote/>
      </div>
    );
  }
}

export default App;
