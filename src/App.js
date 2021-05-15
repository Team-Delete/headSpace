import axios from 'axios';
import React from 'react';
import Jokes from './Jokes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleMoodSubmit = async (event) => {
    event.preventDefault();
    try {
      this.getJoke();
    } catch (err) {
      console.log(err);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  getJoke = async () => {
    try {
      let jokeData = await axios.get(`https://v2.jokeapi.dev/joke/Dark?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=1`);
      // console.log(jokeData.data.joke);
      this.setState({ jokeData: jokeData.data.joke});
    } catch (err) {
      console.log(`error found!!! ${err.message}`);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleMoodSubmit}>
          Set Mood and call Joke API
        </button>
        {/* <h2>Returned Joke:</h2> */}
        {/* <p>{jokeData}</p> */}
        <Jokes jokeData={this.state.jokeData} />
      </>
    )
  }
}

export default App;
