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
    return(
      <>
        <h6>Description: {this.props.day.description}</h6>
        <p>Date: {this.props.day.date}</p>
      </>
    )
  }
}

export default WeatherDay;
