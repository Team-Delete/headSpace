import React from 'react';

class Jokes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div id='joke-container'>
          <h2 id='joke--text'>{this.props.jokeData}</h2>
        </div>
      </>
    );
  }
}
export default Jokes;
