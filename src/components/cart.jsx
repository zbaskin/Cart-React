import React, { Component } from "react";
import { Row, Col } from 'antd';

class Cart extends Component {
  render() {
    const {
      counters,
      totalSum
    } = this.props;
    return (
      <div>
        <p>Your collection:</p>

        {this.props.counters.filter(c => c.value !== 0).map((counter, id) => {
          return (
            <Row key={id}>
              <Col md={16}>
                {counter.name}
              </Col>
              <Col md={8}>
                {counter.value} Items
              </Col>
            </Row>
          )
        })}
        <Row>
          <Col md={16} />
          <Col md={8}><strong>{this.props.totalSum} Total Items</strong></Col>
        </Row>
      </div>
    );
  }
}

export default Cart;
