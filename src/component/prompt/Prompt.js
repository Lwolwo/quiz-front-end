import React, { Component } from 'react';
import './Prompt.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export default class Prompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    };
  }

  handleClose = () => {
    this.props.onHide();
  }

  render () {
    const { message } = this.props;
    const { show } = this.state;
    return (
      <div className="prompt">
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>提示</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              确认
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}