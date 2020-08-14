import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {
  render () {
    return (
      <div className="card">
        <img src={require("../../asserts/1.jpg")} alt="pic" />
        <p className="name">可乐1</p>
        <p className="price">单价：1元/瓶</p>
        <button className="button">+</button>
      </div>
    )
  }
}