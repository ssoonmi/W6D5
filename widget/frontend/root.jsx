import React from 'react';
import Clock from './clock';
import Tab from './tab';
import Weather from './weather';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
      <Clock/>
      <Tab/>
      <Weather/>
    </div>);
  }

}

export default Root;
