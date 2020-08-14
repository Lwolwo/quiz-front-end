import React, { Component } from 'react';
import './Store.css'
import Card from '../card/Card'

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount () {
    const result = await fetch('http://localhost:8080/product', {
      method: 'GET',
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      }
      return Promise.reject();
    });
    this.setState({
      products: result
    })
  }

  render () {
    const { products } = this.state;
    return (
      <div className="store">
        <div className="products">
          {
            products.map((item, index) =>
              <Card key={index} name={item.name} price={item.price} type={item.type} picUrl={item.picUrl} prodId={item.id} />
            )
          }
        </div>
      </div>
    )
  }
}