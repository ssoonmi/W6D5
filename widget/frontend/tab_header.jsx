import React from 'react';

class TabHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {top: "", left: ""};
  }

  clickHandler() {
    let pos = 0;
    let incr = 1;
    if (this.props.idx === 2) {
      incr = -1;
    }
    let time = 0;
    let id = setInterval(frame.bind(this), 5);
    function frame() {
        if (time == 20) {
            clearInterval(id);
        } else if (time >= 10){
            pos-=incr;
            this.setState({style: {left: pos + 'px'}});
        } else {
            pos+=incr
            this.setState({style: {left: pos + 'px'}});
        }
        time++;
    }
    this.props.tabHandler(this.props.idx);
    this.state.clicked = false;
  }

  render() {
    return (
      <li style={this.state.style}onClick={this.clickHandler.bind(this)} className={this.props.className}>{this.props.headerName}</li>
    );
  }
}

export default TabHeader;
