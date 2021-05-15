import axios from 'axios';
import React from 'react';
// import Weather from './Weather';
import Jokes from './Jokes';

// temp imports to render weather
import Error from './Error';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import WeatherDay from './WeatherDay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      weatherData: [],
      // movieData: [],
      searchedYet: false
    };
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.147c380296b5e463e0f911244af73a5e&q=${this.state.city}&format=json`);
      let cityTarget = cityData.data[0];
      this.setState({
        cityName: cityTarget.display_name,
        lat: cityTarget.lat,
        lon: cityTarget.lon,
        searchedYet: true
      });
      this.getWeatherData();
      console.log(this.state);
    } catch (err) {
      console.log(err);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  getWeatherData = async () => {
    try {
      let weatherData = await axios.get(`http://localhost:3002/weather`, {
        params: {
          lat: this.state.lat,
          lon: this.state.lon
        }
      });
      console.log('this works', weatherData);
      this.setState({
        weatherData: weatherData.data[0]
      })
    } catch (err) {
      console.log(`error found!!! ${err.message}`);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
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
      this.setState({ jokeData: jokeData.data.joke });
    } catch (err) {
      console.log(`error found!!! ${err.message}`);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  render() {
    console.log(this.state.weatherData);
    return (
      <>
        {this.state.error ? <Error error={this.state.error} /> : ''}
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="City">
            <Form.Label>City name</Form.Label>
            <Form.Control value={this.state.city} onInput={e => this.setState({ city: e.target.value })}></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Set WeatherData
          </Button>
        </Form>
        {this.state.cityData.lat === undefined ?
          <>
            <WeatherDay weatherData={this.state.weatherData} />
          </>
          : console.log(`dang`)}

          {/* <WeatherDay /> */}
        <button onClick={this.handleMoodSubmit}>
          Set Mood and call Joke API
        </button>
        <Jokes jokeData={this.state.jokeData} />
      </>
    )
  }
}

export default App;
