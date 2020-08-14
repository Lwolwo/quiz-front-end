import React, { Component } from 'react';
import './Store.css'
import Card from '../card/Card'

export default class Store extends Component {
  render() {
    return (
      <div className="store">
        <div className="products">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}