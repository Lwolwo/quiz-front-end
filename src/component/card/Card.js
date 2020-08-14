import React, { Component } from 'react';

import './Card.css'

export default class Card extends Component {

  async handleClick(id) {
    await fetch(`http://localhost:8080/product/${id}`, {
      method: 'post'
    });
  }
  render () {
    const {name, price, type, picUrl, prodId} = this.props;
    return (
      <div className="card">
        {/* <img src={require(picUrl)} alt="pic" /> */}
        <img src={require("../../asserts/1.jpg")} alt="pic" />
        <p className="name">{name}</p>
        <p className="price">单价：{price}元/{type}</p>
        <button className="button" onClick={() => this.handleClick(prodId)}>+</button>
      </div>
    )
  }
}