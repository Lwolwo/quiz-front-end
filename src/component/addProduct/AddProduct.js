import React, { Component } from 'react';
import './AddProduct.css'
import Prompt from '../prompt/Prompt'


export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      type: "",
      picUrl: "",
      show: false,
      message: ""
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    }, () => this.formIsFinished());
  }

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    }, () => this.formIsFinished());
  }

  handleTypeChange = (event) => {
    this.setState({
      type: event.target.value,
    }, () => this.formIsFinished());
  }

  handlePicUrlChange = (event) => {
    this.setState({
      picUrl: event.target.value,
    }, () => this.formIsFinished());
  }

  formIsFinished () {

  }

  handleSubmit = async () => {    
    const { name, price, type, picUrl } = this.state;

    const data = {
      name: name,
      price: price,
      type: type,
      picUrl: picUrl,
    }
    
    await fetch("http://localhost:8080/product", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.status >= 200 && response.status <= 299) {
        this.setState({
          show: true,
          message: "添加商品成功！"
        })
      }
    });

    this.setState({
      name: "",
      price: "",
      type: "",
      picUrl: ""
    })
  }

  render () {
    const { name, price, type, picUrl, show, message } = this.state;
    return (
      <div className="addProduct">
        <h1>添加商品</h1>
        <form className="form" onSubmit={() => this.handleSubmit()}>
          <div className="formItem">
            <span className="must">* </span>
            <label htmlFor="name" className="form-label">名称：</label>
            <input type="text" className="form-control" placeholder="名称" value={name} onChange={this.handleNameChange} />
          </div>
          <div className="formItem">
            <span className="must">* </span>
            <label htmlFor="price">价格：</label>
            <input type="number" className="form-control" placeholder="价格" value={price} min="0" onChange={this.handlePriceChange} />
          </div>
          <div className="formItem">
            <span className="must">* </span>
            <label htmlFor="name">单位：</label>
            <input type="text" className="form-control" placeholder="单位" value={type} onChange={this.handleTypeChange} />
          </div>
          <div className="formItem">
            <span className="must">* </span>
            <label htmlFor="name">图片：</label>
            <input type="text" className="form-control" placeholder="URL" value={picUrl} onChange={this.handlePicUrlChange} />
          </div>
          <div className="button formItem">
            <button className="btn btn-primary" type="submit">提交</button>
          </div>
        </form>
        {
          show && <Prompt show={show} message={message} onHide={() => {
            this.setState({ show: false });
          }} />
        }
      </div>
    )
  }
}