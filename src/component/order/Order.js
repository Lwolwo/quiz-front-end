import React, { Component } from 'react';
import './Order.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Prompt from '../prompt/Prompt'

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      message: "",
      show: false
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  async fetchData () {
    const result = await fetch('http://localhost:8080/order', {
      method: 'get',
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

  async handleDelete (id) {
    await fetch(`http://localhost:8080/order/${id}`, {
      method: 'delete',
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        this.setState({
          show: true,
          message: "订单删除成功！"
        });
      } else {
        this.setState({
          show: true,
          message: "订单删除失败，请稍后再试"
        });
      }
      this.fetchData();

    });
  }

  render () {
    const { data, show, message } = this.state;
    return (
      <div className="order">
        {
          data.length === 0 ? <div className="noOrder">暂无订单，返回商城页面继续购买</div>
            :
            <table className="table table-hover">
              <thead className="thead-dark">
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
        {
          show && <Prompt show={show} message={message} onHide={() => {
            this.setState({ show: false });
          }} />
        }
      </div>
    )
  }
}