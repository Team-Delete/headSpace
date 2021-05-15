import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <WeatherDay />
      </>
    );
  }
}

export default Weather;
