import React from 'react';
import { Carousel } from 'antd';
import CarouselSlide from '../css/CarouselSlide.css';

export default class Car extends React.Component{
  render() {
    return (
      <div className="carousel">
          <Carousel autoplay>
            <div className="imgBox"><img src={require('../img/1.jpg')} alt="" /></div>
            <div className="imgBox"><img src={require('../img/2.jpg')} alt="" /></div>
            <div className="imgBox"><img src={require('../img/3.jpg')} alt="" /></div>
            <div className="imgBox"><img src={require('../img/4.jpg')} alt="" /></div>
            <div className="imgBox"><img src={require('../img/5.jpg')} alt="" /></div>
          </Carousel>
      </div>
    );
  }
}