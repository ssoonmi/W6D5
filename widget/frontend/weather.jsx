import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weatherLoc: "loading weather...", weatherTemp: ""};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((data) => {
      this.getWeather(data);
    });
  }

  getWeather(data) {
    const { coords: {latitude: lat, longitude: lon }} = data;
    const request = new XMLHttpRequest();
    request.open('GET',
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&id=524901&APPID=b0bdba5e31e447e64bf03c5649fc2ee3`, true);
    let that = this;
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        const { name, main: { temp }} = JSON.parse(request.responseText);
        that.setState({weatherLoc: name});
        const temperature = ((parseFloat(temp) - 273) * 9/5 + 32).toPrecision(4) + '°F';
        that.setState({weatherTemp: temperature});
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }

  render() {
    return (
      <article className="weather">
        <h1>Weather</h1>
        <section>
          <div>
            {this.state.weatherLoc}
          </div>
          <div>
            {this.state.weatherTemp}
          </div>
        </section>
      </article>
    );
  }
}

export default Weather;
