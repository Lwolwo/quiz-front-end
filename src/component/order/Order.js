import React, { Component } from 'react';
import './Order.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  async componentDidMount() {
    const result = await fetch('http://localhost:8080/order', {
      method: 'GET',
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      }
      return Promise.reject();
    });
    this.setState({
      data: result
    })
  }

  async handleDelete (id){
    const result = await fetch('http://localhost:8080/order', {
      method: 'delete',
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      }
      return Promise.reject();
    });
  }

  render () {
    const {data} = this.state;
    return (
      <div className="order">
        {
          data.length === 0 ? <div class="noOrder">暂无订单，返回商城页面继续购买</div>
          : <table class="table">
          <thead>
            <tr>
              <th scope="col">名字</th>
              <th scope="col">单价</th>
              <th scope="col">数量</th>
              <th scope="col">单位</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => {
                return (<tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.type}</td>
                  <td><button className="btn btn-danger" onClick={() => this.handleDelete(item.id)}>删除</button></td>
                </tr>);
              })
            }
          </tbody>
        </table>
        }
      </div>
    )
  }
}