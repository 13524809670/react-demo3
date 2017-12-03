import React from 'react';
import '../css/style.css';
export default class four extends React.Component {
  constructor(){
    super();
    this.state = {name:'欢迎学习ReactJs!'};
  }
  btnClick(name,e){
    e.preventDefault(); //阻止默认事件
    alert(name);
  }
  render() {
    return (
      <div className="elent">
        <h1>Hello</h1>
        <a href="https://reactjs.org" onClick={this.btnClick.bind(this,this.state.name)}>CLICK</a>
      </div>
    );
  }
}