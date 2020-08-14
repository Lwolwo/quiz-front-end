import React, { Component } from 'react';

import './Card.css'

export default class Card extends Component {

  async handleClick (id) {
    await fetch(`http://localhost:8080/product/${id}`, {
      method: 'post'
    });
  }
  render () {
    const { name, price, type, picUrl, prodId } = this.props;
    return (
      <div className="card">
        <img src={require("../../" + picUrl)} alt="pic" />
        {/* <img src={require("../../asserts/4.jpg")} alt="pic" /> */}

        <p className="name">{name}</p>
        <p className="price">单价：{price}元/{type}</p>
        <button className="button" onClick={() => this.handleClick(prodId)}>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        </button>
      </div>
    )
  }
}