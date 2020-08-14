import React, { Component } from 'react';
import './AddProduct.css'

export default class AddProduct extends Component {
  render () {
    return (
      <div className="addProduct">
        <h1>添加商品</h1>
        <form className="form">
          <div className="formItem">
            <label htmlFor="name" className="form-label">名称：</label>
            <input type="text" className="form-control" placeholder="名称" />
          </div>
          <div className="formItem">
            <label htmlFor="price">价格：</label>
            <input type="text" className="form-control" placeholder="价格" />
          </div>
          <div className="formItem">
            <label htmlFor="name">单位：</label>
            <input type="text" className="form-control" placeholder="单位" />
          </div>
          <div className="formItem">
            <label htmlFor="name">图片：</label>
            <input type="text" className="form-control" placeholder="URL" />
          </div>
          <div className="btn btn-primary">提交</div>
        </form>
      </div>
    )
  }
}