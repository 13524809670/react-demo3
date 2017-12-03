import React from 'react';
import '../css/style.css';
export default class three extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isToggleOn:!prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="MarkDownEditor">
        <button onClick={this.handleClick}>
          {this.state.isToggleOn? 'NO' : 'OFF'}
        </button>
      </div>
    );
  }
}