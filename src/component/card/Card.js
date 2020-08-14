import React, { Component } from 'react';

import './Card.css'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnDisable: false
    }
  }

  handleClick (id) {
    this.setState({
      btnDisable: true
    }, async() => {
      await fetch(`http://localhost:8080/product/${id}`, {
        method: 'post'
      }).then(response => {
        if (response.status === 200) {
          this.setState({
            btnDisable: false
          })
        }
      });
    })

  }
  render () {
    const { name, price, type, picUrl, prodId } = this.props;
    const { btnDisable } = this.state;
    return (
      <div className="card">
        <img src={require("../../" + picUrl)} alt="pic" />
        {/* <img src={require("../../asserts/4.jpg")} alt="pic" /> */}

        <p className="name">{name}</p>
        <p className="price">单价：{price}元/{type}</p>
        <button className="button" onClick={() => this.handleClick(prodId)} disabled={btnDisable}>
          {
            !btnDisable ? <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
              <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg> :
              <svg className="bi bi-plus-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
              </svg>
          }

        </button>
      </div>
    )
  }
}