import React from 'react';

// Weather data for static display

// link to API

// link to Database

// Bootstrap Required


class WeatherDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log(this.props.weatherData);
    return(
      <>
        <h6>Description: {this.props.weatherData.description}</h6>
        {/* <p>Date: {this.props.weatherData.date}</p> */}
        <p>Clouds: {this.props.weatherData.clouds}</p>
        {/* <p>{this.props.weatherData.}</p> */}
        <p>Temp: {this.props.weatherData.temp}°C</p>
        <p>Wind Direction: {this.props.weatherData.directionString} -{this.props.weatherData.directionDegree}</p>
        {/* <div style={"color:blue;"}>!</div> */}
        {/* <h1 style="color:blue;">A Blue Heading</h1> */}
      </>
    )
  }
}

export default WeatherDay;
