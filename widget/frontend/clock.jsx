import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state= {time: new Date()};
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
    <article className="clock">
      <h1>Clock</h1>
      <section>
        <div><span>TIME : </span><span>{this.state.time.toLocaleTimeString()}</span></div>
        <div><span>DATE : </span><span>{this.state.time.toDateString()}</span></div>
      </section>
    </article>);
  }
}

export default Clock;
