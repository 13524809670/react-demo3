import React, { Component } from 'react';
import Carousel from '../components/carousel'; // 入口文件引入 组件
import '../css/App.css';


import bgIm from '../img/bgImg.jpg'
const homeImage = {
  backgroundSize: '100% 100%', 
  background: 'url(' + bgIm + ')',
}


class App extends Component {

  constructor(props){
    super(props);
    // this.state = { hello: <a href="http://www.react-cn.com/" className="react">react中国</a> };
    this.state = { seconds: 0 };
  }

  tick(){
    this.setState((prevState) => ({
      seconds:prevState.seconds + 1
    }));
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App" style={ homeImage }>
        {/* <div className="App-head">
          {this.state.hello}
        </div> */}


        <div className="App-carousel">
          <Carousel />
        </div>


        <div className="App-intro">
          <h1>A-有状态组件</h1>
          <p>Seconds: {this.state.seconds}</p>
        </div>
      </div>
    );
  }
}
export default App;