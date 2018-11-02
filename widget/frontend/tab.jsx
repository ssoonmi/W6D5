import React from 'react';
import TabHeader from './tab_header';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0, 0: 'Hello Brian!', 1: 'Hello Soon-Mi!', 2: 'Hello aA!'};
  }

  tabHandler(idx) {
    this.setState({index: idx});
  }

  render() {
    const headers = ['one', 'two', 'three'];
    const tabHeaders = headers.map((header, idx) => {
      return (<TabHeader tabHandler={this.tabHandler.bind(this)} headerName = {header} key={idx} idx={idx} className={this.state.index === idx ? "current-tab" : ""}/>);
    });

    return(
      <article className="tabs">
        <h1>Tabs</h1>
        <div>
          <ul>
            {tabHeaders}
          </ul>
          <section>
            {this.state[this.state.index]}
          </section>
        </div>
      </article>
    );
  }
}

export default Tab;
