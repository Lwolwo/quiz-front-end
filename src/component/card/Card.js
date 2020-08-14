import React, { Component } from 'react';

import './Card.css'

export default class Card extends Component {
  render () {
    const {name, price, type, picUrl} = this.props;
    return (
      <div className="card">
        {/* <img src={require(picUrl)} alt="pic" /> */}
        <img src={require("../../asserts/1.jpg")} alt="pic" />
        <p className="name">{name}</p>
        <p className="price">单价：{price}元/{type}</p>
        <button className="button">+</button>
      </div>
    )
  }
}